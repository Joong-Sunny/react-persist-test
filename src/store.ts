import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./reducer/userSlice";
import { memoSlice } from "./reducer/memoSlice";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  user: userSlice.reducer,
  memo: memoSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// const store = configureStore({
//   reducer: {
//     user: userSlice.reducer,
//     memo: memoSlice.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });
// export default store;
// export type RootState = ReturnType<typeof store.getState>;
// export const persistor = persistStore(store);
