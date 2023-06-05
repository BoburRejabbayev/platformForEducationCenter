import { createSlice } from "@reduxjs/toolkit";


// const initialState = 
const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    user: {},
    isLogin: false
  },
  reducers: {
    addUser: (state, action) => {
      // state.user.push(action.payload)
      state.user = action.payload
    },
    setIsLogin: (state, action) => {
      !action.payload && alert('Success')
      state.isLogin = action.payload
    },
    closeUser(state) {
      state.user = {}
      state.isLogin = false
    }
  }
});

export const { addUser, closeUser, setIsLogin } = userSlice.actions;
export default userSlice.reducer;