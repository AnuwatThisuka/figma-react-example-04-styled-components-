import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Project from "./components/Project";
function App() {
   return (
      <>
         <Navbar />
         <Banner />
         <Experience />
         <Education />
         <Project />
      </>
   );
}

export default App;
