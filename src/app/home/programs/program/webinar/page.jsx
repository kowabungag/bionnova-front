'use client'
import React, {useEffect, useState} from "react";
import WebinarOverviewHome from "@/components/Webinars/WebinarOverviewHome/WebinarOverviewHome";
import useHomeLayoutContext from "@/hooks/useHomeLayoutContext";
import MyLoader from "@/components/UI/MyLoader/MyLoader";
import {scrollToTop} from "@/helpers/scrollToTop";
import { useSearchParams  } from 'next/navigation';
import {createProgramElement} from "@/helpers/createProgramElement";
const Webinar = () => {
    const [hash, setHash] = useState('');

    const { programElement, userAvailableWebinars, previousRoute,programSearch} = useHomeLayoutContext()

if (!programElement) {
    return (
        <MyLoader/>
    )
}






    return (
        <>
                <WebinarOverviewHome
                    programSearch={programSearch}
                    webinar={programElement}
                    userAvailableWebinars={userAvailableWebinars}
                    hashString={hash}
                    previousRoute={previousRoute}/>
        </>
    );
};

export default Webinar;