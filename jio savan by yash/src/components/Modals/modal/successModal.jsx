import SuccessIcon from "assets/successIcon";
import CustomButton from "components/common/customButton";
import ModalWrapper from "components/common/modalWrapper";
import SearchBar from "components/common/searchBar";
import TextField from "components/common/textField";
import React, { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCreatePlaylistModal } from "redux/reducers/modalsReducer";

export default function SuccessModal() {
    const {modal}=useSelector((state)=>state)
    const dispatch=useDispatch()
    useEffect(
        () => {
          let timer1 = setTimeout(() => dispatch(clearCreatePlaylistModal()), 5 * 1000);
          return () => {
            clearTimeout(timer1);
          };
        },
      
        [modal.isCreatePlaylistModalOpen]
      );

  return (
    <>
    
      {modal.isCreatePlaylistModalOpen ? (
        <>
        <ModalWrapper>
              {/*content*/}
              <div className="border-0 rounded-lg shadow-md shadow-teal-300 relative flex flex-col w-full bg-zinc-900/90 text-white outline-none focus:outline-none">
                {/*header*/}
               
                {/*body*/}
             <div className="flex justify-center text-teal-300 p-[2rem]"> <SuccessIcon className="" size="5rem"/>
            
             </div>  
             <div className="text-center text-xl font-semibold  p-[2rem] pt-0">Success!</div>
               {/* footer */}
              </div>
        </ModalWrapper>
        </>
      ) : null}
    </>
  );
}
