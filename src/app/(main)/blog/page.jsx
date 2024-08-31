'use client';

import * as styles from './blog.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import Container from '../../../components/Container/Container';

import { useTranslation } from 'react-i18next';

const BlogPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container sizeZero>
        <h2 className={styles.title}>{t('blog.recentArticles')}</h2>
        <div className={styles.cardsWrapper}>
          <div className={styles.card}>
            <Image
              className={styles.cardImage}
              src="../../../media/img/card-photo.png"
              alt=""
              width={500}
              height={412}
            />
            <span className={styles.cardTime}>7 июня, 2024</span>
            <Link href="#">
              <h3 className={styles.cardTitle}>
                Безопасность лекарств: Как выбрать надежного производителя?
              </h3>
              <p className={styles.cardText}>
                При выборе медикаментов безопасность и надежность должны быть на первом месте. В
                этой статье мы расскажем, на что обращать внимание при выборе производителя
                лекарств, как проверять качество продукции и что означает сертификация GMP.
              </p>
            </Link>
            <div className={styles.cardTags}>
              <Link href="#" className={styles.cardTag}>
                Препараты
              </Link>
              <Link href="#" className={styles.cardTag}>
                Безопасность
              </Link>
              <Link href="#" className={styles.cardTag}>
                Советы
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default BlogPage;
