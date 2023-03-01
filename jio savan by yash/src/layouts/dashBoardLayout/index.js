import FavrouiteListModal from "components/favList";
import MusicPlayer from "components/musicPlayer";
import React from "react";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/sideBar";
import "./style.css";
function DashBoardLayout({ children }) {
  return (
    <>
      <NavBar />
<div className=" pt-[4rem] bg-zinc-900  pb-[4rem]"> 
 <div className="fixed"><SideBar /></div> 
<div className="w-screen  p-[2rem] h-full ml-[16rem] triangle-up"><div className="pr-[8rem] w-auto mr-[16rem] text-white">{children}</div></div>
<div className="  "><FavrouiteListModal/>
</div> 
</div>
<div className="fixed right-0 bottom-0 w-full "><MusicPlayer/>
</div> 

    </>
  );
}
export default DashBoardLayout;
