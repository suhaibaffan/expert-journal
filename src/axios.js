import Axios from 'axios';
import { getUserFromLocalStorage } from './helpers/auth';

export const axios = Axios.create({
    baseURL: 'https://glacial-island-05878.herokuapp.com'
});

export async function getBackend () {
    const userObj = getUserFromLocalStorage();
    const DashboardAPI = 'https://glacial-island-05878.herokuapp.com/user/dashboard';
    const GetAllTasksAPI = 'https://glacial-island-05878.herokuapp.com/user/tasks';
    const getDashboard = axios.get( DashboardAPI, {
        headers: {
            Authorization: `Bearer ${userObj.token}`
    }});
    const getAllTasks = axios.get( GetAllTasksAPI, {
        headers: {
            Authorization: `Bearer ${userObj.token}`
        }
    });

    const [response1, response2] = await Promise.all([ getDashboard, getAllTasks ]);
    return {
        dashboard: response1.data,
        allTasks: response2.data
    };
}
