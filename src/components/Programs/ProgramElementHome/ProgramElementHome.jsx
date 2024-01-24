import React from 'react';

// libraries

// assets
import arrowUpRight from "src/app/media/images/arrowUpRightSm.svg";

// styles
import * as styles from "../programElement.module.scss";
import Image from "next/image";
import {useTranslation} from "react-i18next";
import {convertDateFormat} from "@/helpers/convertTime";
import Link from "next/link";


const ProgramElement = ({programs}) => {
    const {t} = useTranslation()
    return (
        <>
            {programs?.map(program =>
                <div key={program.id} className={styles.column}>
                    <Link scroll={false}  href={`/home/programs/program/?program=${program.id}#programs`}>
                        <p className={styles.section}>{t('additional.program')}</p>
                        <p className={styles.name}>{program.name}</p>
                        <p className={styles.date}><span>{t('additional.beginning')}:</span> {convertDateFormat(program.start)}</p>
                        <div className={styles.bottom}>
                            <p><span>{t('additional.webinars')}:</span> {program.webinarsCount}</p>
                            <Image src={arrowUpRight} alt={'arrow'}/>
                        </div>

                    </Link>
                </div>
            )}
        </>
    );
};

export default ProgramElement;