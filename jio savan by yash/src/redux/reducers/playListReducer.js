import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	music: '',
  playList:[]
}
    
export const PlayListSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    setMusic: (state,{payload}) => {
      state.music= payload
    },
    removeToPlayList: (state,{payload}) => {
      console.log(state.playList.findIndex((arrow) => arrow.icon === payload),'item');
      let index=state.playList.findIndex((arrow) => arrow.icon === payload)
      let arr=state.playList
      arr.splice(index,1)
      state.playList= arr;
    },
    addToPlayList: (state,{payload}) => {
      console.log(payload,'payload');
      state.playList= [...state.playList,payload]
    },
    clearPlayList: (state) => {
      state.playList= []
    },
    
    removeMusic: (state) => {
		state.music=''
    },
  },
})

// Action creators are generated for each case reducer function
export const { setMusic, clearLogin,addToPlayList,clearPlayList,removeToPlayList } = PlayListSlice.actions

export default PlayListSlice.reducer