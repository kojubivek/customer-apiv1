import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
};

const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, { payload = [] }) => {
      state.category = payload;
    },
  },
});

const { reducer, actions } = CategorySlice;

export const { setCategory } = actions;

export default reducer;
