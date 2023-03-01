import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  history:[]
}
    
export const HistorySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    // setMusic: (state,{payload}) => {
    //   state.music= payload
    // },
    removeTohistory: (state,{payload}) => {
      console.log(state.history.findIndex((arrow) => arrow.icon === payload),'item');
      let index=state.history.findIndex((arrow) => arrow.icon === payload)
      let arr=state.history
      arr.splice(index,1)
      state.history= arr;
    },
    addTohistory: (state,{payload}) => {
      return { ...state, history: [ ...state.history, payload ] }
    },
    clearhistory: (state) => {
      state.history= []
    },
    
    removeMusic: (state) => {
		state.music=''
    },
  },
})

// Action creators are generated for each case reducer function
export const { setMusic, clearLogin,addTohistory,clearhistory,removeTohistory } = HistorySlice.actions

export default HistorySlice.reducer