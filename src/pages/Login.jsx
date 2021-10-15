
import React from "react";
import { useState } from "react";
import {BrowserRouter as Router, Switch, Link } from "react-router-dom";

import logo from '../assets/images/marco_cuadro.svg'
import Layout from "../components/layout/Layout";
import './login.css'


const Login = () => {

    return (
        <Router>
        <div>
            <div className="logo">
                <img src={logo} alt="MARCO Logo" />
            </div>
            <div className="form">
                <form>
                    <input type='username' name='username' placeholder='Username...' required onChange/>
                    <input type='password' name='pwd' placeholder='Password...' required onChange/>
                </form>
                <Link to = {Layout} className="button">Log In</Link>
            </div>
        </div>
        </Router>
    )
}

export default Login
