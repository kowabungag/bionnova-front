'use client';
import Home from '@/components/Home/Home';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Container from '@/components/Container/Container';
import * as React from 'react';
import union from '../../../public/media/images/home/union.svg';
import laptop from '../../../public/media/images/home/laptop.svg';
import schedule from '../../../public/media/images/home/schedule.svg';
import about from '../../../public/media/images/home/about.svg';
import { useTranslation } from 'react-i18next';
import * as styles from '@/components/Home/home.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Protector, removeUserData, userData } from '@/helpers/userData';
import { useEffect, useState } from 'react';
import { fetchUserCourses } from '@/features/userSlice/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const AboutUsAddition = () => {
  const { t } = useTranslation();
  return (
    <div className="experienceHome">
      <section className="experience__wrapper experience__wrapper_home">
        <h2 className="experience__title">{t('cabinet.trust')}</h2>
        <div className="experience__description">
          <p className="experience__text">{t('cabinet.about')}</p>
          <div className="line__wrapper">
            <div className="line"></div>
          </div>

          <div className="achievements-wrapper">
            <div className="achievements__items">
              <div className="achievements__items--value">105+</div>
              <p className="achievements__description">{t('cabinet.partners')}</p>
            </div>
            <div className="achievements__items">
              <div className="achievements__items--value">116+</div>
              <p className="achievements__description">{t('cabinet.products')}</p>
            </div>
            <div className="achievements__items">
              <div className="achievements__items--value">12+</div>
              {t('cabinet.yearsOnMarket')}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default function HomeLayout({ children }) {
  const { language } = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [hash, setHash] = useState('');
  const [navs, setNavs] = useState([]);

  const initNavs = () => {
    const currentHash = location.hash.substring(1);
    setHash(currentHash);

    const navItems = [
      { id: 0, description: t('cabinet.webinar'), path: 'webinars', img: union },
      {
        id: 1,
        description: t('cabinet.program'),
        path: 'programs',
        additionalPath: 'webinarsInProgram',
        img: laptop,
      },
      { id: 2, description: t('cabinet.schedule'), path: 'schedule', img: schedule },
      { id: 3, description: t('cabinet.aboutUs'), path: 'about-us', img: about },
    ];

    return navItems.map((nav) => ({
      ...nav,
      isActive: nav.path === currentHash || currentHash === nav.additionalPath,
    }));
  };

  useEffect(() => {
    setNavs(initNavs());
  }, [hash, language]);

  const handleNavClick = (id) => {
    setNavs((prevNavs) =>
      prevNavs.map((navItem) => ({
        ...navItem,
        isActive: navItem.id === id,
      }))
    );
  };
  const isAboutActive = navs[3]?.isActive;

  return (
    <Protector>
      <section>
        <Header type={'cabinet'} />
        <Container background={'#151515'} sizeZero={true} additionalPadding>
          <div className={styles.root}>
            <div className={styles.gridSidebar}>
              {navs.map((nav) => (
                <div
                  key={nav.id}
                  className={`${styles.block} ${nav.isActive ? styles.active : ''}`}
                >
                  <Link
                    scroll={false}
                    onClick={() => handleNavClick(nav.id)}
                    href={`/home/${nav.path}/#${nav.path}`}
                  >
                    <div className={styles.blockElement}>
                      <Image src={nav.img} alt={laptop} />
                      <p>{nav.description}</p>
                    </div>
                  </Link>
                </div>
              ))}
              <div className={styles.block}>
                <div onClick={removeUserData} className={styles.blockElement}>
                  <p>{t('header.exit')}</p>
                </div>
              </div>
            </div>
            <div className={styles.gridContent}>
              <div className={styles.contentWrapper}>{children}</div>
            </div>
          </div>
        </Container>
        {isAboutActive ? <AboutUsAddition /> : <></>}
        <Footer location="home" />
      </section>
    </Protector>
  );
}
