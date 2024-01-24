import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {strapiApi} from "@/api";
import {getFeedbackByLanguage} from "@/helpers/getFeedbackByLanguage";

const languageFromStorage = typeof window !== 'undefined' ? localStorage.getItem('language') || 'ua' : 'ua';


export const fetchFeedback = createAsyncThunk('feedback/fetchFeedback', async (language = languageFromStorage) => {
    const feedback = await strapiApi.get(`/api/feedbacks?populate=*`)

    const feedbackByLanguage = getFeedbackByLanguage(feedback.data.data, language);
    console.log('QQ 1',feedbackByLanguage)
    return {feedback,feedbackByLanguage}
})

const initialState = {
    feedback: [],
    feedbackByLanguage: [],
    isLoading: false,
    error: null,
}

const feedbackSlice = createSlice({
    name: 'feeback',
    initialState,
    reducers: {
        changeFeedbackLanguage(state, action) {
            const {feedback, language} = action.payload;
            console.log('QQ 2',language, feedback,getFeedbackByLanguage(feedback, language))
            state.feedbackByLanguage = getFeedbackByLanguage(feedback, language);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFeedback.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchFeedback.fulfilled, (state, action) => {
            state.isLoading = false
            state.feedback = action.payload.feedback.data.data;
            state.feedbackByLanguage = action.payload.feedbackByLanguage

        })
        builder.addCase(fetchFeedback.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },
})

export const {changeFeedbackLanguage} = feedbackSlice.actions;
export default feedbackSlice.reducer;