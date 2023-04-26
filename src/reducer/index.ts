import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userSlice } from "./userSlice";
import { memoSlice } from "./memoSlice";

const persistConfig = {
  key: "memo",
  storage: storage, // Use lowercase 'storage'
  whitelist: ["memo"], // Correct the typo from 'whiltelist' to 'whitelist'
  blacklist: ["user"],
};

const rootReducer = combineReducers({
  user: userSlice.reducer,
  memo: memoSlice.reducer,
});

export default persistReducer(persistConfig, rootReducer);
