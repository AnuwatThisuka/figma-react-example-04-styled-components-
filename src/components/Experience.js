import React from "react";
import styled from "styled-components";

function Experience() {
   return (
      <Experiences className="experience">
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
      </Experiences>
   );
}

export default Experience;

const Experiences = styled.div`
   background-color: #111111;
   width: 100%;
   height: auto;
   display: flex;
   justify-content: center;
   .exp-container {
      width: 85vw;
      height: auto;
      display: flex;
   }
   .header-exp {
      width: 200px;
      height: auto;
   }
   .header-exp p {
      color: #f0f0f0f0;
      font-size: 20px;
      text-transform: uppercase;
   }
   .exp-info {
      width: 70vw;
   }
   .exp-info-1 {
      width: 70vw;
      height: 40px;
      display: flex;
      justify-content: space-between;
   }
   .exp-info-1 p {
      font-size: 18px;
      color: #f0f0f0f0;
   }
   .location-1 {
      width: 70vw;
      height: 40px;
   }
   .location-1 p {
      font-size: 18px;
      color: #6cace4;
   }
   .info-exp {
      width: 70vw;
      margin-bottom: 80px;
   }
   .info-exp p {
      font-size: 18px;
      color: #f0f0f0f0;
   }
   /*-------------------------------------------------------------*/
`;
