import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const memoSlice = createSlice({
  name: "memo",
  initialState: {
    memo: {
      gi: "111",
      yon: "111",
      oh: "111",
    },
  },
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.memo = action.payload;
    },
  },
});
