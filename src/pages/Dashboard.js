import Navbar from '../components/Navbar';
import Section1 from '../components/Section1'
import Styled from 'styled-components';
import { getUserFromLocalStorage } from '../helpers/auth';
import { handleLogout } from '../hooks/logout';

const DashboardDiv = Styled.div`
    background: #F4F4F6 0% 0% no-repeat padding-box;
`;

// const Section1 = Styled.div`
//     margin: 22px auto;
// `;

export default function Dashboard () {
    const userObj = getUserFromLocalStorage();
    return (
        <DashboardDiv>
            <Navbar name={userObj.name} profile={userObj.profile} logout={handleLogout} />
            <Section1 />
        </DashboardDiv>
    );
}
