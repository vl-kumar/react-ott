import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contentReducer from "./slices/Content-Slice";
import searchReducers from "./slices/Search-slice";

const rootReducer = combineReducers({
  content: contentReducer,
  search: searchReducers,
});
export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
