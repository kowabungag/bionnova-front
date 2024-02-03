'use client';
import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

// libraries
import { Select } from 'antd';
import i18n from 'i18next';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserCoursesLanguage, changeUserLanguage } from '@/features/userSlice/userSlice';
import { useTranslation } from 'react-i18next';
import { changeGlobalCoursesLanguage } from '@/features/coursesSlice/coursesSlice';
import Link from 'next/link';

// helpers
import { removeUserData } from '@/helpers/userData';

// assets
import icon5 from '../../app/media/images/icon/icon5.svg';
import icon6 from '../../app/media/images/icon/icon6.svg';
import icon7 from '../../app/media/images/icon/icon7.svg';
import icon8 from '../../app/media/images/icon/icon8.svg';
import icon12 from '../../app/media/images/icon/icon12.svg';
import icon13 from '../../app/media/images/icon/icon13.svg';
import icon14 from '../../app/media/images/icon/icon14.svg';
import userImg from '../../app/media/images/userGolden.svg';
import basket from '../../app/media/images/basket.svg';

// styles
import './header.scss';
import Logo from '@/app/media/images/logo';
import { changeFeedbackLanguage } from '@/features/feedback/feedbackSlice';

const Header = ({ type }) => {
  const { t } = useTranslation();
  const { language } = useSelector((store) => store.user.user);
  const globalCourses = useSelector((store) => store.courses.courses);
  const user = useSelector((store) => store.user.user.courses);
  const { feedback } = useSelector((store) => store.feedback);
  const [burgerState, setBurgerState] = useState(false);
  const [endpoint, setEndpoint] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({ value: language, label: language });
  const pathname = usePathname();

  useEffect(() => {
    if (burgerState) {
    }
  }, [burgerState]);

  const dispatch = useDispatch();

  const ref = useRef();

  useEffect(() => {
    setEndpoint(pathname);

    window.addEventListener('scroll', () => {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
    return () => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 5) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      });
    };
  }, [pathname]);

  const handleLanguageChange = ({ label, value }) => {
    setSelectedLanguage({ label, value });
    dispatch(changeUserLanguage(label));
    const globalPayload = {
      programs: globalCourses.programs,
      webinars: globalCourses.webinars,
      language: label,
    };
    const userPayload = {
      programs: user.programs,
      webinars: user.webinars,
      language: label,
      globalWebinars: globalCourses.webinars,
    };
    const feedbackPayload = {
      language: label,
      feedback: feedback,
    };
    dispatch(changeGlobalCoursesLanguage(globalPayload));
    dispatch(changeUserCoursesLanguage(userPayload));
    dispatch(changeFeedbackLanguage(feedbackPayload));
    i18n.changeLanguage(label);
  };

  const handleBurgerClick = () => {
    let body = document.getElementsByTagName('body')[0];

    if (burgerState) {
      body.style.height = 'auto';
      body.style.overflow = 'unset';
      body.style.width = 'auto';
      body.style.position = 'unset';
      setBurgerState((state) => !state);
    } else {
      body.style.height = '100%';
      body.style.overflow = 'hidden';
      body.style.width = '100%';
      body.style.position = 'fixed';
      setBurgerState((state) => !state);
    }
  };

  const handleMobileClick = () => {
    let body = document.getElementsByTagName('body')[0];
    body.style.height = 'auto';
    body.style.overflow = 'unset';
    body.style.width = 'auto';
    body.style.position = 'unset';

    setBurgerState(false);
  };

  return (
    <header
      ref={ref}
      className={`
            header 
             ${burgerState ? 'header__onMobile' : ''}
            ${isScrolled ? 'scrolled' : 'unscrolled'}
            ${type === 'full' ? 'about-page' : ''}
            `}
    >
      <div className="container d-block-md">
        <div className="header__logo" onClick={handleMobileClick}>
          <Link href="/">
            <Logo className="inline-svg" />
          </Link>
        </div>

        <nav className={`header__nav ${type === 'cabinet' ? 'hidden' : ''}`}>
          <ul>
            <li>
              <Link
                className={`text-uppercase ${endpoint === '/aboutCompany/' ? 'active' : ''}`}
                href={'/aboutCompany'}
              >
                {t('header.about')}
              </Link>
            </li>
            <li>
              <Link
                className={`text-uppercase ${endpoint === '/services/' ? 'active' : ''}`}
                href={'/services'}
              >
                {t('header.services')}
              </Link>
            </li>
            <li>
              <Link
                className={`text-uppercase ${endpoint === '/activities/' ? 'active' : ''}`}
                href={'/activities'}
              >
                {t('header.events')}
              </Link>
            </li>
            <li>
              <Link
                className={`text-uppercase ${endpoint === '/contacts/' ? 'active' : ''}`}
                href={'/contacts'}
              >
                {t('header.contacts')}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header__aside">
          <nav className="header__aside--person">
            <ul>
              <li>
                <Link className="" href={'/home/about-us/#about-us'}>
                  <Image src={userImg} alt={'home'} />
                </Link>
              </li>
              <li>
                <Link className="" href={type === 'cabinet' ? '/basket#cabinet' : '/basket'}>
                  <Image src={basket} alt={'basket'} />
                </Link>
              </li>
            </ul>
          </nav>

          <div className="tabheader-mobile has-form">
            <Select
              labelInValue
              defaultValue={selectedLanguage}
              style={{
                width: 120,
              }}
              onChange={handleLanguageChange}
              options={[
                {
                  value: 'ru',
                  label: 'ru',
                },
                {
                  value: 'ua',
                  label: 'ua',
                },
                {
                  value: 'en',
                  label: 'en',
                },
              ]}
            />
          </div>
        </div>

        <div className={`header__mobile ${burgerState ? 'active' : ''}`}>
          <ul
            className={`${type === 'cabinet' ? 'nav-menu__mobile_cabinet' : ''} nav-menu__mobile`}
          >
            <li className={type === 'cabinet' ? 'hidden' : ''} onClick={handleMobileClick}>
              <Link className={`text-uppercase ${endpoint === '' ? 'active' : ''}`} href={'/'}>
                {t('header.main')}
              </Link>
            </li>
            <li className={type === 'cabinet' ? 'hidden' : ''} onClick={handleMobileClick}>
              <Link
                className={`text-uppercase ${endpoint === '/aboutCompany/' ? 'active' : ''}`}
                href={'/aboutCompany'}
              >
                {t('header.about')}
              </Link>
            </li>
            <li className={type === 'cabinet' ? 'hidden' : ''} onClick={handleMobileClick}>
              <Link
                className={`text-uppercase ${endpoint === '/services/' ? 'active' : ''}`}
                href={'/services'}
              >
                {t('header.services')}
              </Link>
            </li>
            <li className={type === 'cabinet' ? 'hidden' : ''} onClick={handleMobileClick}>
              <Link
                className={`text-uppercase ${endpoint === '/activities/' ? 'active' : ''}`}
                href={'/activities'}
              >
                {t('header.events')}
              </Link>
            </li>
            <li className={type === 'cabinet' ? 'hidden' : ''} onClick={handleMobileClick}>
              <Link
                className={`text-uppercase ${endpoint === '/contacts/' ? 'active' : ''}`}
                href={'/contacts'}
              >
                {t('header.contacts')}
              </Link>
            </li>
            <li
              className={`${type === 'cabinet' ? 'hidden' : ''} liWithImg basket`}
              onClick={handleMobileClick}
            >
              <Link
                className={`text-uppercase ${endpoint === '/basket/' ? 'active' : ''}`}
                href={'/basket'}
              >
                {t('header.basket')}
              </Link>
            </li>
            <li
              className={`${type === 'cabinet' ? 'hidden' : ''} liWithImg account`}
              onClick={handleMobileClick}
            >
              <Link
                className={`text-uppercase ${endpoint === '/home/' ? 'active' : ''}`}
                href={'/home/about-us/#about-us'}
              >
                {t('header.account')}
              </Link>
            </li>

            <>
              <li
                className={`nav-menu__mobile--block ${
                  type === 'cabinet' ? 'nav-menu__mobile--block-cabinet' : ''
                }`}
              >
                <ul className="nav-menu__mobile--lang">
                  <li className={selectedLanguage.value === 'ru' ? 'active' : ''}>
                    <button
                      onClick={() =>
                        handleLanguageChange({
                          value: 'ru',
                          label: 'ru',
                        })
                      }
                    >
                      RU
                    </button>
                  </li>
                  <li className={selectedLanguage.value === 'en' ? 'active' : ''}>
                    <button
                      onClick={() =>
                        handleLanguageChange({
                          value: 'en',
                          label: 'en',
                        })
                      }
                    >
                      ENG
                    </button>
                  </li>
                  <li className={selectedLanguage.value === 'ua' ? 'active' : ''}>
                    <button
                      onClick={() =>
                        handleLanguageChange({
                          value: 'ua',
                          label: 'ua',
                        })
                      }
                    >
                      УКР
                    </button>
                  </li>
                </ul>
                <ul className={`nav-menu__mobile--exit ${type === 'cabinet' ? '' : 'hidden'}`}>
                  <li onClick={handleMobileClick} className="nav-menu__mobile--exit_basket">
                    <Link className={`text-uppercase `} href={'/basket#cabinet'}>
                      {t('header.basket')}
                    </Link>
                  </li>
                  <li className="nav-menu__mobile--exit_exit" onClick={removeUserData}>
                    {t('header.exit')}
                  </li>
                </ul>
                <ul className="nav-menu__mobile--info">
                  <li>
                    <a target="_blank" href="tel:+38 (095) 382-92-64">
                      +380 95 382 9264
                    </a>
                  </li>
                  <li className="nav-menu__mobile--info--social">
                    <a target="_blank" href="viber://chat?number=380953829264">
                      <Image src={icon12} alt="viber" />
                    </a>
                    <a target="_blank" href="https://wa.me/380953829264">
                      <Image src={icon13} alt="whatsapp" />
                    </a>
                    <a target="_blank" href="https://t.me/+380953829264">
                      <Image src={icon14} alt="telegram" />
                    </a>
                  </li>
                  <li className="nav-menu__mobile--info--place">
                    <p>01033, {t('additional.address')}</p>
                  </li>
                  <li className="nav-menu__mobile--info--social-bottom">
                    <a target="_blank" href="mailto:info@bioinnova.com.ua">
                      <Image src={icon5} alt="icon" />
                      <i className="icon-mail"></i>
                    </a>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/channel/UC50lJttRfXcbkp8M1byrJ3A"
                    >
                      <Image src={icon6} alt="icon" />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/bio-innova/?viewAsMember=true"
                    >
                      <Image src={icon7} alt="icon" />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=61550967937918"
                    >
                      <Image src={icon8} alt="icon" />
                    </a>
                  </li>
                </ul>
              </li>
            </>
          </ul>
        </div>

        <div onClick={handleBurgerClick} className={`burger-menu ${burgerState ? 'open' : ''}`}>
          <span className="bar first"></span>
          <span className="bar second"></span>
          <span className="bar third"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
