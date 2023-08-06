import '../css/main.css';
import { useEffect, useState } from "react";


function EmoteAddPage() {
  const [imageUrl, setImageUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageName, setImageName] = useState('');

  useEffect(() => {
    if (!selectedFile) {
        setImageUrl(undefined)
        return
    }
    const objectUrl = URL.createObjectURL(selectedFile)
    setImageUrl(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
}, [selectedFile])

  const handleFileChange = async (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleImageNameChange = (event) => {
    setImageName(event.target.value);
  };
  
  const handleUploadClick = async () => {
    if (!selectedFile) {
      alert('Please select an image.');
      return;
    }
    if (!imageName) {
      alert('Please enter a name.');
      return;
    }

    const formData = new FormData();
    formData.append('image-name', imageName);
    formData.append('image', selectedFile);

    try {
      const response = await fetch('http://localhost:3001/upload', {
        method: 'POST',
        body: formData
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong.');
      }
  
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
  };

return (
    <div className='flex w-full h-[93%] items-center p-[1rem] flex-col gap-[1rem]'>
      <div className='w-[30rem] h-[30rem] block p-[1rem] '>
        <label 
          style={{'--image-url': `url(${imageUrl})`}} 
          className='w-full h-full block border border-dashed bg-[image:var(--image-url)] bg-cover' for='image-upload'
        ></label>
        <input id='image-upload' accept="image/*" className='hidden' type="file" onChange={handleFileChange} />
      </div>
      <div className='block border'>
        <input className='text-black w-[20rem] h-[1.5rem]' type="text" value={imageName} onChange={handleImageNameChange} placeholder="Custom Image Name" />
      </div>      
      <div className='block border border-cyan-400 w-[100%] h-[7%] mt-auto'>
        <button className='w-full h-full' onClick={handleUploadClick}>Upload</button>
      </div>
    </div>
  );
}

export default EmoteAddPage;
