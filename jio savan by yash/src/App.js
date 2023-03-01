import AppRoute from "./routes/rootRouting";
import { BrowserRouter } from "react-router-dom";
import LoginModal from "components/Modals/modal/loginModal";
import CreatePlaylistModal from "components/Modals/modal/createPlaylistModal";
import ConfirmationModal from "components/Modals/modal/confirmationModal";
import SuccessModal from "components/Modals/modal/successModal";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect, useState } from "react";
import MusicIcon from "assets/musicIcon";
// ..


function App() {
  const [loader,setLoader]=useState(true)
  useEffect(()=>{AOS.init();
    setTimeout(()=>setLoader(false),1000)
  },[])
  return (
    <div>
     {loader?<div style={{marginTop:"16rem"}} className="text-teal-300 flex justify-center "><img  src="/716.svg"/></div> :<><LoginModal/>
      {/* <CreatePlaylistModal/> */}
      {/* <ConfirmationModal/> */}
      <SuccessModal/>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter></>}
    </div>
  );
}

export default App;
