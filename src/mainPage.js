import './css/main-page.css';
import Emotes from "./emotes";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function mainPage() {
  return (
    <div className='bg-zinc-800 h-screen w-screen text-white'>
      {navBar()}
      <BrowserRouter>       
        <Routes>
          <Route path="/emotes" element={<Emotes />}></Route>       
        </Routes>     
      </BrowserRouter>
    </div>
  );
}



//TODO
//Remake links as buttons
function navBar() {
  return(
    <div className='bg-zinc-900 w-screen h-[10%] flex align-items justify-center'>  
        <ul class="h-full text-center text-white flex align-items justify-center text-xl align-middle">
          <li class=" hover:bg-zinc-800 h-full w-[7rem] uppercase font-bold"><a class="m-4 h-full w-[6rem]" href="/">home</a></li>
          <li class=" hover:bg-zinc-800 h-full w-[7rem] uppercase font-bold"><a class="m-4 h-full w-[6rem]" href="/emotes">emotes</a></li>
        </ul>
      </div>
  );
}
export default mainPage;
