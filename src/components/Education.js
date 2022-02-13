import React from "react";
import styled from "styled-components";

function Education() {
   return (
      <Educations className="experience">
         <div className="exp-container">
            <div className="header-exp">
               <p>Experience</p>
            </div>
            <div className="exp-info">
               <div className="exp-info-1">
                  <div className="info1-con">
                     <p>Frontend Engineer (Remote)</p>
                  </div>
                  <div className="pre-exp">
                     <p>Jul 2021 - Present</p>
                  </div>
               </div>
               <div className="location-1">
                  <p> Selfbook / US - New York</p>
               </div>
               <div className="info-exp">
                  <p>
                     - Developing screens and UI components for the web
                     application using React and Tailwind.
                     <br />- Fixing UI issues and integrating backend APIs with
                     Redux Saga.
                  </p>
               </div>
               <div className="exp-info-1">
                  <div className="info1-con">
                     <p>Frontend Engineer (Remote)</p>
                  </div>
                  <div className="pre-exp">
                     <p>Jul 2021 - Present</p>
                  </div>
               </div>
               <div className="location-1">
                  <p> Selfbook / US - New York</p>
               </div>
               <div className="info-exp">
                  <p>
                     - Developing screens and UI components for the web
                     application using React and Tailwind.
                     <br />- Fixing UI issues and integrating backend APIs with
                     Redux Saga.
                  </p>
               </div>
               <div className="exp-info-1">
                  <div className="info1-con">
                     <p>Frontend Engineer (Remote)</p>
                  </div>
                  <div className="pre-exp">
                     <p>Jul 2021 - Present</p>
                  </div>
               </div>
               <div className="location-1">
                  <p> Selfbook / US - New York</p>
               </div>
               <div className="info-exp">
                  <p>
                     - Developing screens and UI components for the web
                     application using React and Tailwind.
                     <br />- Fixing UI issues and integrating backend APIs with
                     Redux Saga.
                  </p>
               </div>
            </div>
         </div>
      </Educations>
   );
}

export default Education;

const Educations = styled.div`
   background-color: #ffffff;
   width: 100%;
   height: auto;
   display: flex;
   justify-content: center;
   margin-top: 40px;
   margin-bottom: 40px;
   .exp-container {
      width: 85vw;
      height: auto;
      display: flex;
      border-bottom: 1.5px solid #1a1a1a;
   }
   .header-exp {
      width: 200px;
      height: auto;
   }
   .header-exp p {
      color: #1a1a1a;
      font-size: 20px;
      font-weight: 400;
      text-transform: uppercase;
   }
   .exp-info {
      width: 70vw;
      height: auto;
      align-items: center;
   }
   .exp-info-1 {
      width: 70vw;
      height: 40px;
      display: flex;
      justify-content: space-between;
   }
   .info1-con {
      width: auto;
      height: 100%;
   }
   .info1-con p {
      font-size: 20px;
      font-weight: 400;
   }
   .pre-exp {
      width: auto;
      height: 100%;
   }
   .pre-exp p {
      font-size: 18px;
      color: #1a1a1a;
      font-weight: 300;
   }
   .location-1 {
      width: 70vw;
      height: 40px;
   }
   .location-1 p {
      font-size: 18px;
      color: #6cace4;
      font-weight: 300;
   }
   .info-exp {
      width: 70vw;
      margin-bottom: 80px;
   }
   .info-exp p {
      font-size: 18px;
      color: #1a1a1a;
      font-weight: 300;
   }
   /*-------------------------------------------------------------*/
`;
