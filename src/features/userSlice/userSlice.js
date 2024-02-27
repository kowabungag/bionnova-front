import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { findObjectsByLanguage } from '@/helpers/findObjectByLanguage';
import { strapiApi } from '@/api';
import { userData } from '@/helpers/userData';

const languageFromStorage =
  typeof window !== 'undefined' ? localStorage.getItem('language') || 'ua' : 'ua';
const coursesFromStorage =
  typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('coursesList')) || [] : [];
const userFromStorage = typeof window !== 'undefined' ? userData() : {};

export const fetchUserCourses = createAsyncThunk(
  'courses/fetchCoursesByLanguage',
  async (language = localStorage.getItem('language') ? localStorage.getItem('language') : 'ua') => {
    if (!userFromStorage.userId) {
      throw new Error('User ID not available.'); // This will be caught by the 'rejected' case in the slice.
    }

    const userResponse = await strapiApi.get(`/api/users/${userFromStorage.userId}?populate=*`);

    const userProgramsIds = userResponse.data.courses.map((course) => course.id);
    let userPrograms;
    await axios
      .all(userProgramsIds.map((id) => strapiApi.get(`/api/courses/${id}?populate=*`)))
      .then((data) => (userPrograms = data));

    const userWebinarsIds = userResponse.data.webbinarrs.map((webinar) => webinar.id);
    let userWebinars;
    await axios
      .all(userWebinarsIds.map((id) => strapiApi.get(`/api/webbinarrs/${id}?populate=*`)))
      .then((data) => (userWebinars = data));

    const globalWebinars = await strapiApi.get(`/api/webbinarrs?populate=*&locale*`);

    const userProgramsByLanguage = findObjectsByLanguage(
      userPrograms,
      language,
      true,
      globalWebinars.data.data
    );
    const userWebinarsByLanguage = findObjectsByLanguage(userWebinars, language, true);

    return { userPrograms, userWebinars, userProgramsByLanguage, userWebinarsByLanguage };
  }
);

const initialState = {
  user: {
    language: languageFromStorage,
    courses: {
      programs: [],
      webinars: [],
    },
    userCoursesByLanguage: {
      programs: [],
      webinars: [],
    },
    basket: {
      programs: [],
      webinars: [],
    },
  },
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUserCoursesLanguage(state, action) {
      const { programs, webinars, language, globalWebinars } = action.payload;
      state.user.userCoursesByLanguage.programs = findObjectsByLanguage(
        programs,
        language,
        true,
        globalWebinars
      );
      state.user.userCoursesByLanguage.webinars = findObjectsByLanguage(webinars, language, true);
    },
    changeUserLanguage(state, action) {
      state.user.language = action.payload;
      typeof window !== 'undefined' ? localStorage.setItem('language', action.payload) : '';
    },
    addUserCurse(state, action) {
      state.user.coursesList = [...state.user.coursesList, action.payload];
      typeof window !== 'undefined'
        ? localStorage.setItem('coursesList', JSON.stringify([...state.user.coursesList]))
        : '';
    },
    removeUserCurse(state) {
      state.user.coursesList = [];
      typeof window !== 'undefined' ? localStorage.setItem('coursesList', JSON.stringify([])) : '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserCourses.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserCourses.fulfilled, (state, action) => {
      state.isLoading = false;

      const programs = action.payload.userPrograms;
      const webinars = action.payload.userWebinars;
      const userProgramsByLanguage = action.payload.userProgramsByLanguage;
      const userWebinarsByLanguage = action.payload.userWebinarsByLanguage;

      state.user.courses.programs = programs;
      state.user.courses.webinars = webinars;
      state.user.userCoursesByLanguage.programs = userProgramsByLanguage;
      state.user.userCoursesByLanguage.webinars = userWebinarsByLanguage;
    });
    builder.addCase(fetchUserCourses.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { changeUserLanguage, addUserCurse, removeUserCurse, changeUserCoursesLanguage } =
  userSlice.actions;
export default userSlice.reducer;
