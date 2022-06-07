import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './Reducers';
let store = configureStore({
    reducer: rootReducer
});

window.store = store;

export default store;