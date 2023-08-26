import '../css/main.css';
import Emote from "../model/emote";
import EmoteAddButton from "../model/emoteAdd";
import React, { useState, useEffect } from 'react';

function EmotesPage() {
  const [imageNames, setImageNames] = useState([]);
  const [emotes, setEmotes] = useState([]);
  const [pages, setPages] = useState(0);

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
    
    for (let index = 0; index < 100; index++) {
      emotesArray.push(fakeEmoteContainer("fakeName"));
    }

    emotesArray.sort();
    const emotesArraySize = emotesArray.length;
    if(emotesArraySize / 40 > 0){
      setPages(emotesArraySize/40 | 0);
    }

    let trimmedEmotesArray = emotesArray.slice(0,40);

    return () => setEmotes(trimmedEmotesArray);
  });
  
  return (
    <div className="flex align-center text-white flex-wrap">
      <EmoteAddButton />
      <div className="h-[80vh] w-[95vw]  grid grid-cols-10 grid-rows-4 m-auto">
        {
          emotes
        }
      </div>
      <p className='block border border-cyan-400 w-[100%] h-[7%] mt-auto'>{pages}</p>
    </div>
    );
}

function fakeEmoteContainer(emoteName) {
  return(
    <div className="h-[150px] w-[150px] bg-zinc-900 flex flex-wrap items-center justify-center m-auto border border-cyan-800 hover:border-slate-400">
        <div className='flex flex-wrap flex-col items-center justify-center m-auto h-full w-full'>  
            <img style={{
                width: 112, height: 112
            }} class="object-cover" alt={emoteName} />
            <p>{emoteName}</p>
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
