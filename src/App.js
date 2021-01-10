import React, { useState, useEffect } from 'react';
import { useRoutes, useRedirect } from 'hookrouter';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { isLoggedIn } from './helpers/auth';

const routes = {
    '/': () => <Login />,
    '/dashboard': () => <Dashboard />
};

export default function App() {
    isLoggedIn() ? useRedirect( '/', '/dashboard' )
    : useRedirect( '/dashboard', '/' )
    const routesResult = useRoutes( routes );
    return (
        routesResult
    );
}
