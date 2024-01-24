import React from 'react';
import {useTranslation} from "react-i18next";

import ProgramElementHome from "../ProgramElementHome/ProgramElementHome";
import {getNearestEventsByKey} from "@/helpers/getNearestEventsByKey";

import * as styles from "./programsListHome.module.scss"


const ProgramsListHome = ({userPrograms, closestPrograms}) => {
    const {t} = useTranslation()




    return (
        <div className={styles.root}>
            <p className={`${styles.title} ${styles.titleAvailable}`}>{t('cabinet.availableToMe')}</p>
            <div className={styles.row}>
                <ProgramElementHome programs={userPrograms}/>
            </div>
            <p className={`${styles.title} ${styles.titleSoon}`}>{t('cabinet.nearest')}</p>
            <div className={styles.row}>
                <ProgramElementHome programs={closestPrograms}/>
            </div>
        </div>
    );
};

export default ProgramsListHome;

