function Emote({emote}) {
    const images = require.context('../uploads/', true);
    let image = images("./"+emote.name);

    const removeFileExtension = (fileName) => {
        const lastDotIndex = fileName.lastIndexOf('.');
        if (lastDotIndex !== -1) {
          return fileName.substring(0, lastDotIndex);
        }
        return fileName;
      };
    return(
        <div className='flex flex-wrap flex-col items-center justify-center m-auto h-full w-full'>  
            <img style={{
                width: 112, height: 112
            }} class="object-cover" src={image} alt={emote.name} />
            <p>{removeFileExtension(emote.name)}</p>
        </div>
    );
}

export default Emote;   