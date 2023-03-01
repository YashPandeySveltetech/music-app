import React from "react";

export default function DropdownComponent({show,setShowDropdown}) {
    return (
      <>
      <div onMouseLeave={()=>setShowDropdown(!show)} className={`w-content text-sm font-semibold text-white p-[0.3rem] text-left rounded  ml-[7.83rem] mt-[9.5rem] z-10 ${show?"absolute":"hidden"} bg-zinc-900/90 `}>
        <div className="p-[0.5rem] hover:bg-zinc-700/60 hover:text-white">Save to Library</div>
        <div className="p-[0.5rem]  hover:bg-zinc-700/60 hover:text-white">Add to Playlist</div>
        <div className="p-[0.5rem]  hover:bg-zinc-700/60 hover:text-white">Add to Favouirte</div>
        <div className="p-[0.5rem]  hover:bg-zinc-700/60 hover:text-white">Delete Album</div>
        <div className="p-[0.5rem]  hover:bg-zinc-700/60 hover:text-white">Play Album</div>
        <div className="p-[0.5rem]  hover:bg-zinc-700/60 hover:text-white">Share Album</div>
      </div>
      </>
    );
}