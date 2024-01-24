import React from 'react';
import ContactForm from "../ContactForm/ContactForm";

// styles
import * as styles from "./individualForm.module.scss"
import Container from "../../Container/Container";
import {useTranslation} from "react-i18next";

const IndividualForm = ({type, isWhite}) => {
    const {t} = useTranslation();
    return (
        <div className={styles.root}>
               <div className={styles.content}>
                   <p className={styles.title}>{t('individual.order')}</p>
                   <div className={styles.row}>
                       <div className={styles.column}>
                           <p className={styles.text}>{t('individual.text1')}</p>
                           <p className={styles.subtext}>{t('individual.text2')}</p>
                       </div>
                       <div className={styles.column}>
                           <ContactForm isWhite={isWhite} type={type}/>
                       </div>
                   </div>
               </div>

        </div>
    );
};

export default IndividualForm;