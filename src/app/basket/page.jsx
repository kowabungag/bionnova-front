'use client'
import React from "react";
import Basket from "@/components/Basket/Basket";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const BasketPage = () => {
    return (
        <div>
            <Header/>
            <Basket/>
            <Footer/>
        </div>
    );
};

export default BasketPage;