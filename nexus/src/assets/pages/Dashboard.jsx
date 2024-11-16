import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
    return(
        <>
            <h1>Hello </h1>
            <h1>Dashboard</h1>
            <Link to="/dashboard/profile">Go to Profile</Link>
            <Link to="/dashboard/settings">Go to Settings</Link>

        </>
    )
}