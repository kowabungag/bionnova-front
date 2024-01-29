import React, { useRef, useState, useCallback } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';

import 'moment/locale/uk';
import 'moment/locale/ru';
import moment from 'moment';

const localizer = momentLocalizer(moment);

import { useSelector } from 'react-redux';
// components
import Event from './components/Event';
import CustomToolbar from './CustomCalendar';

// helpers
import { createCalendarEvents } from '@/helpers/createCalendarEvents';

// styles
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.scss';
import * as styles from '../Home/home.module.scss';
import { useTranslation } from 'react-i18next';
import { removeDuplicates } from '@/helpers/getNearestEventsByKey';
import { addToEventsUserEvent } from '@/helpers/addToEventsUserEvent';
import MyLoader from '@/components/UI/MyLoader/MyLoader';

const MyCalendar = ({
  isLoading,
  general,
  userPrograms,
  globalPrograms = [],
  userAvailableWebinars = [],
}) => {
  const { t } = useTranslation();
  const [isAllRecords, setIsAllRecords] = useState(true);
  const { language } = useSelector((state) => state.user.user);
  const [date, setDate] = useState(new Date());

  const onNavigate = useCallback((newDate) => setDate(newDate), [setDate]);

  moment.locale(language === 'ua' ? 'uk' : language);

  const ref = useRef();

  // Conditional rendering for loading
  const conditionalElement = general ? globalPrograms : userPrograms;
  if (isLoading) {
    return <MyLoader />;
  }

  // Create calendar events
  const globalEvents = createCalendarEvents(globalPrograms, general, t);

  const userProgramEvents = !general ? createCalendarEvents(userPrograms, general, t) : [];
  const userEvents = !general
    ? addToEventsUserEvent(userProgramEvents, globalEvents, userAvailableWebinars)
    : [];

  const eventsWithoutDuplicates = isAllRecords
    ? removeDuplicates(globalEvents)
    : removeDuplicates(userEvents);
  const handleClick = (bool) => {
    setIsAllRecords(bool);
  };

  return (
    <div className={styles.gridCalendar}>
      <div className={`calendar ${general ? 'generalCalendar' : ''}`}>
        <Calendar
          selectable
          steps={60}
          date={date}
          resourceIdAccessor="resourceId"
          resourceTitleAccessor="resourceTitle"
          ref={ref}
          events={eventsWithoutDuplicates}
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          onNavigate={onNavigate}
          components={{
            event: (props) => <Event {...props} general={general} />,
            toolbar: (props) => (
              <CustomToolbar
                {...props}
                setDate={setDate}
                date={date}
                isAllRecords={isAllRecords}
                handleClick={handleClick}
              />
            ),
          }}
        />
      </div>
    </div>
  );
};

export default MyCalendar;
