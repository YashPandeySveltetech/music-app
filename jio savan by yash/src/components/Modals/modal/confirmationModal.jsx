import ConfirmationIcon from "assets/confirmationIcon";
import UnLikeIcon from "assets/unLikeIcon";
import CustomButton from "components/common/customButton";
import ModalWrapper from "components/common/modalWrapper";
import React from "react";

export default function ConfirmationModal({open=false,type="delete"}) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
     
      {false ? (
        <>
          <ModalWrapper>
              {/*content*/}
              <div className="border-0 rounded-xl shadow-md relative flex flex-col w-full bg-zinc-900/90 text-white outline-none focus:outline-none">
                {/*header*/}
               
                {/*body*/}
                <div className="relative p-6 flex justify-center text-red-700">
               <ConfirmationIcon size="3rem"/>
                </div>
                <div className="flex justify-center text-[1.6rem] font-semibold p-[2rem] pt-0">Are you sure?</div>
                <div className="flex justify-center text-[1.2rem] text-zinc-600 font p-[2rem] pt-0">Are you sure you want to {type} this?</div>

                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                <CustomButton color={true} border={true} btn_name={type}/>
                </div>
              </div>
          </ModalWrapper>
        </>
      ) : null}
    </>
  );
}