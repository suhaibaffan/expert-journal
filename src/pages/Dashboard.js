import Styled from 'styled-components';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import { getUserFromLocalStorage } from '../helpers/auth';
import { handleLogout } from '../hooks/logout';
import { getBackend, markCompleted, deleteTask } from '../axios';
import NoTask from '../components/NoTask';

const DashboardDiv = Styled.div`
    background: #F4F4F6 0% 0% no-repeat padding-box;
`;

export default function Dashboard () {
    const userObj = getUserFromLocalStorage();
    const [ loadMain, setLoadMain ] = useState( true );
    const [ allTasks, setAllTasks ] = useState([]);
    const [ originalTasks, setOriginalTasks ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ dashboard, setDashboard ] = useState({ latestTasks: [] });
    const [ searchText, setSearchText ] = useState( '' );

    const handleTaskCompleted = async value => {
        setSearchText( () => undefined );
        await markCompleted( value )
        await reload( setDashboard, setAllTasks, false, setOriginalTasks, setLoadMain );
    };

    const handleSearch = value => {
        value.persist();
        setSearchText( value.target.value );
        if ( !value.target.value ) {
            setAllTasks( () => [ ...originalTasks ].reverse());
            return;
        }
        const searchMatchedTasks = allTasks.filter( task => task.name.toLowerCase().includes( value.target.value ) );
        setAllTasks( () => [ ...searchMatchedTasks ]);
    };

    const refresh = async () => {
        setLoadMain( true );
        await reload( setDashboard, setAllTasks, setLoading, setOriginalTasks, setLoadMain );
        setSearchText( () => undefined );
    };

    const handleTaskDelete = async value => {
        await deleteTask( value );
        setSearchText( () => undefined );
        await reload( setDashboard, setAllTasks, setLoading, setOriginalTasks, setLoadMain );
    };

    useEffect( async () => {
        const result = await getBackend();
        if ( result.redirect ) {
            handleLogout();
        }
        setAllTasks( () => ([
            ...result.allTasks.tasks.reverse()
        ]) );

        setDashboard( () => ({
            ...result.dashboard
        }));

        setOriginalTasks( () => [ ...result.allTasks.tasks.reverse() ]);

        setLoadMain( ( result.allTasks.tasks.length === 0 ) ? false : true );
        setLoading( false );
    }, []);

    return (
        <DashboardDiv>
            <Navbar name={userObj.name} profile={userObj.profile} logout={handleLogout} />
            {
                loadMain ?
                <div>
                    <Section1 loading={loading} dashboard={dashboard} />
                    <Section2 loading={loading} refresh={refresh} handleSearch={handleSearch} search={searchText} />
                    <Section3 loading={loading} refresh={refresh} tasks={allTasks} handleTaskDelete={handleTaskDelete} handleTaskCompleted={handleTaskCompleted} />
                </div> :
                    <NoTask refresh={refresh} />
            }
        </DashboardDiv>
    );
}

async function reload ( setDashboard, setTasks, setLoading = false, setOriginalTasks, loadMain = false ) {
    if ( setLoading )
        setLoading( true );

    if ( loadMain )
        loadMain( true )

    const result = await getBackend();
        if ( result.redirect ) {
            handleLogout();
        }
    setTasks( () => ([
        ...result.allTasks.tasks.reverse()
    ]) );

    setOriginalTasks( () => ([
        ...result.allTasks.tasks.reverse()
    ]) );

    setDashboard( ( ) => ({
        ...result.dashboard
    }));

    if ( setLoading )
        setLoading( false );
    
    if ( loadMain && result.allTasks.tasks.length === 0 ) {
        loadMain( false );
    }
}
