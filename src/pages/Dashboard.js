import Styled from 'styled-components';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import { getUserFromLocalStorage } from '../helpers/auth';
import { handleLogout } from '../hooks/logout';
import { getBackend, markCompleted } from '../axios';

const DashboardDiv = Styled.div`
    background: #F4F4F6 0% 0% no-repeat padding-box;
`;

export default function Dashboard () {
    const userObj = getUserFromLocalStorage();
    const [ allTasks, setAllTasks ] = useState([]);
    const [ dashboard, setDashboard ] = useState({ latestTasks: [] });

    const handleTaskCompleted = async value => {
        await markCompleted( value )
        await reload( setDashboard, setAllTasks );
    }

    useEffect( async () => {
        const result = await getBackend();
        if ( result.redirect ) {
            handleLogout();
        }
        setAllTasks( tasks => ([
            ...tasks,
            ...result.allTasks.tasks
        ]) );

        setDashboard( data => ({
            ...data,
            ...result.dashboard
        }))
    }, [])
    return (
        <DashboardDiv>
            <Navbar name={userObj.name} profile={userObj.profile} logout={handleLogout} />
            <Section1 dashboard={dashboard} />
            <Section2 />
            <Section3 tasks={allTasks} handleTaskCompleted={handleTaskCompleted}/>
        </DashboardDiv>
    );
}

async function reload ( setDashboard, setTasks ) {
    const result = await getBackend();
        if ( result.redirect ) {
            handleLogout();
        }
        setTasks( () => ([
            ...result.allTasks.tasks
        ]) );

        setDashboard( ( ) => ({
            ...result.dashboard
        }))
}