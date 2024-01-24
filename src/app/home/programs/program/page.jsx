'use client'
import React, {useEffect} from "react";
import ProgramElementDescriptionHome from "@/components/Programs/ProgramElementDescriptionHome/ProgramElementDescriptionHome";
import * as styles from "../../home.module.scss"
import useHomeLayoutContext from "@/hooks/useHomeLayoutContext";
import {scrollToTop} from "@/helpers/scrollToTop";

const Program = () => {
    useEffect(() => {
        scrollToTop()
    }, []);

    const  {programElement} =  useHomeLayoutContext()
    return (
        <div className={styles.programDescriptioRow}>
            <ProgramElementDescriptionHome program={programElement}/>
        </div>

    );
};

export default Program;