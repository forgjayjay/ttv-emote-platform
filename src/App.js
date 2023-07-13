import EmotesPage from './emotesPage';
import MainPage from './mainPage';
import NavBar from './navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='bg-zinc-800 h-screen w-screen text-white'>
      <NavBar />
      <BrowserRouter>       
        <Routes>
          <Route path="/" element={<MainPage />}></Route>       
          <Route path="/emotes" element={<EmotesPage />}></Route>       
        </Routes>     
      </BrowserRouter>
    </div>
  );
}

export default App;