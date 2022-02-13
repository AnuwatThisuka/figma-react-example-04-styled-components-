import React from "react";
import styled from "styled-components";
function Banner() {
   return (
      <Banners styleclassName="banner">
         <div className="banner-con">
            <div className="hello-con">
               <p>Hey, I’m</p>
            </div>
            <div className="user-name">
               <p className="name">Anuwat Thisuka</p>
            </div>
            <div className="about-info">
               <p>
                  I'm a software engineer based in Toronto, Canada and also a
                  communication and journalism student. I enjoy creating things
                  that live on the internet, whether that be websites,
                  applications, or anything in between. I have been freelancing
                  for a year now while studying at the university and I've
                  manage to gain a decent amount of experience and valuable
                  knowledge from all different kinds of fields throughout my
                  projects/work.
               </p>
            </div>
            <div className="btn-say">
               <li>
                  <a href="https://anuwatthisuka.netlify.app/">Say hi --&gt;</a>
               </li>
            </div>
         </div>
      </Banners>
   );
}

export default Banner;

const Banners = styled.div`
   background-color: #ffffff;
   width: 100%;
   height: 85vh;
   display: flex;
   justify-content: center;
   align-items: center;
   .banner-con {
      max-width: 85vw;
      height: 80vh;
      justify-content: center;
      align-items: center;
   }
   .hello-con {
      display: flex;
      width: 300px;
      height: 60px;
      align-items: center;
   }
   .hello-con p {
      font-size: 18px;
      color: #1a1a1a;
      letter-spacing: 2px;
      font-weight: 300;
   }
   .user-name {
      display: flex;
      width: 85vw;
      height: 100px;
      align-items: center;
   }
   .user-name p {
      font-size: 96px;
      font-weight: 500;
      letter-spacing: 2px;
   }
   .name {
      background: linear-gradient(to right, #9845e8, #33d2ff, #dd5789 90%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
   }
   .about-info {
      margin-top: 20px;
      display: flex;
      width: 100%;
      height: auto;
      align-items: center;
   }
   .about-info p {
      font-size: 18px;
      color: #1a1a1a;
      font-weight: 300;
   }
   .btn-say {
      height: 100px;
      width: 50vw;
      display: flex;
      align-items: center;
   }
   .btn-say li {
      height: 40px;
      width: 50vw;
      display: flex;
      align-items: center;
   }
   .btn-say li a {
      font-size: 24px;
      color: #1a1a1a;
      text-decoration: none;
   }
   .btn-say li a:hover {
      background: linear-gradient(to right, #9845e8, #33d2ff, #dd5789 90%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: all 0.5s;
   }
`;
