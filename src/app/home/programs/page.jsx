'use client'
import React, {useEffect} from "react";
import useHomeLayoutContext from "@/hooks/useHomeLayoutContext";
import ProgramsListHome from "@/components/Programs/ProgramsListHome/ProgramsListHome";
import MyLoader from "@/components/UI/MyLoader/MyLoader";
import {scrollToTop} from "@/helpers/scrollToTop";

const Programs = () => {

    useEffect(() => {
        scrollToTop()
    }, []);
    const {userProgramsByLanguage, isLoading,closestPrograms} = useHomeLayoutContext()

    if(isLoading){
        return <MyLoader/>
    }
    return (
        <div>
            <ProgramsListHome
                closestPrograms={closestPrograms}
                userPrograms={userProgramsByLanguage}
            />

        </div>
    );
};

export default Programs;