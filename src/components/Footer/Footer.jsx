'use client'
import React from 'react';

import icon5 from "src/app/media/images/icon/icon5.svg"
import icon6 from "src/app/media/images/icon/icon6.svg"
import icon7 from "src/app/media/images/icon/icon7.svg"
import icon8 from "src/app/media/images/icon/icon8.svg"
import icon12 from "../../app/media/images/icon/icon12.svg";
import icon13 from "../../app/media/images/icon/icon13.svg";
import icon14 from "../../app/media/images/icon/icon14.svg";
import Image from "next/image";
import Link from "next/link";
import {useTranslation} from "react-i18next";
import Logo from "@/app/media/images/logo";


const Footer = ({location}) => {
    const {t} = useTranslation();
    return (
        <footer className={`footer ${location==='home'? 'footer_home' : ''}`}>
            <div className="container d-block-md">
                <div className="footer__wrapper">
                    <div className="footer__contacts">
                        <a target='_blank' href="tel:+380953829264">+380 95 382 9264</a>
                        <div className="footer__social_left">
                            <a target='_blank' href="viber://chat?number=380953829264"><Image src={icon12} alt="viber" /></a>
                            <a target='_blank' href="https://wa.me/380953829264"><Image src={icon13} alt="whatsapp"/></a>
                            <a target='_blank' href="https://t.me/+380953829264"><Image src={icon14} alt="telegram"/></a>
                        </div>
                        <p>{t('additional.address')}</p>
                        <a target='_blank' href="mailto:info@bioinnova.com.ua">info@bioinnova.com.ua</a>

                    </div>

                    <div className="footer__center">
                        <div className="footer__social">
                            <a target='_blank' href="mailto:info@bioinnova.com.ua"><Image src={icon5} alt="icon"/><i className="icon-mail"></i></a>
                            <a target='_blank' href="https://www.youtube.com/channel/UC50lJttRfXcbkp8M1byrJ3A"><Image src={icon6} alt="icon"/></a>
                            <a target='_blank' href="https://www.linkedin.com/company/bio-innova/?viewAsMember=true"><Image src={icon7} alt="icon"/></a>
                            <a target='_blank' href="https://www.facebook.com/profile.php?id=61550967937918"><Image src={icon8} alt="icon"/></a>
                        </div>
                        <div className="footer__copyright">
                            © all rights reserved
                        </div>

                    </div>

                    <div className="footer__end">
                        <div className="footer__logo">
                            <Logo
                                className="inline-svg"
                                alt="Logo Bioscience Innova"
                            />
                        </div>


                        <div className="footer__copyright">
                           <p className="footer__copyright_link"> <Link target='_blank' href="/public-offer">{t('additional.publicOffer')}</Link></p>
                            <p className="footer__copyright_link"> <Link target='_blank' href="/policy">{t('additional.privacy')}</Link></p>
                            <p className="footer__copyright_text">© all rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;