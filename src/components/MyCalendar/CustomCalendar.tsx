import * as React from 'react';
import {useState} from "react";
import {useTranslation} from "react-i18next";


export interface ICustomTooolbarProps {
    view: string;
    views: string[];
    label: any;
    localizer: any;
    onNavigate: (action: any) => void;
    onView: (view: any) => void;
    onViewChange: (view: any) => void;
    messages: any;
}

export const navigateContants = {
    PREVIOUS: 'PREV',
    NEXT: 'NEXT',
    TODAY: 'TODAY',
    DATE: 'DATE'
};

export const views = {
    MONTH: 'month',
    WEEK: 'week',
    WORK_WEEK: 'work_week',
    DAY: 'day',
    AGENDA: 'agenda'
};

const CustomToolbar = (props) => {
    const {t} = useTranslation();
    function navigate(action) {
        const nextDate = new Date(props.date.getFullYear(), props.date.getMonth() + 1)
        const previosDate = new Date(props.date.getFullYear(), props.date.getMonth() - 1)
        props.setDate(action === "NEXT"? nextDate : previosDate)
        props.onNavigate(action);
    }


    return (
        <div className="rbc-toolbar">
            <span className='back_block'>
                <button className='back'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none"><path
                        d="M18 1L6 13L18 25" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                   <span className='back-text'> {t('cabinet.back')}</span>
                </button>
            </span>
            <span className="rbc-btn-group">
                {/*<button type="button" onClick={navigate.bind(null, navigateContants.TODAY)}>*/}
                {/*    Current month*/}
                {/*</button>*/}

                <button className='btn-prev' type="button" onClick={navigate.bind(null, navigateContants.PREVIOUS)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none"><path
                        d="M18 1L6 13L18 25" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                </button>
                <span className="rbc-toolbar-label">{props.label}</span>
                <button className='btn-next' type="button" onClick={navigate.bind(null, navigateContants.NEXT)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none"><path
                        d="M6 25L18 13L6 1" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                </button>
            </span>
            <span className="records_block">
                <button
                    onClick={() => props.handleClick(true)}
                    className={`${props.isAllRecords ? "activeRecord" : ""} all-records`}
                >
                    {t('cabinet.all')}
                </button>
                <button
                    onClick={() => props.handleClick(false)}
                    className={`${props.isAllRecords ? "" : "activeRecord"} my-records`}
                >
                    {t('cabinet.onlyMy')}
                </button>
            </span>
        </div>
    );
};

export default CustomToolbar;