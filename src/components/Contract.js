import React from "react";
import Email from "../assets/image/Email.svg";
import Linkin from "../assets/image/link-in.svg";
import Git from "../assets/image/github.svg";
import styled from "styled-components";
import Upwork from "../assets/image/up.svg";
function Contract() {
   return (
      <Contracts className="contract">
         <div className="contract-container">
            <div className="page-con">
               <p>contact</p>
            </div>
            <div className="link">
               <div className="logo-link">
                  <ul>
                     <li>
                        <img src={Email} alt="" />
                        <a href="#Something">Send An Email</a>
                     </li>
                  </ul>
               </div>
               <div className="logo-link">
                  <ul>
                     <li>
                        <img src={Linkin} alt="" />
                        <a href="#Something">LinkedIn</a>
                     </li>
                  </ul>
               </div>
               <div className="logo-link">
                  <ul>
                     <li>
                        <img src={Upwork} alt="" />
                        <a href="#Something">Up Work</a>
                     </li>
                  </ul>
               </div>
               <div className="logo-link">
                  <ul>
                     <li>
                        <img src={Git} alt="" />
                        <a href="#Something">Github</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </Contracts>
   );
}

export default Contract;

const Contracts = styled.div`
   width: 100%;
   height: auto;
   align-items: center;
   padding-top: 30px;
   padding-bottom: 80px;
   .contract-container {
      max-width: 85vw;
      height: auto;
      margin: 0 auto;
      justify-content: space-between;
      display: flex;
   }
   .page-con {
      width: 200px;
      height: 100%;
      display: flex;
   }
   .page-con p {
      font-size: 20px;
      color: #1a1a1a;
      font-weight: 400;
      text-transform: uppercase;
   }
   .link {
      display: flex;
      width: 900px;
      height: 40px;
      justify-content: space-between;
      align-items: center;
   }
   .logo-link {
      width: 200px;
      height: 100%;

      justify-content: center;
      display: flex;
   }
   .logo-link:hover {
      border-radius: 10px;
      border: 1px solid #c6c6c6;
      transition: all 0.6s;
   }
   .link ul {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 160px;
      height: 100%;
   }
   .link ul li {
      width: 160px;
      display: flex;
      align-items: center;
      justify-content: center;
   }
   .link ul li img {
      width: 20px;
      height: auto;
      padding-right: 12px;
   }
   .link ul li a {
      font-size: 18px;
      color: #1a1a1a;
      font-weight: 300;
      text-decoration: none;
   }
`;
