import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

// components
import Container from '../../Container/Container';
import ProgramElement from '../ProgramElement/ProgramElement';

// styles
import * as styles from '../programs.module.scss';
import IndividualForm from '@/components/UI/IndividualForm/IndividualForm';

export const ProgramsList = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <div className={styles.root}>
          <div className="back_group">
            <Link href={'/services'} className="back">
              {t('services.services')}
            </Link>
          </div>
          <p className={styles.title}>{t('services.training')}</p>
          <div className={styles.row}>
            <ProgramElement />
          </div>
        </div>
      </Container>
      <div className={styles.individualForm}>
        <IndividualForm isWhite={true} type="individual" />
      </div>
    </>
  );
};
