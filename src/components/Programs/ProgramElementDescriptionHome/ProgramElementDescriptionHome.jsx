import React from 'react';
import {useDispatch} from "react-redux";
import {addBasketElement} from "@/features/basket/basketSlice";

// components
import MyButton from "../../UI/MyButton/MyButton";
import WebinarListHome from "../../Webinars/WebinarListHome/WebinarListHome";

// helpers
import {BASKET_TYPES} from "@/helpers/basketData";

// styles
import * as styles from "./programElement.module.scss"
import {useTranslation} from "react-i18next";
import MyLoader from "@/components/UI/MyLoader/MyLoader";
import {convertDateFormat} from "@/helpers/convertTime";
import {getAllEventsWithSort} from "@/helpers/getNearestEventsByKey";
import {checkLanguage} from "@/helpers/checkLanguage";
import Link from "next/link";


const ProgramElementDescriptionHome = ({program}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addBasketElement({
            data: program,
            type: BASKET_TYPES.PROGRAM,
            t
        }))
    }

    if(!program){
        return (
            <MyLoader/>
        )
    }

    const sortedEventsByDate = getAllEventsWithSort(program.webbinarrs.data, 'date')
    const isLanguageEnglish = checkLanguage('en')

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <Link scroll={false} href={'/home/programs/#programs'}>
                    <p className={styles.back}>{t('cabinet.backToProgram')}</p>
                </Link>
                <div className={styles.row}>
                    <div className={styles.webinarsList}>
                        {/*{program?.webbinarrs && <WebinarListHome webinars={sortedEventsByDate}/>}*/}
                        {program?.webbinarrs && <WebinarListHome withAttributes={isLanguageEnglish} programId={program.id} isWebinarHome={false} webinars={sortedEventsByDate}/>}
                    </div>
                    <div className={styles.program}>
                        <div className={styles.programTop}>
                            <p className={styles.section}>{t('additional.program')}</p>
                            <p className={styles.name}>{program.name}</p>
                            <p className={styles.date}><span>{t('additional.beginning')}:</span> {convertDateFormat(program.start)}</p>
                            <p className={styles.webinarCount}><span>{t('additional.webinars')}:</span> {program.webinarsCount}</p>
                        </div>
                        {program.isAcquired ?
                            <></>
                            :
                            <div className={`${styles.programBottom} ${styles.hideOnMobile}`}>
                                <p className={styles.price}>{program.price} $</p>
                                <MyButton onClick={handleClick} transparent>{t('cabinet.buyProgram')}</MyButton>
                            </div>
                        }

                    </div>
                    {program.isAcquired ?
                        <></>
                        :
                        <div className={`${styles.programBottom} ${styles.showOnMobile}`}>
                            <p className={styles.price}>{program.price} $</p>
                            <MyButton onClick={handleClick} transparent>{t('cabinet.buyProgram')}</MyButton>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProgramElementDescriptionHome;