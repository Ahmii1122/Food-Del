import Navbar from "@/scenes/Navbar"
import Home from "@/scenes/Home"
import { useEffect, useState } from "react"
import { SelectedPage } from "@/Shared/types"


function App() {
  const [selectedPage,setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage,setIsTopOfPage]= useState<boolean>(true);
  useEffect(()=>{
    const handlescroll = ()=>{
      if(window.scrollY === 0)
      {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if(window.scrollY !== 0)
      {
        setIsTopOfPage(false)
      }
    }
    window.addEventListener("scroll",handlescroll);
    return ()=>window.removeEventListener("scroll",handlescroll);
  },[])
  

  return (
      <div className='app bg-gray-20'>
     <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage}/>
      </div>
      
  )
}

export default App
