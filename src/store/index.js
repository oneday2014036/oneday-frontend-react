import {configureStore} from '@reduxjs/toolkit';

import pageSlice from "./pageSlice.js";

const store = configureStore({
    reducer: {
        page: pageSlice.reducer
    }
})

export default store