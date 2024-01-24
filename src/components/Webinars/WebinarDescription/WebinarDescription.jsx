import React, {useEffect, useState} from 'react';
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';

// styles
import * as styles from "./webinarDesctiption.module.scss";
import {useTranslation} from "react-i18next";


const WebinarDescription = ({type, programDescription, programTitle, webinarDescription}) => {
    const [markDown, setMarkdown] = useState('');
    const {t} = useTranslation();
    useEffect(() => {
        if (type === 'program') {
            setMarkdown(programDescription)
        } else {
            setMarkdown(webinarDescription)
        }

    }, [programDescription, type, webinarDescription])

    return (
        <div className={styles.root}>
            <div className={type === 'program' ? styles.program : styles.description}>

                {type !== 'program' &&
                    <p className={styles.programTitle}>{t('additional.webinarDescribe')}</p>
                }
                <ReactMarkdown
                    remarkPlugins={[gfm]}
                >
                    {markDown}
                </ReactMarkdown>

            </div>
        </div>
    );
};

export default WebinarDescription;