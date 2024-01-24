import {createSlice} from "@reduxjs/toolkit";
import {BASKET_TYPES, checkIsBuying, removeBaskedData, storeBasketData} from "@/helpers/basketData";
import {toast} from "react-toastify";

const getBasketPrice = (programs, webinars) => {
    let basketPrice = 0;

    programs.forEach((program) => program.price ? basketPrice += program.price : '');
    webinars.forEach((webinar) => webinar.price ? basketPrice += webinar.price : '');

    return basketPrice;
}

const getBasketData = () => {
    const storedPrograms = typeof window !== 'undefined' ?JSON.parse(localStorage.getItem("programs") || '[]') :'';
    const storedWebinars = typeof window !== 'undefined' ?JSON.parse(localStorage.getItem("webinars") || '[]') :'';

    const programs = storedPrograms.programs || [];
    const webinars = storedWebinars.webinars || [];

    const count = programs.length + webinars.length;
    const totalPrice = getBasketPrice(programs, webinars)
    return {programs, webinars, count, totalPrice}
};

const {programs, webinars, count, totalPrice} = getBasketData()

const initialState = {
    basket: {
        programs: programs,
        webinars: webinars,
        count: count,
        totalPrice: totalPrice
    }
}


export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBasketElement(state, action) {
            const {type, data,t} = action.payload;
            const isCourseExist = checkIsBuying(data, type)
            if (isCourseExist) {
                toast.error(t('toast.basket.failed'))
                return
            }
            if (type === BASKET_TYPES.WEBINAR) {
                state.basket.webinars.push(data);
                storeBasketData(state.basket.webinars, BASKET_TYPES.WEBINAR)
                toast.success(t('toast.basket.success'))
            } else if (type === BASKET_TYPES.PROGRAM) {
                state.basket.programs.push(data);
                storeBasketData(state.basket.programs, BASKET_TYPES.PROGRAM)
                toast.success(t('toast.basket.success'))
            }
            state.basket.count = state.basket.programs.length + state.basket.webinars.length;
        },
        removeBasketElements(state) {
            state.basket.webinars = [];
            state.basket.programs = [];
            state.basket.count = 0;

            removeBaskedData();

        }
    },
});

export const {addBasketElement, removeBasketElements} = basketSlice.actions;

export default basketSlice.reducer;
