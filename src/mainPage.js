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

function navBar() {
  return(
    <div className='bg-zinc-900 w-screen h-[10%] flex align-items justify-center p-4'>  
        <ul class="bg-white h-full text-center text-black m-1 flex decoration-2">
          <li class="m-4"><a href="/">home</a></li>
          <li class="m-4"><a href="/emotes">emotes</a></li>
        </ul>
      </div>
  );
}
export default mainPage;
