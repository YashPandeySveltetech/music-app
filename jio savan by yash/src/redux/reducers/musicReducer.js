import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	music: '',
  favList:[]
}
    
export const MusicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    setMusic: (state,{payload}) => {
      state.music= payload
    },
    removeToFavouriteList: (state,{payload}) => {
      let index=state.favList.findIndex((arrow) => arrow.icon === payload)
      let arr=state.favList
      arr.splice(index,1)
      state.favList= arr;
    },
    addToFavouriteList: (state,{payload}) => {
      state.favList= [...state.favList,payload]
    },
    clearFavouriteList: (state) => {
      state.favList= []
    },
    
    removeMusic: (state) => {
		state.music=''
    },
  },
})

// Action creators are generated for each case reducer function
export const { setMusic, clearLogin,addToFavouriteList,clearFavouriteList,removeToFavouriteList } = MusicSlice.actions

export default MusicSlice.reducer