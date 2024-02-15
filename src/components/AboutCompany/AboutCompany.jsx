'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

//styles
import './aboutCompany.scss';

//asset
import aboutBgMiddle from '../../../public/media/images/about/keyboar.png';
import aboutBgMiddleMobile from '../../../public/media/images/about/about-bg-middle-mobile.png';
import aboutBgMiddleLines from '../../../public/media/images/about/about-bg-middle-lines.png';
import aboutBgMiddleLinesMobile from '../../../public/media/images/about/about-bg-middle-lines-mobile.png';
import checkIcon from '../../../public/media/images/check.svg';
import icon10 from '../../../public/media/images/icon/icon10.svg';
import icon11 from '../../../public/media/images/icon/icon11.svg';
import { useTranslation } from 'react-i18next';

const AboutCompany = () => {
  const { t } = useTranslation();
  return (
    <>
      <main>
        <article className="our-goal">
          <div className="container d-block-md">
            <div className="our-goal-block">
              <h1 className="main-title">{t('aboutCompany.hero.text1')}</h1>

              <section className="our-goal-block__description">
                <p>{t('aboutCompany.hero.text2')}</p>

                <p>{t('aboutCompany.hero.text3')}</p>
              </section>
            </div>
          </div>
        </article>
        <article className="description-block">
          <section className="description-block__marquee">
            <div className="marquee-container">
              <div className="marquee-about">
                Universal School of Pharmacovigilance & Medical affairs
              </div>
            </div>
          </section>
          <div className="container d-block-md">
            <section className="description-block__wrapper">
              <div className="description-block__description">
                <h2 className="description-block__title"> {t('aboutCompany.partner.text1')}</h2>
                <p className="description-block__text">{t('aboutCompany.partner.text2')}</p>
              </div>
              <picture>
                <source media="(max-width: 600px)" srcSet={aboutBgMiddleMobile} />
                <Image src={aboutBgMiddle} alt="human hands typing on a keyboard" />
              </picture>
            </section>
          </div>
        </article>
        <article className="main-areas">
          <picture className="main-areas__bg">
            <source media="(max-width: 600px)" srcSet={aboutBgMiddleLinesMobile} />
            <Image src={aboutBgMiddleLines} alt="background lines" />
          </picture>
          <div className="container d-block-md">
            <div className="main-areas__items">
              <h2 className="main-areas__title">{t('aboutCompany.base.text1')}</h2>

              <ul className="main-areas__list">
                <Link href="/services/programs#Registration">
                  <li className="main-areas__list--item">{t('aboutCompany.base.text2')}</li>
                </Link>
                <Link href="/services/programs#ClinicalTrials">
                  <li className="main-areas__list--item">{t('aboutCompany.base.text3')}</li>
                </Link>
                <Link href="/services/programs#Pharmacovigilance">
                  <li className="main-areas__list--item">{t('aboutCompany.base.text4')}</li>
                </Link>
                <Link href="/services/programs#GMP-certification">
                  <li className="main-areas__list--item">{t('aboutCompany.base.text5')}</li>
                </Link>
              </ul>
            </div>
            <section className="main-areas__mission">
              {/*<i className="icon-temples"></i>*/}
              <Image src={icon11} alt="icon" />
              <div className="main-areas__mission--items">
                <h2 className="main-areas__title"> {t('aboutCompany.choose.text1')}</h2>
                <p>{t('aboutCompany.choose.text2')}</p>
                <p>{t('aboutCompany.choose.text3')}</p>
              </div>
            </section>
          </div>
        </article>
        <article className="medical-affairs">
          <div className="container d-block-md">
            <div className="medical-affairs__items">
              <h2 className="medical-affairs__title">{t('aboutCompany.advantages.text1')}</h2>

              <ul className="medical-affairs__list">
                <li>
                  <Image src={checkIcon} alt="checkIcon" />
                  {t('aboutCompany.advantages.text2')}
                </li>
                <li>
                  <Image src={checkIcon} alt="checkIcon" />
                  {t('aboutCompany.advantages.text3')}
                </li>
                <li>
                  <Image src={checkIcon} alt="checkIcon" />
                  {t('aboutCompany.advantages.text4')}
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article className="services">
          <div className="container d-block-md">
            <div className="services__wrapper">
              <h2 className="services__title">{t('aboutCompany.services.text1')}</h2>

              <section className="services__items">
                <Link href="/services">
                  <div className="services__item">
                    <h3 className="services__item--title">{t('aboutCompany.services.text2')}</h3>
                    <p>{t('aboutCompany.services.text3')}</p>
                  </div>
                </Link>

                <Link href="/services">
                  <div className="services__item">
                    <h3 className="services__item--title">{t('aboutCompany.services.text6')}</h3>
                    <p>{t('aboutCompany.services.text7')}</p>
                  </div>
                </Link>

                <Link href="/services">
                  <div className="services__item">
                    <h3 className="services__item--title">{t('aboutCompany.services.text4')}</h3>
                    <p>{t('aboutCompany.services.text5')}</p>
                  </div>
                </Link>
                <Link href="/services">
                  <div className="services__item">
                    <h3 className="services__item--title">{t('aboutCompany.services.text8')}</h3>
                    <p>{t('aboutCompany.services.text9')}</p>
                  </div>
                </Link>
              </section>
            </div>
          </div>
        </article>
        <article className="description">
          <div className="container d-block-md">
            <div className="description__wrapper">
              <h2 className="visually-hidden">Description of our advantages</h2>

              <div className="description__container">
                <div className="description__items">
                  <div className="description__item">
                    <Image src={icon10} alt="icon" />
                    <p>{t('aboutCompany.topics.text1')}</p>
                  </div>
                  <div className="description__item">
                    <Image src={icon10} alt="icon" />
                    <p>{t('aboutCompany.topics.text2')}</p>
                  </div>
                  <div className="description__item">
                    <Image src={icon10} alt="icon" />
                    <p>{t('aboutCompany.topics.text3')}</p>
                  </div>
                </div>
              </div>

              <Link className="btn btn-yellow" href={'/contacts'}>
                {t('additional.enroll')}
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default AboutCompany;
