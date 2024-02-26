import * as styles from '../webinars.module.scss';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { convertDateFormat } from '@/helpers/convertTime';
import { getAllEventsWithSort } from '@/helpers/getNearestEventsByKey';

export const WebinarsList = ({ webinars, programId, hash, isWebinarHome }) => {
  const { t } = useTranslation();
  const isAttributesExist = webinars[0]?.attributes;
  const sortedWebinarsByDate = getAllEventsWithSort(webinars, 'date');

  return (
    <>
      {sortedWebinarsByDate.map((webinar) => (
        <div key={webinar.id} className={styles.column}>
          {isAttributesExist ? (
            <>
              <div>
                <p className={styles.section}>
                  {t('additional.webinar')} №{webinar.attributes.webinarNumber}
                </p>
                <p className={styles.name}>{webinar.attributes.name}</p>
                <p className={styles.date}> {convertDateFormat(webinar.attributes.date)}</p>
                <p className={styles.teacher}>{webinar.attributes.teacher}</p>
                <p className={styles.time}>
                  {webinar.attributes.duration} <span>{t('additional.minutes')}</span>
                </p>
                {webinars?.attributes?.topic !== 'Pharmacovigilance' && (
                  <p className={styles.level}> {webinar.attributes.levelOfDifficulty}</p>
                )}
              </div>
              <div>
                <Link
                  href={
                    programId
                      ? `/services/webinars-and-lectures/${webinar.id}#program=${programId}&#programType=${hash}`
                      : `/services/webinars-and-lectures/${webinar.id}`
                  }
                >
                  {t('additional.open')}
                </Link>
              </div>
            </>
          ) : (
            <>
              <div>
                <p className={styles.section}>
                  {t('additional.webinar')} №{webinar.webinarNumber}
                </p>
                <p className={styles.name}>{webinar.name}</p>
                <p className={styles.date}> {convertDateFormat(webinar.date)}</p>
                <p className={styles.teacher}>{webinar.teacher}</p>
                <p className={styles.time}>
                  {webinar.duration} <span>{t('additional.minutes')}</span>
                </p>
                {webinars?.topic !== 'Pharmacovigilance' && (
                  <p className={styles.level}> {webinar.levelOfDifficulty}</p>
                )}
              </div>
              <div>
                <Link
                  href={
                    programId
                      ? `/services/webinars-and-lectures/${webinar.id}#program=${programId}&#programType=${hash}`
                      : `/services/webinars-and-lectures/${webinar.id}`
                  }
                >
                  {t('additional.open')}
                </Link>
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
};
