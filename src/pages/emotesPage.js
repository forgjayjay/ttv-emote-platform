import '../css/main.css';
import Emote from "../model/emote";
import EmoteAddButton from "../model/emoteAdd";
import React, { useState, useEffect } from 'react';

function EmotesPage() {
  const [imageNames, setImageNames] = useState([]);
  const [emotes, setEmotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/images')
      .then(response => response.json())
      .then(data => setImageNames(data))
      .catch(error => console.error('Error fetching images:', error));
  }, []);
  
  useEffect(()=>{
    if (imageNames===[]) {
      return
    }
    let emotesArray=[];
    imageNames.map((imageName)=>{
      emotesArray.push(emoteContainer(imageName));
    });
    return () => setEmotes(emotesArray);
  });
  
  return (
    <div className="flex align-center text-white flex-wrap">
      <EmoteAddButton />
      <div className="h-[80vh] w-[95vw]  grid grid-cols-10 grid-rows-4 m-auto">
        {
          emotes
        }
      </div>
    </div>
    );
}

function emoteContainer(emoteName) {
  return(
    <div className="h-[150px] w-[150px] bg-zinc-900 flex flex-wrap items-center justify-center m-auto border border-cyan-800 hover:border-slate-400">
      <Emote 
        emote={
          {name: emoteName}
        }
      />
    </div>
  );
}

export default EmotesPage;
