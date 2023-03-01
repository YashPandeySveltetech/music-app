
// // import { MULTIPLY_FIVE } from './FiveType';

// const initialState = {
// 	loginData: []
// }

// const LoginReducer = (state = initialState, action) => {
// 	switch(action.type){
// 		case "LOGIN": return {
// 			...state,
// 			loginData: action.payload
// 		}
		
// 		default: return state
// 	}
// }

// export default LoginReducer;

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loginData: []
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state,{payload}) => {
 
      state.loginData= payload
    },
    clearLogin: (state) => {
		state.loginData= []
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { setLogin, clearLogin } = loginSlice.actions

export default loginSlice.reducer