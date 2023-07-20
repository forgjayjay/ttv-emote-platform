import '../css/main.css';
import { useState } from "react";


function EmoteAddPage() {
  const [imageUrl, setImageUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageName, setImageName] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleImageNameChange = (event) => {
    setImageName(event.target.value);
  };
  
  const handleUploadClick = async () => {
    console.log(selectedFile, imageName);
    if (!selectedFile) {
      alert('Please select an image.');
      return;
    }
  
    const formData = new FormData();
    formData.append('image-name', imageName);
    formData.append('image', selectedFile);
    console.log(formData);
  
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
      console.log({ data });
      setImageUrl(data.imageUrl);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <input className='text-black' type="text" value={imageName} onChange={handleImageNameChange} placeholder="Custom Image Name" />
      <button onClick={handleUploadClick}>Upload</button>
      {imageUrl}
    </div>
  );
}

export default EmoteAddPage;
