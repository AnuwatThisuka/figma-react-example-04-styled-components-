import React from "react";
import styled from "styled-components";
function Banner1() {
   return (
      <Banner className="banner">
         <div className="container">
            <div className="banner-con">
               <div className="hello-con">
                  <div className="hello-info">
                     <p>Hey, I’m</p>
                  </div>
               </div>
               <div className="name">
                  <div className="name-con">
                     <p>Anuwat Thisuka</p>
                  </div>
               </div>
               <div className="username-con">
                  <div className="username-info">
                     <p>
                        I'm a software engineer based in Toronto, Canada and
                        also a communication and journalism student. I enjoy
                        creating things that live on the internet, whether that
                        be websites, applications, or anything in between. I
                        have been freelancing for a year now while studying at
                        the university and I've manage to gain a decent amount
                        of experience and valuable knowledge from all different
                        kinds of fields throughout my projects/work.
                     </p>
                  </div>
               </div>
               <div className="say-btn">
                  <div className="btn-say-con">
                     <li>
                        <a href="https://anuwatthisuka.netlify.app/">
                           Say hi --&gt;
                        </a>
                     </li>
                  </div>
               </div>
            </div>
         </div>
      </Banner>
   );
}

export default Banner1;

const Banner = styled.div`
   height: 500px;
   background-color: #ffffff;
   display: flex;
   .container {
      max-width: 85vw;
      height: 500px;
      margin: 0 auto;
      display: block;
   }
   .banner-con {
      height: 500px;
      align-items: center;
      display: grid;
      place-content: center;
   }
   .hello-con {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
   }
   .hello-con p {
      font-size: 18px;
      color: #1a1a1a;
      font-weight: 200;
   }
   .name {
      width: 100%;
      height: 100px;
   }
   .name-con {
      display: flex;
      height: 100%;
      width: 100%;
      align-items: center;
   }
   .name-con p {
      font-size: 96px;
      font-weight: 500;
      letter-spacing: 2px;
      background: linear-gradient(to right, #9845e8, #33d2ff, #dd5789 90%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
   }

   .username-con {
      width: 100%;
      height: 150px;
   }
   .username-info {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
   }
   .username-info p {
      font-size: 18px;
      color: #1a1a1a;
      font-weight: 200;
   }
   .say-btn {
      width: 100%;
      height: 80px;
   }
   .btn-say-con {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
   }
   .btn-say-con li {
      list-style-type: none;
   }
   .btn-say-con li a {
      font-size: 24px;
      font-weight: 300;
      color: #1a1a1a;
      text-decoration: none;
   }
   @media screen and (max-width: 768px) {
      .banner-con {
         display: block;
      }
      .name-con {
         display: block;
         font-size: calc(1rem + ((1vw - 7.68px) * 0.6944));
         min-height: 0vw;
      }
   }
`;
