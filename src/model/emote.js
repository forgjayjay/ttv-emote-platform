import rawEmote from "../testing_stuff/muniFlower.png";

function emote() {
    return(
        <div className='m-auto flex align-items justify-center'>  
            <img class="object-cover" src={rawEmote} alt="muniFlower" />;
            <p>muniFlower</p>
        </div>
    );
}

export default emote;   