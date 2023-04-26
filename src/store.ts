import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./reducer/userSlice";
import { memoSlice } from "./reducer/memoSlice";
import { persistStore } from "redux-persist";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    memo: memoSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
