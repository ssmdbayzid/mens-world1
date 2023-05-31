import { useEffect, useState } from "react";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./pages/Home/Home";
import Purchase from "./pages/Purchase/Purchase";
import Routers from "./Routers/Routers";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {  const [isTopOfPage, setIsTopOfPage] = useState(true)

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
      <div>
        <Routers/>
      </div>
    <Footer
     className="w-5/6"
    />

    <ToastContainer />
    </div>
  );
}

export default App;


   /*    <Home 
      className="w-5/6"
      />
      <Purchase 
      className="w-5/6"
      /> 

      */