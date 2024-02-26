'use client';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses } from '@/features/coursesSlice/coursesSlice';

import { ProgramOverview } from './ProgramOverview/ProgramOverview';
import { ProgramsList } from './ProgramsList/ProgramsList';
import MyLoader from '@/components/UI/MyLoader/MyLoader';

const Programs = ({ id }) => {
  const { globalCoursesByLanguage, isLoading } = useSelector((store) => store.courses);
  const { programs } = globalCoursesByLanguage;
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!id) dispatch(fetchCourses());
  // }, [dispatch, id]);

  // if (isLoading) {
  //   return <MyLoader />;
  // }

  return (
    <div>
      {id ? <ProgramOverview id={id} programs={programs} /> : <ProgramsList programs={programs} />}
    </div>
  );
};

export default Programs;
