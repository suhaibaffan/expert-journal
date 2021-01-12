import Axios from 'axios';
import { getUserFromLocalStorage } from './helpers/auth';

export const axios = Axios.create({
    baseURL: 'https://glacial-island-05878.herokuapp.com'
});

export async function getBackend () {
    try {
        const userObj = getUserFromLocalStorage();
        const headers = {
            Authorization: `Bearer ${userObj?.token}`
        };
        const DashboardAPI = 'https://glacial-island-05878.herokuapp.com/user/dashboard';
        const GetAllTasksAPI = 'https://glacial-island-05878.herokuapp.com/user/tasks';
        const getDashboard = axios.get( DashboardAPI, { headers });
        const getAllTasks = axios.get( GetAllTasksAPI, { headers });

        const [response1, response2] = await Promise.all([ getDashboard, getAllTasks ]);
        return {
            dashboard: response1.data,
            allTasks: response2.data
        };
    } catch ( err ) {
        return { redirect: true };
    }
}

export async function markCompleted ( item ) {
    try {
        const userObj = getUserFromLocalStorage();
        const headers = {
            Authorization: `Bearer ${userObj?.token}`
        };
        const updateApi = `https://glacial-island-05878.herokuapp.com/user/tasks/${item._id}`;
    
        const response = await axios.put( updateApi, { completed: item.completed }, { headers });
        return response;
    } catch ( err ) {
        return { redirect: true }
    }
}

export async function deleteTask ( item ) {
    try {
        const userObj = getUserFromLocalStorage();
        const headers = {
            Authorization: `Bearer ${userObj?.token}`
        };
        const deleteApi = `https://glacial-island-05878.herokuapp.com/user/tasks/${item._id}`;
        const response = await axios.delete( deleteApi, { headers } );
        return response;
    } catch ( err ) {
        return { redirect: true };
    }
}

export async function createTask ( item ) {
    try {
        const userObj = getUserFromLocalStorage();
        const headers = {
            Authorization: `Bearer ${userObj?.token}`
        };
        const createApi = '/user/tasks';

        const response = await axios.post( createApi, { ...item }, { headers });
        return response;
    } catch ( err ) {
        return { redirect: true };
    }
}

export async function EditTask ( item ) {
    try {
        const userObj = getUserFromLocalStorage();
        const headers = {
            Authorization: `Bearer ${userObj?.token}`
        };
        const updateApi = `/user/tasks/${item._id}`;
    
        const response = await axios.put( updateApi, { name: item.name }, { headers });
        return response;
    } catch ( err ) {
        return { redirect: true }
    }
}
