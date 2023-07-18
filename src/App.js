import MainPage from './pages/mainPage';
import EmotesPage from './pages/emotesPage';
import EmoteAddPage from './pages/emoteAddPage';
import NavBar from './model/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='bg-zinc-800 h-screen w-screen text-white'>
      <NavBar />
      <BrowserRouter>       
        <Routes>
          <Route path="/" element={<MainPage />}></Route>       
          <Route path="/emotes" element={<EmotesPage />}></Route>    
          <Route path="/add-emote" element={<EmoteAddPage />}></Route>    
        </Routes>     
      </BrowserRouter>
    </div>
  );
}

export default App;