import React from 'react'

function ModalWrapper({children}) {
  return (<>
    <div
    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
  >
    <div className="relative w-[30rem] my-6 mx-auto max-w-3xl ">{children}</div></div>
    <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default ModalWrapper