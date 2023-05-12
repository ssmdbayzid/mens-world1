import { useEffect, useState } from "react";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./pages/Home/Home";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState(true)

  useEffect(()=>{
    const hanndleScroll = ()=>{
      if(window.scrollY === 0)setIsTopOfPage(true);
      if(window.scrollY !== 0)setIsTopOfPage(false);
    }

    window.addEventListener("scroll", hanndleScroll)
    return () => window.removeEventListener("scroll", hanndleScroll)
  },[])

  return (
    <div className="App">
      <Header
      isTopOfPage={isTopOfPage}
      setIsTopOfPage={setIsTopOfPage}
      />
      <Home 
      className="w-5/6"
      />
    <Footer
     className="w-5/6"
    />
    </div>
  );
}

export default App;
