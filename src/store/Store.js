import { configureStore } from "@reduxjs/toolkit";

import catReducer from "../pages/category/CategorySlice";

const store = configureStore({
  reducer: {
    category: catReducer,
  },
});

export default store;
