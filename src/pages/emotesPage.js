import '../css/main.css';
//import rawEmote from "../testing_stuff/muniFlower.png";
import Emote from "../model/emote";
import EmoteAddButton from "../model/emoteAdd";

function emotesPage() {
  return (
    //bg-zinc-200 bg-zinc-100
    <div className="flex align-center text-white flex-wrap">
      <EmoteAddButton />
      <div className="h-[80vh] w-[95vw]  grid grid-cols-10 grid-rows-4 m-auto">
        {populateContainer()}
      </div>
    </div>
    );
}

function populateContainer() {
  let emoteContainerArray = [];
  
  for (let index = 0; index < 40; index++) {
    emoteContainerArray.push(emoteContainer('muniFlower'));
  }

  return emoteContainerArray;
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

export default emotesPage;
