'use client'
import React, {useEffect} from "react";
import AboutUsHome from "@/components/aboutUsHome/aboutUsHome";
import * as styles from "../home.module.scss"
import {scrollToTop} from "@/helpers/scrollToTop";
import useHomeLayoutContext from "@/hooks/useHomeLayoutContext";
import MyLoader from "@/components/UI/MyLoader/MyLoader";

const AboutUs = () => {
    const {isLoading} = useHomeLayoutContext()

    useEffect(() => {
        scrollToTop()
    }, []);

    if(isLoading){
        return <MyLoader/>
    }

    return (
        <div className={styles.programDescriptioRow}>
            <AboutUsHome/>
        </div>
    );
};

export default AboutUs;

