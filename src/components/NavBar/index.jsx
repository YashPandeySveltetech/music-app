import SongIcon from "assets/songIcon";
import CustomButton from "components/common/customButton";
import SearchBar from "components/common/searchBar";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { openLoginModal } from "redux/reducers/modalsReducer";
import "./style.css";

const NavBar = () => {  const dispatch=useDispatch()
  return (
    <div className=""> 
    <SearchBar placeholder="search by name or artist"/>
    <div className="fixed z-[2] py-2 w-full bg-cover bg-[url('https://media.istockphoto.com/id/693317332/photo/black-wall-texture-2.jpg?s=612x612&w=0&k=20&c=cZPhYxnzPPh70W4r2P4QfmZOnggYlZqEkxXXbV0cswQ=')]">
      <div className="flex justify-between text-white bg-cover bg-[url('https://media.istockphoto.com/id/693317332/photo/black-wall-texture-2.jpg?s=612x612&w=0&k=20&c=cZPhYxnzPPh70W4r2P4QfmZOnggYlZqEkxXXbV0cswQ=')]/900   px-[2rem] ">
     
        <div className="navbar-left-content">
          <div className="navbar-menu font-bold text-teal-300"> 
          <Link to="/"><SongIcon color={true} size="4rem"/></Link></div>
          <div className="gap-[2rem] w-full flex">
        <Link to="/"> <CustomButton btn_name="Home"/></Link> 
        <Link to="/history">   <CustomButton btn_name="History"/></Link>

          </div>
        </div>
        {/*  */}
        <div className="flex gap-[2rem]">
          <CustomButton  btn_name="Music Languages"/>
          <CustomButton handleClick={()=>dispatch(openLoginModal())} btn_name="Log In"/>
          <CustomButton btn_name="Sign Up"/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default NavBar;
