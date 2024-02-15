'use client';

import { useTranslation } from 'react-i18next';

const Preparation = () => {
  const { t } = useTranslation();
  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h1 style={{ color: 'var(--color-yellow)' }}>{t('home.preparation')}</h1>
    </div>
  );
};

export default Preparation;
