import {RouterProvider } from "react-router";
import router from "../router/router"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 


function App() {
   useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    
   <>
   <RouterProvider router={router}></RouterProvider>
   </>
  )
}

export default App
