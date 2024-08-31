'use client';
import { useEffect, useState, useRef } from 'react';
import * as styles from './article.module.scss';
import Image from 'next/image';

const ArticlePage = ({ params }) => {
  const { id } = params;

  const [isVisible, setIsVisible] = useState(false);
  const stickyBlock = useRef(null);

  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 770) {
      setIsVisible(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.4,
      }
    );

    if (screenWidth >= 770 && stickyBlock.current) {
      observer.observe(stickyBlock.current);
    }

    return () => {
      if (stickyBlock.current) {
        observer.unobserve(stickyBlock.current);
      }
    };
  }, []);

  return (
    <>
      <Image
        src="../../../../media/img/photo.png"
        alt=""
        width={1920}
        height={850}
        className={styles.img}
      />

      <article className={styles.article}>
        <section className={styles.mainTitleWrapper}>
          <h1 className={styles.mainTitle}>
            Как правильно принимать лекарства: Советы от экспертов
          </h1>
          <span className={styles.date}>4 мая, 2024</span>
        </section>

        <div className={styles.articleWrapper}>
          <section
            style={{
              transition: 'opacity 0.5s ease-in-out',
              opacity: isVisible ? '1' : '0',
            }}
            ref={stickyBlock}
          >
            <h2 className={styles.stickyTitle}>
              Как правильно принимать лекарства: Советы от экспертов
            </h2>
            <span className={styles.stickyDate}>4 мая, 2024</span>
          </section>

          <section>
            <p className={styles.text}>
              Правильное употребление лекарств – это не просто следование инструкциям на упаковке.
              Это ключевой аспект в обеспечении эффективного и безопасного лечения. Медицинские
              эксперты рекомендуют несколько важных шагов, которые помогут вам максимально
              использовать потенциал медикаментов и минимизировать риск нежелательных последствий.
            </p>
            <section>
              <h2 className={styles.secondaryTitle}>1. Следуйте инструкциям</h2>
              <p className={styles.text}>
                Правильное употребление лекарств – это не просто следование инструкциям на упаковке.
                Это ключевой аспект в обеспечении эффективного и безопасного лечения. Медицинские
                эксперты рекомендуют несколько важных шагов, которые помогут вам максимально
                использовать потенциал медикаментов и минимизировать риск нежелательных последствий.
              </p>
            </section>
            <section>
              <h2 className={styles.secondaryTitle}>2. Не прерывайте курс без разрешения врача</h2>
              <p className={styles.text}>
                Если лечение протекает длительное время, не прерывайте прием лекарств, даже если
                симптомы заболевания исчезли. Только врач может решить, когда можно безопасно
                прекратить прием медикаментов, чтобы избежать рецидива или осложнений.
              </p>
            </section>
            <section>
              <h2 className={styles.secondaryTitle}>3. Соблюдайте время приема</h2>
              <p className={styles.text}>
                Некоторые лекарства должны приниматься строго по расписанию, чтобы достичь
                наилучшего эффекта. Например, антибиотики часто требуют регулярного приема в
                одинаковые интервалы времени. Установите напоминания или используйте специальные
                упаковки для лекарств, чтобы не забывать про приемы.
              </p>
            </section>
            <section>
              <h2 className={styles.secondaryTitle}>4. Учитывайте пищу и другие лекарства</h2>
              <p className={styles.text}>
                Некоторые лекарства взаимодействуют с пищей или другими препаратами, что может
                повлиять на их эффективность или вызвать побочные эффекты. Поэтому важно уточнять у
                врача или фармацевта, как лучше принимать лекарства в вашем конкретном случае.
              </p>
            </section>
            <section>
              <h2 className={styles.secondaryTitle}>5. Не изменяйте дозировку самостоятельно</h2>
              <p className={styles.text}>
                Если вам кажется, что прописанная дозировка слишком высока или низка, обязательно
                сначала проконсультируйтесь с врачом. Самостоятельное изменение дозировки может быть
                опасным и привести к нежелательным последствиям для вашего здоровья.
              </p>
            </section>
            <p className={styles.text}>
              Правильное употребление лекарств – это не только ваше здоровье, но и ваше
              благополучие. Следуя простым рекомендациям экспертов, вы сможете достичь наилучших
              результатов от лечения и уменьшить риск осложнений. Не стесняйтесь обсудить любые
              вопросы или сомнения с вашим лечащим врачом – это поможет вам быть уверенными в своем
              лечении.
            </p>
          </section>
        </div>
      </article>
    </>
  );
};

export default ArticlePage;
