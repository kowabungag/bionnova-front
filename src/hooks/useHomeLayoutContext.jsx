'use client'
import React, {useEffect, useState} from 'react';
import MyLoader from "@/components/UI/MyLoader/MyLoader";
import {usePreviousRoute} from "@/hooks/usePreviousRoute";
import {useSelector,shallowEqual } from "react-redux";
import {getNearestEventsByKey, sortProgramWebinars} from "@/helpers/getNearestEventsByKey";
import {checkLanguage} from "@/helpers/checkLanguage";
import {createProgramElement} from "@/helpers/createProgramElement";
import {useSearchParams} from "next/navigation";

const useHomeLayoutContext = () => {
    const searchParams  = useSearchParams();
    const [hash, setHash] = useState(null)


    const [programSearch, setProgramSearch] = useState('')
    const [webinarSearch, setWebinarSearch] = useState('')

    const previousRoute = usePreviousRoute();

    const user = useSelector(store => store.user,shallowEqual);
    const globalCourses = useSelector(store => store.courses,shallowEqual);


    useEffect(() => {
        const currenHash = location.hash.substring(1)
        setHash(currenHash)


        setWebinarSearch(+searchParams.get('webinar'))
        setProgramSearch(+searchParams.get('program'))

    }, [])


    const isLoading = user.isLoading || globalCourses.isLoading;

    //

    if (isLoading) {
        return <MyLoader/>
    }

    const globalProgramsByLanguage = globalCourses.globalCoursesByLanguage?.programs;
    const globalWebinarsByLanguage = globalCourses.globalCoursesByLanguage?.webinars;




    const userWebinarsByLanguage = user.user.userCoursesByLanguage.webinars;
    const userProgramsByLanguage = user.user.userCoursesByLanguage.programs;
    //
    let programElement


    if (hash === 'programs') {
        programElement = createProgramElement(
            globalProgramsByLanguage,
            userProgramsByLanguage,
            programSearch
        )
    }
    if (hash === 'webinars' || hash === 'webinarsInProgram') {
        programElement = createProgramElement(
            globalWebinarsByLanguage,
            userWebinarsByLanguage,
            webinarSearch
        )
    }



    const isLanguageEnglish = checkLanguage('en')

    const closestPrograms = getNearestEventsByKey(globalProgramsByLanguage, "start",2)
    const closestWebinars = getNearestEventsByKey(globalWebinarsByLanguage, "date", 3);
    const userAvailableWebinars = sortProgramWebinars(userProgramsByLanguage, userWebinarsByLanguage, 'date', isLanguageEnglish)

    return {
        isLoading,
        programSearch,
        webinarSearch,
        previousRoute,
        hash,
        isLanguageEnglish,
        programElement,
        closestWebinars,
        userAvailableWebinars,
        globalProgramsByLanguage,
        globalWebinarsByLanguage,
        userProgramsByLanguage,
        closestPrograms
    }
};

export default useHomeLayoutContext;