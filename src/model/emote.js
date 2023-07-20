function Emote({emote}) {
    const images = require.context('../uploads/', true);
    let image = images("./"+emote.name+".png");

    

    return(
        <div className='flex flex-wrap items-center justify-center m-auto h-full w-full'>  
            <img class="object-cover" src={image} alt={emote.name} />
            <p>{emote.name}</p>
        </div>
    );
}

export default Emote;   