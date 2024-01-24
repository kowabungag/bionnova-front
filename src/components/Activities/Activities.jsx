'use client'
import { useEffect } from 'react'
// components
import Container from '../Container/Container'
import MyCalendar from '../MyCalendar/MyCalendar'
import { WebinarsList } from '../Webinars/WebinarList/WebinarsList'
import IndividualForm from '../UI/IndividualForm/IndividualForm'

// styles
import * as styles from './activities.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCourses } from '@/features/coursesSlice/coursesSlice'
import { useTranslation } from 'react-i18next'
import MyLoader from '@/components/UI/MyLoader/MyLoader'
import { getAllEventsWithSort } from '@/helpers/getNearestEventsByKey'

const Activities = () => {
  const { t } = useTranslation()
  const { globalCoursesByLanguage, isLoading, error } = useSelector((state) => state.courses)
  const { webinars, programs } = globalCoursesByLanguage
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCourses())
  }, [dispatch])

  if (isLoading) {
    return <MyLoader />
  }

  if (error) {
    return <p>{error}</p>
  }

  const sortedWebinarsByDate = getAllEventsWithSort(webinars, 'date')

  return (
    <div className={styles.root}>
      <Container sizeZero>
        <p className={`${styles.title} text60`}>{t('additional.activities')}</p>
        <div className={styles.calendar}>
          <MyCalendar general={true} globalPrograms={programs} />
        </div>
      </Container>
      <div className={styles.webinars}>
        <div className={styles.content}>
          <p className={`${styles.title} text60`}>{t('cabinet.webinar')}</p>
          <div className={styles.row}>
            <WebinarsList webinars={sortedWebinarsByDate} />
          </div>
        </div>
      </div>
      <div className={styles.individualForm}>
        <IndividualForm isWhite={true} type="individual" />
      </div>
    </div>
  )
}

export default Activities
