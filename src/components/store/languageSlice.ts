import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const languageAdapter = createEntityAdapter();

const initialState = languageAdapter.getInitialState({
  value:
    localStorage.getItem("lang") ??
    (navigator.language == "cs" || navigator.language == "sk" ? "cs" : "en"),
});

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.value = action.payload ?? "cs";
      localStorage.setItem("lang", action.payload ?? "cs");
    },
  },
});

export const getLanguage = (state: RootState) => state.language.value;
export const isCzech = (state: RootState) => state.language.value === "cs";

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
