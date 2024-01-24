import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {findObjectsByLanguage} from '../../helpers/findObjectByLanguage';
import {strapiApi} from '../../api';

const languageFromStorage = typeof window !== 'undefined' ? localStorage.getItem('language') || 'ua' : 'ua';

const initialState = {
    courses: {
        programs: [],
        webinars: [],
    },
    globalCoursesByLanguage: {
        programs: [],
        webinars: [],
    },
    isLoading: true,
    error: null,
};


export const fetchCourses = createAsyncThunk('courses/fetchCourses', async (language = languageFromStorage) => {
    try {
        const [programsList, webinarList] = await Promise.all([
            strapiApi.get(`/api/courses?populate=*`),
            strapiApi.get(`/api/webbinarrs?populate=*`),
        ]);
        const globalProgramsByLanguage = findObjectsByLanguage(programsList.data.data, language, false, webinarList.data.data);
        const globalWebinarsByLanguage = findObjectsByLanguage(webinarList.data.data, language, false);

        return {programsList, webinarList, globalProgramsByLanguage, globalWebinarsByLanguage};
    } catch (error) {
        throw error;
    }
});

export const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        changeGlobalCoursesLanguage(state, action) {
            const {programs, webinars, language} = action.payload;
            state.globalCoursesByLanguage.programs = findObjectsByLanguage(programs, language, false, webinars);
            state.globalCoursesByLanguage.webinars = findObjectsByLanguage(webinars, language, false);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCourses.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCourses.fulfilled, (state, action) => {
                state.isLoading = false;
                const {programsList, webinarList, globalProgramsByLanguage, globalWebinarsByLanguage} =
                    action.payload;
                state.globalCoursesByLanguage.programs = globalProgramsByLanguage;
                state.globalCoursesByLanguage.webinars = globalWebinarsByLanguage;
                state.courses.programs = programsList.data.data;
                state.courses.webinars = webinarList.data.data;
            })
            .addCase(fetchCourses.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export const {changeGlobalCoursesLanguage} = coursesSlice.actions;

export default coursesSlice.reducer;