"use client"
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {useTranslation} from "react-i18next";

// components
import Container from "../Container/Container";


// assets
import program from "../../app/media/images/services/program.svg";
import webinar from "../../app/media/images/services/webinar.svg"
import pharma from "../../app/media/images/services/pharma.svg"
import registration from "../../app/media/images/services/registration.svg"
import gmp from "../../app/media/images/services/gmp.svg"
import clinical from "../../app/media/images/services/clinical.svg"
import arrowUpRight from "../../app/media/images/arrowUpRight.svg"



// styles
import * as styles from "./services.module.scss";


const ServicesComponent = () => {
    const {t} = useTranslation()

    const firstContent = [
        {id: 0, text: t('servicesTopics.topic1.text1')},
        {id: 1, text: t('servicesTopics.topic1.text2')},
        {id: 2, text: t('servicesTopics.topic1.text3')},
        {id: 3, text: t('servicesTopics.topic1.text4')},
        {id: 4, text: t('servicesTopics.topic1.text5')},
        {id: 5, text: t('servicesTopics.topic1.text6')},
    ];

    const secondContent = [
        {id: 0, text: t('servicesTopics.topic2.text1')},
        {id: 1, text: t('servicesTopics.topic2.text2')},
        {id: 2, text: t('servicesTopics.topic2.text3')},
        {id: 3, text: t('servicesTopics.topic2.text4')},
        {id: 4, text: t('servicesTopics.topic2.text5')},
        {id: 5, text: t('servicesTopics.topic2.text6')},
    ];

    const thirdContent = [
        {id: 0, text: t('servicesTopics.topic3.text1')},
        {id: 1, text: t('servicesTopics.topic3.text2')},
        {id: 2, text: t('servicesTopics.topic3.text3')},
        {id: 3, text: t('servicesTopics.topic3.text4')},
        {id: 4, text: t('servicesTopics.topic3.text5')},
        {id: 5, text: t('servicesTopics.topic3.text6')},
    ];

    const fourthContent = [
        {id: 0, text:t('servicesTopics.topic4.text1')},
        {id: 1, text:t('servicesTopics.topic4.text2')},
        {id: 2, text:t('servicesTopics.topic4.text3')},
        {id: 3, text:t('servicesTopics.topic4.text4')},
        {id: 4, text:t('servicesTopics.topic4.text5')},
        {id: 5, text:t('servicesTopics.topic4.text6')},
    ];

    return (
        <div id="my-anchor" className={styles.root}>
            <Container>
                <div className={styles.row}>
                    <p className={styles.title}>{t('services.services')}</p>
                    <div className={styles.courseRow}>
                        <Link href='/services/programs#Pharmacovigilance'>
                            <div className={styles.courseColumn}>
                                <Image className={styles.logo} src={pharma} alt="pharma"/>
                                <p className={styles.description}>{t('servicesTopics.farma')}</p>
                                <Image className={styles.arrow} src={arrowUpRight} alt="arrowUpRight"/>
                            </div>
                        </Link>
                        <Link href='/services/programs#Registration'>
                            <div className={styles.courseColumn}>
                                <Image className={styles.logo} src={registration} alt="registration"/>
                                <p className={styles.description}>{t('servicesTopics.registration')}</p>
                                <Image className={styles.arrow} src={arrowUpRight} alt="arrowUpRight"/>
                            </div>
                        </Link>
                        <Link href='/services/programs#GMP-certification'>
                            <div className={styles.courseColumn}>
                                <Image className={styles.logo} src={gmp} alt="gmp"/>
                                <p className={styles.description}>{t('servicesTopics.gmp')}</p>
                                <Image className={styles.arrow} src={arrowUpRight} alt="arrowUpRight"/>
                            </div>
                        </Link>
                        <Link href='/services/programs#ClinicalTrials'>
                            <div className={styles.courseColumn}>
                                <Image className={styles.logo} src={clinical} alt="clinical"/>
                                <p className={styles.description}>{t('servicesTopics.research')}</p>
                                <Image className={styles.arrow} src={arrowUpRight} alt="arrowUpRight"/>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className={styles.addition}>
                       <p className={styles.additionTitle}>{t('servicesTopics.title')}</p>
                    <div className={styles.contentBlock}>
                        <Link href='/contacts'>
                        <p className={styles.contentTitle}>{t('servicesTopics.topic1.title')}</p>
                        </Link>
                        <ul className={styles.contentElements}>
                            {firstContent.map(el =>
                                <li key={el.id} className={styles.contentElement}>
                                  <p className={styles.contentText}>
                                      {el.text}
                                  </p>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className={`${styles.contentBlock} ${styles.contentBlockDark}`}>
                        <Link href='/contacts'>
                            <p className={styles.contentTitle}>{t('servicesTopics.topic2.title')}</p>
                        </Link>
                        <ul className={styles.contentElements}>
                            {secondContent.map(el =>
                                <li key={el.id} className={styles.contentElement}>
                                    <p className={styles.contentText}>
                                        {el.text}
                                    </p>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className={`${styles.contentBlock}`}>
                        <a href="#my-anchor">
                            <p className={styles.contentTitle}>{t('servicesTopics.topic3.title')}</p>
                        </a>
                        <ul className={styles.contentElements}>
                            {thirdContent.map(el =>
                                <li key={el.id} className={styles.contentElement}>
                                    <p className={styles.contentText}>
                                        {el.text}
                                    </p>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className={`${styles.contentBlock} ${styles.contentBlockDark}`}>
                        <Link href='/contacts'>
                            <p className={styles.contentTitle}>{t('servicesTopics.topic4.title')}</p>
                        </Link>
                        <ul className={styles.contentElements}>
                            {fourthContent.map(el =>
                                <li key={el.id} className={styles.contentElement}>
                                    <p className={styles.contentText}>
                                        {el.text}
                                    </p>
                                </li>
                            )}
                        </ul>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default ServicesComponent;