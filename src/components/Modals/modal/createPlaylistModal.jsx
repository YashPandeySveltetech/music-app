import CustomButton from "components/common/customButton";
import ModalWrapper from "components/common/modalWrapper";
import SearchBar from "components/common/searchBar";
import TextField from "components/common/textField";
import React, { useReducer } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCreatePlaylistModal, clearLoginModal } from "redux/reducers/modalsReducer";
import { addToPlayList } from "redux/reducers/playListReducer";

export default function CreatePlaylistModal() {
  const [playListName,setPlayListName]=useState("")
    const {modal}=useSelector((state)=>state)
    const dispatch=useDispatch()
    const addPlayList=useCallback(()=>{
      console.log(playListName);
      dispatch(addToPlayList(playListName))
    },[playListName])
  return (
    <>
      {modal.isCreatePlaylistModalOpen ? (
        <>
         <ModalWrapper>
              {/*content*/}
              <div className="border-0 rounded-lg shadow-xl shadow-teal-300 relative flex flex-col w-full bg-zinc-900/90 text-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <div className="text-3xl font-semibold text-center flex items-center">
                  Create Playlist
                                    </div>
                
                </div>
                {/*body*/}
                <div className="relative p-6 m-5 flex-auto">
                <TextField value={playListName} handleChange={(e)=>setPlayListName(e.target.value)} placeholder="Enter your username"/>  
                <br/> 
                {/* <SearchBar placeholder="Search music for add into playlist"/>                */}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => dispatch(clearCreatePlaylistModal())}
                  >
                    Close
                  </button>
                  <CustomButton isDisable={playListName.length<4} handleClick={()=>{addPlayList();dispatch(clearCreatePlaylistModal());setPlayListName('')}} color="teal-300" border="true"  btn_name="Create"/>
                </div>
              </div>
              </ModalWrapper>
        </>
      ) : null}
    </>
  );
}