function navBar() {
    return(
      <div className='bg-zinc-900 w-screen h-[7%] flex align-items justify-center'>  
          <ul class="h-full text-center text-white flex align-items justify-center text-xl">
            <li class="hover:bg-zinc-800 hover:border-b h-full w-[7rem] uppercase font-bold"><a class="flex items-center justify-center h-full" href="/">home</a></li>
            <li class="hover:bg-zinc-800 hover:border-b h-full w-[7rem] uppercase font-bold"><a class="flex items-center justify-center h-full" href="/emotes">emotes</a></li>
          </ul>
        </div>
    );
}

export default navBar;