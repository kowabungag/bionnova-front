'use client';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';

// assets
import bgTop from '../../../public/media/img/bg-top.png';
import bgTopMobile from '../../../public/media/img/bg-top-mobile.png';
import goldenArrow from '../media/images/arrowGolden.svg';
import icon1 from '../media/images/icon/icon1.svg';
import icon2 from '../media/images/icon/icon2.svg';
import icon3 from '../media/images/icon/icon3.svg';
import icon4 from '../media/images/icon/icon4.svg';

import logo1 from '../media/img/logos/logo1.svg';
import logo2 from '../media/img/logos/logo2.svg';
import logo3 from '../media/img/logos/logo3.svg';
import logo4 from '../media/img/logos/logo4.svg';
import logo5 from '../media/img/logos/logo5.svg';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <main>
        <div className={` page main-page`}>
          <article className="presentation">
            <picture className="presentation__bg">
              <source media="(max-width: 600px)" srcSet={bgTopMobile} />
              <Image src={bgTop} alt="background lines" />
            </picture>
            <div className="container d-block-md">
              <div className="presentation-block">
                <h1 className="main-title">
                  {t('home.hero.title1')} <br />
                  {t('home.hero.title2')}
                </h1>
                <section className="presentation-block__description">
                  <p>{t('home.hero.text1')}</p>
                  <nav>
                    <Link className="btn btn-yellow" href={'/contacts'}>
                      {t('additional.enroll')}
                    </Link>
                    <div className="btn btn-transparent">
                      <Link href={'/activities'}> {t('additional.ourCalendar')}</Link>
                      <Link href={'/activities'}>
                        <Image src={goldenArrow} alt={'arrow'} />
                      </Link>
                    </div>
                  </nav>
                </section>
              </div>
              <section className="advantages">
                <div className="advantages__items">
                  <div className="advantages__item">
                    <Image src={icon1} alt="icon1" />
                    <h3>{t('home.plitc.text1')}</h3>
                    <p>{t('home.plitc.subtext1')}</p>
                  </div>
                  <div className="advantages__item">
                    <Image src={icon2} alt="icon1" />
                    <h3> {t('home.plitc.text2')}</h3>
                    <p>{t('home.plitc.subtext2')}</p>
                  </div>
                  <div className="advantages__item">
                    <Image src={icon3} alt="icon1" />
                    <h3>{t('home.plitc.text3')}</h3>
                    <p>{t('home.plitc.subtext3')}</p>
                  </div>
                </div>
                <div className="advantages__btn">
                  <Link className="btn btn-yellow" href={'/contacts'}>
                    {t('additional.enroll')}
                  </Link>
                </div>
              </section>
            </div>
          </article>

          <article className="experience">
            <div className="marquee-block">
              <div className="marquee-container">
                <div className="marquee">
                  Universal School of Pharmacovigilance & Medical affairs
                </div>
              </div>
            </div>

            <div className="container d-block-md">
              <section className="experience__wrapper">
                <h2 className="experience__title">{t('home.about.text1')}</h2>
                <div className="experience__description">
                  <p className="experience__text">{t('home.about.text2')}</p>
                  <div className="line__wrapper">
                    <div className="line"></div>
                  </div>

                  <div className="achievements-wrapper">
                    <div className="achievements__items">
                      <div className="achievements__items--value">{t('home.about.text3')}</div>
                      <p className="achievements__description">{t('home.about.text6')}</p>
                    </div>
                    <div className="achievements__items">
                      <div className="achievements__items--value">{t('home.about.text4')}</div>
                      <p className="achievements__description">{t('home.about.text7')}</p>
                    </div>
                    <div className="achievements__items">
                      <div className="achievements__items--value">{t('home.about.text5')}</div>
                      <p> {t('home.about.text8')}</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="experience__btn">
              <Link className="btn btn-yellow" href={'/contacts'}>
                {t('additional.enroll')}
              </Link>
            </div>

            <div className="container d-block-md">
              <section className="feedback__wrapper">
                <div className="feedback__wrapper--header">
                  <h2 className="experience__title">{t('feedback.title')}</h2>
                  <p className="experience__text">{t('feedback.subtitle')}</p>
                </div>
                <div className="feedback__wrapper--footer">
                  <div className="feedback__items">
                    <div className="feedback__card">
                      <div className="feedback__card--img">
                        <Image src={icon4} alt="icon" />
                      </div>
                      <div className="feedback__card--descr">
                        <p>{t('feedback.text1')}</p>
                        <div className="feedback__card--line"></div>
                        <div className="feedback__card--name">
                          <p>- {t('feedback.author1')}</p>
                        </div>
                      </div>
                    </div>

                    <div className="feedback__card">
                      <div className="feedback__card--img">
                        <Image src={icon4} alt="icon" />
                      </div>
                      <div className="feedback__card--descr">
                        <p>{t('feedback.text2')}</p>
                        <div className="feedback__card--line"></div>
                        <div className="feedback__card--name">
                          <p>- {t('feedback.author2')}</p>
                        </div>
                      </div>
                    </div>

                    <div className="feedback__card">
                      <div className="feedback__card--img">
                        <Image src={icon4} alt="icon" />
                      </div>
                      <div className="feedback__card--descr">
                        <p>{t('feedback.text3')}</p>
                        <div className="feedback__card--line"></div>
                        <div className="feedback__card--name">
                          <p>- {t('feedback.author3')}</p>
                        </div>
                      </div>
                    </div>

                    <div className="feedback__card">
                      <div className="feedback__card--img">
                        <Image src={icon4} alt="icon" />
                      </div>
                      <div className="feedback__card--descr">
                        <p>{t('feedback.text4')}</p>
                        <div className="feedback__card--line"></div>
                        <div className="feedback__card--name">
                          <p>- {t('feedback.author4')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </article>

          <article className="training">
            <div className="training__bg">
              <div className="training__bg--top">
                <div className="container d-block-md">
                  <div className="partners">
                    <h2 className="visually-hidden">Наши партнеры</h2>
                    <div className="partners__wrapper">
                      <Image className="inline-svg" src={logo1} alt="acrew logo" />
                      <Image className="inline-svg" src={logo2} alt="miro logo" />
                      <Image className="inline-svg" src={logo3} alt="loom logo" />
                      <Image className="inline-svg" src={logo4} alt="icon logo" />
                      <Image className="inline-svg" src={logo5} alt="airbnb logo" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="training__bg--bottom">
                <div className="container d-block-md">
                  <div className="training__items">
                    <div className="training__items--wrapper">
                      <h2 className="training__title">{t('home.coach.text1')}</h2>

                      <div className="training__subtitle">
                        <p>{t('home.coach.text2')}</p>
                      </div>
                      <Link className="btn btn-yellow" href={'/contacts'}>
                        {t('additional.enroll')}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
