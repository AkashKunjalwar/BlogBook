import { configureStore } from "@reduxjs/toolkit";
import LocalReducer from "./Reducers/LocalReducer";

const store = configureStore({
  reducer: {
    LocalReducer,
  },
});

export default store;
