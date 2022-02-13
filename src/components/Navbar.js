import React from "react";
import styled from "styled-components";

function Navbar() {
   return (
      <Containers className="navbar">
         <div className="navbar-con">
            <div className="navbarlogo">
               <a href="#home">AT.</a>
            </div>
            <Menulink className="menu">
               <li className="menu-con">
                  <a href="#somthing">Project</a>
               </li>
               <li className="menu-con">
                  <a href="#somthing">Resume</a>
               </li>
               <li className="menu-con">
                  <a href="#somthing">Contract</a>
               </li>
            </Menulink>
         </div>
      </Containers>
   );
}

export default Navbar;

const Containers = styled.div`
   background-color: #ffffff;
   width: 100%;
   height: 90px;
   display: flex;
   justify-content: center;
   align-items: center;
   .navbar-con {
      width: 85vw;
      height: 80px;
      align-items: center;
      display: flex;
      justify-content: space-between;
   }
   .navbarlogo {
      display: flex;
      align-items: center;
      width: 200px;
      height: 80px;
   }
   .navbarlogo a {
      font-size: 30px;
      font-weight: 200;
      color: #1a1a1a;
      text-decoration: none;
   }
`;

const Menulink = styled.div`
   width: 350px;
   height: 70px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   .menu-con {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      width: auto;
   }
   .menu-con a {
      font-size: 18px;
      font-weight: 200;
      color: #1a1a1a;
      text-decoration: none;
   }
   .menu-con a:hover {
      background: linear-gradient(to right, #9845e8, #33d2ff, #dd5789 94%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: all 1 ease;
   }
`;
