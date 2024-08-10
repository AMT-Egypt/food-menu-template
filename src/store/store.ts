import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './search';
import translationReducer from "./translation";

export default configureStore({
    reducer: {
        translation: translationReducer,
        search: searchReducer
    }
});