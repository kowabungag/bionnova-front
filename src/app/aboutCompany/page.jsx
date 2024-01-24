'use client'
import React from "react";
import Activities from "@/components/Activities/Activities";
import AboutCompany from "@/components/AboutCompany/AboutCompany";
import Header from "@/components/Header/Header";

const AboutCompanyPage = () => {
    return (
        <div className={` page about-page`}>
            <AboutCompany/>
        </div>
    );
};

export default AboutCompany;