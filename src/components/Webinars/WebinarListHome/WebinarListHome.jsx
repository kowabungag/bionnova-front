import React from 'react';
import { useTranslation } from 'react-i18next';

import * as styles from '../webinars.module.scss';
import { convertDateFormat } from '@/helpers/convertTime';

import Link from 'next/link';

const WebinarListHome = ({ webinars, isWebinarHome, programId, isAvailable, withAttributes }) => {
  const { t } = useTranslation();

  // if (!webinars.length) {
  //     return (
  //         <MyLoader/>
  //     )
  // }

  return (
    <>
      {withAttributes ? (
        <>
          {webinars?.map((webinar) => (
            <div key={webinar.id} className={styles.column}>
              <div>
                <p className={styles.section}>
                  {t('additional.webinar')} № {webinar.webinarNumber}
                </p>
                <p className={styles.name}>{webinar.attributes.name}</p>
                <p className={styles.date}> {convertDateFormat(webinar.attributes.date)}</p>
                <p className={styles.teacher}>{webinar.attributes.teacher}</p>
                <p className={styles.time}>
                  {webinar.attributes.duration}
                  <span> {t('additional.minutes')}</span>
                </p>
                {webinars?.attributes?.topic !== 'Pharmacovigilance' && (
                  <p className={styles.level}>{webinar.attributes.levelOfDifficulty}</p>
                )}
              </div>
              <div>
                <Link
                  scroll={false}
                  href={
                    isWebinarHome
                      ? `/home/webinars/webinar/?webinar=${webinar.id}#webinars`
                      : `/home/programs/program/webinar/?webinar=${webinar.id}&program=${programId}#webinarsInProgram`
                  }
                >
                  {t('additional.open')}
                </Link>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          {webinars?.map((webinar) => (
            <div key={webinar.id} className={styles.column}>
              <div>
                <p className={styles.section}>
                  {t('additional.webinar')} № {webinar.webinarNumber}
                </p>
                <p className={styles.name}>{webinar.name}</p>
                <p className={styles.date}> {convertDateFormat(webinar.date)}</p>
                <p className={styles.teacher}>{webinar.teacher}</p>
                <p className={styles.time}>
                  {webinar.duration}
                  <span> {t('additional.minutes')}</span>
                </p>
                {webinars?.topic !== 'Pharmacovigilance' && (
                  <p className={styles.level}> {webinar.levelOfDifficulty}</p>
                )}
              </div>
              <div>
                <Link
                  scroll={false}
                  href={
                    isWebinarHome
                      ? `/home/webinars/webinar/?webinar=${webinar.id}#webinars`
                      : `/home/programs/program/webinar/?webinar=${webinar.id}&program=${programId}#webinarsInProgram`
                  }
                >
                  {t('additional.open')}
                </Link>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default WebinarListHome;
