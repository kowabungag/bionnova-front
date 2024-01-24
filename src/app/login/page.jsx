'use client'
import React from 'react';
import Login from "../../components/Login/Login";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const loginPage = () => {
    return (
        <div>
            <Header/>
            <Login/>
            <Footer/>
        </div>
    );
};

export default loginPage;