import '../css/main.css';
import Emote from './emote';
import rawEmote from "../testing_stuff/muniFlower.png";

function emotesPage() {
  return (
    //bg-zinc-200 bg-zinc-100
    <div class="flex align-center p-12 text-white">
      <div class="h-[80vh] w-[95vw]  grid grid-cols-10 grid-rows-4">
        {populateContainer()}
      </div>
    </div>
    );
}

function populateContainer() {
  let emoteContainerArray = [];
  
  for (let index = 0; index < 40; index++) {
    emoteContainerArray.push(emoteContainer());
  }

  return emoteContainerArray;
}

function emoteContainer() {
  return(
    <div class="h-[150px] w-[150px] bg-zinc-900 flex flex-wrap items-center justify-center m-auto border border-cyan-800 hover:border-slate-400">
            <img class="object-cover" src={rawEmote} alt="muniFlower" />
            <p>muniFlower</p> 
    </div>
  );
}

export default emotesPage;
