// 'use client'
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

import { formatPriceWithCurrency } from '@/components/MyCalendar/utils';

import Clock from '../../../app/media/images/icon/clock.svg';
import ArrowUpRight from '../../../app/media/images/icon/arrow-up-right.svg';

import './event.scss';
import { useTranslation } from 'react-i18next';

const Event = (props) => {
  const { t } = useTranslation();
  const { topic, eventLink, programLink, duration, price, name, type } = props.event;

  return (
    <div className="calendar_event">
      {/* <p className="event_price">{formatPriceWithCurrency(price)}</p> */}
      <div onClick={() => window.open(eventLink, '_blank')}>
        <Link
          className="text_darken"
          href={programLink}
          onClick={(e) => e.stopPropagation()}
          target="_blank"
        >
          {t('additional.program')}:<br />
          {topic}
        </Link>
        <p className={'event_name'}>{name}</p>
        <p className="event_type text_darken">{t('additional.webinar')}</p>
        <div className="event_time">
          <Image src={Clock} alt="Clock" />
          <p>
            {duration} {t('additional.minutes')}
          </p>
          <Image className="arrow" src={ArrowUpRight} alt={'arrow'} />
        </div>
      </div>
    </div>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    topic: PropTypes.string,
    duration: PropTypes.number,
    programLink: PropTypes.string,
    eventLink: PropTypes.string,
    type: PropTypes.string,
    date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  }),
};

export default Event;
