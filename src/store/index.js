import { configureStore } from "@reduxjs/toolkit";
import QueryReducer from "./slice/querySlice";

export default configureStore({
  reducer: {
    query: QueryReducer
  }
});
