"use client"
import React from 'react';
import Dashboard from '../../components/dashboard/Dashboard';
import DashboardLayout from '../../components/DashboardLayout';

const dashboard = () => {
    return (
        <>
            <DashboardLayout>
                <Dashboard />
            </DashboardLayout>
        </>
    )
}

export default dashboard