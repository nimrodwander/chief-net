import { configureStore } from "@reduxjs/toolkit";
import profilesSlice from "./profiles-slice";
const store = configureStore({
  reducer: {
    profiles: profilesSlice.reducer
  },
});

export default store;
