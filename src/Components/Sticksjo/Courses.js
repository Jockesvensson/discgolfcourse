import React from 'react'
import { Outlet } from 'react-router-dom';

function Courses() {
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default Courses