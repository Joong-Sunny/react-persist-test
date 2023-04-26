import { combineReducers } from "redux";
import userSlice from "./userSlice";
import memoSlice from "./memoSlice";
import patientSlice from "./patientSlice";
import doctorSlice from "./doctorSlice";

const rootReducer = combineReducers({
  user: userSlice,
  memo: memoSlice,
  patient: patientSlice,
  doctor: doctorSlice,
});

export default rootReducer;
