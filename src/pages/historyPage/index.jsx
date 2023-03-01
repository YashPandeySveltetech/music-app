import MusicCard from "components/musicCard";
import React from "react";
import { useSelector } from "react-redux";

export const HistoryPage = () => {
const {history} =useSelector((state)=>state.history)
console.log(history,"history");
  return <div className="flex gap-[1.5rem] flex-wrap h-screen ">{history?.map((item)=><MusicCard item={item} music_url={item.music_url} src={item.icon} />)}</div>;
};
