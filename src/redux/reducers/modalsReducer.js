
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoginModalOpen: false,
	isCreatePlaylistModalOpen:false
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openLoginModal: (state) => {
 
      state.isLoginModalOpen= true
    },
    clearLoginModal: (state) => {
		state.isLoginModalOpen=false
    },
	openCreatePlaylistModal: (state) => {
 
		state.isCreatePlaylistModalOpen= true
	  },
	  clearCreatePlaylistModal: (state) => {
		  state.isCreatePlaylistModalOpen=false
	  },
  },
})

// Action creators are generated for each case reducer function
export const { openLoginModal, clearLoginModal,openCreatePlaylistModal,clearCreatePlaylistModal } = modalSlice.actions

export default modalSlice.reducer