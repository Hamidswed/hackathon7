import { configureStore } from "@reduxjs/toolkit";
import IssueReducer from "./slice/issue";

const store = configureStore({
  reducer: IssueReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;