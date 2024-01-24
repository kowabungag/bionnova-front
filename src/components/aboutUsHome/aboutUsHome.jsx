'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// styles

import * as styles from './aboutUsHome.module.scss';

// assets
import comma from '../../app//media/images/comma.svg';
import { useTranslation } from 'react-i18next';
import useHomeLayoutContext from '@/hooks/useHomeLayoutContext';
import { strapiApi } from '@/api';
import { useSelector } from 'react-redux';
import MyCalendar from '@/components/MyCalendar/MyCalendar';

const AboutUsHome = () => {
  const { t } = useTranslation();
  const { feedbackByLanguage, isLoading, error } = useSelector((state) => state.feedback);

  // console.log('FF',feedbackByLanguage)
  if (isLoading) {
    return <MyCalendar />;
  }

  return (
    <section className={styles.root}>
      <div className={styles.row}>
        <div className={`${styles.column} ${styles.fixed}`}>
          <div className={styles.content}>
            <p className={styles.title}>{t('cabinet.studentsSaying')}</p>
            <p className={styles.text}>{t('cabinet.participantsExperiences')}</p>
            <p className={styles.subtext}>{t('cabinet.testimonials')}</p>
          </div>
        </div>
        <div className={`${styles.column} ${styles.scrollable}`}>
          {feedbackByLanguage.map((el) => (
            <div className={styles.content} key={el.id}>
              <Image src={comma} alt={'img'} />
              <p className={styles.comment}>{el.text}</p>
              <p className={styles.author}>{el.userName}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsHome;
