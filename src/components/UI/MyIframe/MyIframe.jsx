import React from 'react';

import * as styles from "./myIframe.module.scss"
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {useSelector} from "react-redux";

const MyIframe = ({language, type}) => {

    const file = type === 'policy' ? 'policy' : 'public-offer';
    const locale = language === 'ua' || language === 'ru'? 'ua' : 'en'
    return (
        <div className={styles.root}>
            <iframe src={`/files/${file}_${locale}.pdf`}/>
        </div>
    );
};

export default MyIframe;