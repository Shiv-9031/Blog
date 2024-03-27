import { createSlice } from "@reduxjs/toolkit";

export const userSlicer = createSlice({
  name: "userData",
  initialState: {
    users: {
      success: true,
      isuserName: {
        _id: "",
        name: "",
        username: "",
        password: "",
        phone: "",
        email: "",
        createdAt: "",
        updatedAt: "",
        __v: 0,
      },
      token: "",
    },
  },
  reducers: {
    //creating reducer for saving data
    userInfo: (state, action) => {
      state.users = { ...action.payload };
    },
  },
});

export const { userInfo } = userSlicer.actions;
export default userSlicer.reducer;
