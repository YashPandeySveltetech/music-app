import MusicCard from "components/musicCard";
import React from "react";
import sideBar from "../../components/sideBar";
import { apiHandler } from "../../services/axios";
import { getUserData } from "../../services/userService";
export const HomePage = () => {
 const handleClick=()=>{
    apiHandler(
      () =>
        getUserData(),
      {
        onSuccess: (data) => {
          // setDetails(data);
          // assetIdRef.current = data?._id;
        },
        final: () => {
          // setDetailsLoading(false);
        },
      }
    );
  }
  const favList=[{music_url:"/musics/besharam.mp3",title:"movie-1",icon:"/movie-1.jfif"},
  {music_url:"/musics/jhoome.mp3",title:"movie-2",icon:"/movie-2.jfif"},
  {music_url:"/musics/besharam.mp3",title:"movie-3",icon:"/movie-3.jfif"},
  {music_url:"/musics/jhoome.mp3",title:"movie-4",icon:"/movie-4.jfif"},
  {music_url:"/musics/maan.mp3",title:"movie-5",icon:"/movie-5.jfif"},
  {music_url:"/musics/besharam.mp3",title:"movie-6",icon:"/movie-6.jfif"},
  {music_url:"/musics/maan.mp3",title:"movie-7",icon:"/movie-7.jfif"},
  {music_url:"/musics/besharam.mp3",title:"movie-2",icon:"/movie-8.jfif"},
  {music_url:"/musics/jhoome.mp3",title:"movie-3",icon:"/movie-9.jfif"},
  {music_url:"/musics/maan.mp3",title:"movie-4",icon:"/movie-10.jfif"},
  {music_url:"/musics/besharam.mp3",title:"movie-5",icon:"/movie-11.jfif"},
  {music_url:"/musics/jhoome.mp3",title:"movie-6",icon:"/movie-12.jfif"},
  {music_url:"/musics/maan.mp3",title:"movie-7",icon:"/movie-13.jfif"},{music_url:"/musics/maan.mp3",title:"movie-1",icon:"/movie-1.jfif"},
  {music_url:"/musics/besharam.mp3",title:"movie-2",icon:"/movie-14.jfif"},
  {music_url:"/musics/jhoome.mp3",title:"movie-3",icon:"/movie-15.jfif"},
  {music_url:"/musics/maan.mp3",title:"movie-4",icon:"/movie-16.jfif"},
  {music_url:"/musics/besharam.mp3",title:"movie-5",icon:"/movie-17.jfif"},
  {music_url:"/musics/maan.mp3",title:"movie-6",icon:"/movie-18.jfif"},
  {music_url:"/musics/maan.mp3",title:"movie-1",icon:"/movie-1.jfif"},
  {music_url:"/musics/besharam.mp3",title:"movie-2",icon:"/movie-8.jfif"},
  {music_url:"/musics/maan.mp3",title:"movie-3",icon:"/movie-9.jfif"},
  {music_url:"/musics/besharam.mp3",title:"movie-4",icon:"/movie-10.jfif"},
  {music_url:"/musics/maan.mp3",title:"movie-5",icon:"/movie-11.jfif"},
  {music_url:"/musics/besharam.mp3",title:"movie-6",icon:"/movie-12.jfif"},
  {music_url:"/musics/jhoome.mp3",title:"movie-7",icon:"/movie-13.jfif"},{music_url:"/musics/maan.mp3",title:"movie-1",icon:"/movie-1.jfif"},
  {music_url:"/musics/maan.mp3",title:"movie-2",icon:"/movie-14.jfif"},
  {music_url:"/musics/maan.mp3",title:"movie-3",icon:"/movie-15.jfif"},
  {music_url:"/musics/besharam.mp3",title:"movie-4",icon:"/movie-16.jfif"},
  {music_url:"/musics/jhoome.mp3",title:"movie-5",icon:"/movie-17.jfif"},
  {music_url:"/musics/maan.mp3",title:"movie-6",icon:"/movie-18.jfif"},
  {music_url:"/musics/jhoome.mp3",title:"movie-7",icon:"/movie-1.jfif"},{music_url:"/musics/jhoome.mp3",title:"movie-1",icon:"/movie-1.jfif"},
  {music_url:"/musics/besharam.mp3",title:"movie-2",icon:"/movie-2.jfif"},
  {music_url:"/musics/jhoome.mp3",title:"movie-3",icon:"/movie-3.jfif"},
  {music_url:"/musics/jhoome.mp3",title:"movie-4",icon:"/movie-4.jfif"},
  {music_url:"/musics/besharam.mp3",title:"movie-5",icon:"/movie-5.jfif"},
  {music_url:"/musics/jhoome.mp3",title:"movie-6",icon:"/movie-6.jfif"},
  {music_url:"/musics/jhoome.mp3",title:"movie-7",icon:"/movie-7.jfif"}]
  return <div className="flex gap-[1.5rem] flex-wrap ">{favList.map((item)=><MusicCard item={item} music_url={item.music_url} src={item.icon} />)}</div>;
};
