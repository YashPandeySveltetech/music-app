import AddIcon from "assets/addIcon";
import AlbumIcon from "assets/albumIcon";
import ArtistIcon from "assets/artistIcon";
import HistoryIcon from "assets/historyIcon";
import MusicNoteListIcon from "assets/musicNoteListIcon";
import PodcastIcon from "assets/podcastIcon";
import SongIcon from "assets/songIcon";
import CustomButton from "components/common/customButton";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openCreatePlaylistModal } from "redux/reducers/modalsReducer";
const SideBar = () => {
  const dispatch=useDispatch()
  const {playList}=useSelector((state)=>state?.playlist)
  let listItems=[{name:"History",route:"/history",id:1,icon:<HistoryIcon size="1.5rem"/>},
  {name:" Songs",route:"/songs",id:2,icon:<SongIcon size="1.5rem"/>},
  {name:"Albums",route:"/albums",id:3,icon:<AlbumIcon size="1.5rem"/>},
  {name:"Podcasts",route:"/prodcasts",id:4,icon:<PodcastIcon size="1.5rem"/>},
  {name:"Artists",route:"/artist",id:5,icon:<ArtistIcon size="1.5rem"/>},
]
useEffect(()=>{
},[playList])

const navigate=useNavigate()

  return  (
  <div className="h-screen bg-cover bg-[url('https://media.istockphoto.com/id/693317332/photo/black-wall-texture-2.jpg?s=612x612&w=0&k=20&c=cZPhYxnzPPh70W4r2P4QfmZOnggYlZqEkxXXbV0cswQ=')] text-white w-64 p-[40px] pb-[9rem] overflow-scroll shadow-lg shadow-cyan-500/50 border-zinc-200 ">
<div className="font-light">LIBRARY</div>
<br/>
  {listItems.map((item)=>
  <div className="pl-[1rem]"><CustomButton handleClick={()=>{navigate(item.route)
  console.log('check click');}} icon={item.icon} btn_name={item.name}/></div>
  )}
  <br/>
  <CustomButton handleClick={()=>dispatch(openCreatePlaylistModal())} color="teal-300" border="true" icon={<AddIcon/>} btn_name="New Playlist"/>
  <div className="font-light">Playlists</div>
  <br/>
  {playList?.map((item)=>
 <div className="pl-[1rem]"> <CustomButton handleClick={()=>{}} icon={<MusicNoteListIcon size="1.5rem"/>} btn_name={item}/></div>
  )}
  </div>)
};

export default SideBar;
