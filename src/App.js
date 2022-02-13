import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Project from "./components/Project";
import Contract from "./components/Contract";
import Banner1 from "./components/Banner-1";

function App() {
   return (
      <>
         <Navbar />
         <Banner1 />
         <Experience />
         <Education />
         <Project />
         <Contract />
      </>
   );
}

export default App;
