import CustomButton from "components/common/customButton";
import Divider from "components/common/divider";
import ModalWrapper from "components/common/modalWrapper";
import TextField from "components/common/textField";
import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearLoginModal } from "redux/reducers/modalsReducer";

export default function LoginModal() {
    const {modal}=useSelector((state)=>state)
    // console.log(state,'state');
    const dispatch=useDispatch()
  return (
    <>
    
      {modal.isLoginModalOpen ? (
        <>
              <ModalWrapper>
              <div className="border-0 rounded-lg shadow-xl shadow-teal-300 relative flex flex-col w-full bg-zinc-900/90 text-white outline-none focus:outline-none">
                {/*header*/}
                <div className=" pl-[2.5rem] flex justify-center p-[1rem] pt-[1rem] cursor-pointer font-bold">Don't have account on DaapMusic?</div>

                <hr/>
                <div className="flex justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <div className="text-3xl font-semibold text-center flex items-center">
                  Welcome to DappMusic.
                                    </div>
                
                </div>
                {/*body*/}
               
                <div className="p-6 m-5 ">
                <TextField placeholder="Enter your username"/>  
                <br/> 
                <TextField placeholder="Enter your password"/>               
                <div className="w-max pl-[1rem]"><CustomButton btn_name="Forgot password?"/></div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 pb-[0px] border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => dispatch(clearLoginModal())}
                  >
                    Close
                  </button>
                  <CustomButton color="teal-300" border="true"  btn_name="Login"/>
                </div>
                <Divider Content="or"/>
<div className="flex px-[2rem] justify-center gap-[3rem]"><CustomButton color={true} border={true} btn_name="Mobile Number"/><CustomButton  color={true} border={true} btn_name="Google Login"/></div>
              {/* </div>
            </div> */}
          </div>
         </ModalWrapper>
           {/*  */}
        </>
      ) : null}
    </>
  );
}