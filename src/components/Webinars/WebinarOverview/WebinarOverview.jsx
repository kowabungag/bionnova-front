import React, { useEffect, useState } from 'react';

// components
import Container from '../../Container/Container';

// styles
import * as styles from './webinarOverview.module.scss';

import MyButton from '../../UI/MyButton/MyButton';
import Markdown from 'react-markdown';

import IndividualForm from '../../UI/IndividualForm/IndividualForm';
import WebinarDescription from '../WebinarDescription/WebinarDescription';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { findObjectById } from '@/helpers/findObjectById';
import MyLoader from '@/components/UI/MyLoader/MyLoader';
import { convertDateFormat } from '@/helpers/convertTime';
import { addBasketElement } from '@/features/basket/basketSlice';
import { useDispatch } from 'react-redux';

export const WebinarOverview = ({ webinars }) => {
  const { t } = useTranslation();

  const [webinar, setWebinar] = useState();
  const [programId, setProgramId] = useState('');
  const [programType, setProgramType] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const search = +window.location.pathname.split('/')[3];

    const currentHash = window.location.hash;
    const hashList = currentHash.split('&');

    const programId = hashList[0]?.substring(1)?.split('=')[1];
    const programType = hashList[1]?.substring(1)?.split('=')[1];

    setWebinar(findObjectById(webinars, search));
    setProgramId(programId);
    setProgramType(programType);
  }, [webinars]);

  if (!webinar) {
    return <MyLoader />;
  }

  const isTopicPharma = webinars.topic === 'Pharmacovigilance';

  const handleClick = () => {
    const payload = {
      data: webinar,
      type: 'webinars',
      t,
    };
    dispatch(addBasketElement(payload));
  };

  return (
    <div>
      <Container sizeZero>
        <div className={styles.rootOverview}>
          <div className={`${styles.back} back_group`}>
            <Link href={'/services'} className="back back_white">
              {t('services.services')}
            </Link>
            {programId ? (
              <>
                <Link href={`/services/programs#${programType}`} className="back back_white">
                  {t('services.training')}
                </Link>
                <Link href={`/services/programs/${programId}#${programType}`} className="back ">
                  {t('services.program')}
                </Link>
              </>
            ) : (
              <Link href={'/services/webinars-and-lectures'} className="back">
                {t('services.webinars')}
              </Link>
            )}
          </div>
          <div className={styles.overviewRow}>
            <Image
              width={700}
              height={700}
              className={styles.image}
              src={webinar.imageLink ? webinar.imageLink : 'webinarImg'}
              alt="webinarImg"
            />
            <div className={styles.description}>
              <p className={styles.title}>
                {t('additional.webinar')} №{webinar.webinarNumber}
              </p>
              <p className={`${styles.name} text60`}>{webinar.name}</p>
              <p className={styles.date}>
                <span>{t('additional.data')}:</span> {convertDateFormat(webinar.date)}
              </p>
              <p className={styles.teacher}>
                <span>{t('additional.coach')}:</span> {webinar.teacher}
              </p>
              <p className={styles.program}>
                <span>{t('additional.program')}:</span> {webinar.topic}
              </p>
              <p className={styles.format}>
                <span>{t('additional.format')}:</span> {webinar.format}
              </p>
              <p className={styles.exactTime}>
                <span>{t('additional.exactTime')}:</span> {webinar.exactTime}
              </p>
              {!isTopicPharma && (
                <p className={styles.level}>
                  <span>{t('additional.webinars')} </span> {webinar.levelOfDifficulty}
                </p>
              )}
              <p className={styles.price}>${webinar.price}</p>
            </div>
            <div className={styles.btnBlock}>
              <MyButton onClick={handleClick} golden>
                {t('additional.addToBasket')}
              </MyButton>
              {/* <WebinarDescription
                programTitle={webinar.descriptionSubtitle}
                webinarDescription={webinar.descriptionWebinar}
              /> */}
            </div>
            <div className={styles.participants}>
              <p className={styles.l1}>{t('additional.oneParticipant')}</p>
              <p className={styles.r1}>-</p>
              <p className={styles.l2}>{t('additional.fewParticipant')}</p>
              <p className={styles.r2}>{t('additional.fiveDiscount')}</p>
              <p className={styles.l3}>{t('additional.manyParticipant')}</p>
              <p className={styles.r3}>{t('additional.tenDiscount')}</p>
            </div>
          </div>
        </div>
      </Container>
      <div className={styles.descriptionBlock}>
        <div className={styles.descriptionContainer}>
          <div className={styles.row}>
            <p className={`${styles.title} text60`}>{t('services.description')}</p>
            <div className={styles.content}>
              <Markdown className={styles.contentTitle}>{webinar.descriptionTitle}</Markdown>
              <WebinarDescription
                programTitle={webinar.descriptionSubtitle}
                webinarDescription={webinar.descriptionWebinar}
              />
            </div>
          </div>
          {/* <div className={`${styles.row} ${styles.rowProgram}`}>
            <p className={`${styles.title} text60`}>{t('services.program')}</p>
            <div className={styles.content}>
              <WebinarDescription type="program" programDescription={webinar.descriptionProgram} />
            </div>
          </div> */}
        </div>
      </div>

      <div>
        <IndividualForm isWhite type="individual" />
      </div>
    </div>
  );
};
