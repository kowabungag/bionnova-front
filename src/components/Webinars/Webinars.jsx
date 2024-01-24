'use client'
import { useEffect } from 'react'
import Container from '../Container/Container'

import * as styles from './webinars.module.scss'
import { WebinarOverview } from './WebinarOverview/WebinarOverview'
import { WebinarsList } from './WebinarList/WebinarsList'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCourses } from '@/features/coursesSlice/coursesSlice'
import MyLoader from '@/components/UI/MyLoader/MyLoader'
import { getAllEventsWithSort, getNearestEventsByKey } from '@/helpers/getNearestEventsByKey'
import IndividualForm from '@/components/UI/IndividualForm/IndividualForm'

const Webinars = ({ id }) => {
  const { t } = useTranslation()
  const { globalCoursesByLanguage, isLoading } = useSelector((store) => store.courses)
  const { webinars } = globalCoursesByLanguage
  const dispatch = useDispatch()

  useEffect(() => {
    if (!id) dispatch(fetchCourses())
  }, [dispatch, id])

  if (isLoading) {
    return <MyLoader />
  }

  const sortedWebinarsByDate = getAllEventsWithSort(webinars, 'date')

  return (
    <div>
      {id ? (
        <WebinarOverview webinars={webinars} />
      ) : (
        <>
          <Container>
            <div className={styles.root}>
              <div className="back_group">
                <Link href={'/services'} className="back">
                  {t('services.services')}
                </Link>
              </div>
              <p className={styles.title}>{t('services.webinars')}</p>
              <div className={styles.row}>
                <WebinarsList webinars={sortedWebinarsByDate} />
              </div>
            </div>
          </Container>
          <div className={styles.individualForm}>
            <IndividualForm isWhite={true} type="individual" />
          </div>
        </>
      )}
    </div>
  )
}

export default Webinars
