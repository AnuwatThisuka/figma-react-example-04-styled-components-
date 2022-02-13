import React from "react";
import styled from "styled-components";
import imgpro1 from "../assets/image/Sugar Cream.png";
import link from "../assets/image/Vector-1.svg";
import git from "../assets/image/Vector.svg";
function Project() {
   return (
      <Projects>
         <div className="project">
            <div className="project-con">
               <div className="header-con">
                  <p>Featured projects</p>
               </div>
               <div className="project-con-info">
                  <div className="card">
                     <img src={imgpro1} alt="" />
                     <div className="name-pro">
                        <div className="name">
                           <p>IntenseProxy</p>
                        </div>
                        <div className="link">
                           <img src={git} alt="" />
                           <img src={link} alt="" />
                        </div>
                     </div>
                     <div className="info-pro">
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Possimus quos odio labore debitis quis
                           laudantium, hic dicta excepturi quia ex, fugit neque
                           sed sint? Recusandae commodi nemo quod nisi dolorem.
                        </p>
                     </div>
                     <div className="tech">
                        <p>React - Bootstrap - Styled Components</p>
                     </div>
                  </div>
                  <div className="card">
                     <img src={imgpro1} alt="" />
                     <div className="name-pro">
                        <div className="name">
                           <p>IntenseProxy</p>
                        </div>
                        <div className="link">
                           <img src={git} alt="" />
                           <img src={link} alt="" />
                        </div>
                     </div>
                     <div className="info-pro">
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Possimus quos odio labore debitis quis
                           laudantium, hic dicta excepturi quia ex, fugit neque
                           sed sint? Recusandae commodi nemo quod nisi dolorem.
                        </p>
                     </div>
                     <div className="tech">
                        <p>React - Bootstrap - Styled Components</p>
                     </div>
                  </div>
                  <div className="card">
                     <img src={imgpro1} alt="" />
                     <div className="name-pro">
                        <div className="name">
                           <p>IntenseProxy</p>
                        </div>
                        <div className="link">
                           <img src={git} alt="" />
                           <img src={link} alt="" />
                        </div>
                     </div>
                     <div className="info-pro">
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Possimus quos odio labore debitis quis
                           laudantium, hic dicta excepturi quia ex, fugit neque
                           sed sint? Recusandae commodi nemo quod nisi dolorem.
                        </p>
                     </div>
                     <div className="tech">
                        <p>React - Bootstrap - Styled Components</p>
                     </div>
                  </div>
                  <div className="card">
                     <img src={imgpro1} alt="" />
                     <div className="name-pro">
                        <div className="name">
                           <p>IntenseProxy</p>
                        </div>
                        <div className="link">
                           <img src={git} alt="" />
                           <img src={link} alt="" />
                        </div>
                     </div>
                     <div className="info-pro">
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Possimus quos odio labore debitis quis
                           laudantium, hic dicta excepturi quia ex, fugit neque
                           sed sint? Recusandae commodi nemo quod nisi dolorem.
                        </p>
                     </div>
                     <div className="tech">
                        <p>React - Bootstrap - Styled Components</p>
                     </div>
                  </div>
                  <div className="card">
                     <img src={imgpro1} alt="" />
                     <div className="name-pro">
                        <div className="name">
                           <p>IntenseProxy</p>
                        </div>
                        <div className="link">
                           <img src={git} alt="" />
                           <img src={link} alt="" />
                        </div>
                     </div>
                     <div className="info-pro">
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Possimus quos odio labore debitis quis
                           laudantium, hic dicta excepturi quia ex, fugit neque
                           sed sint? Recusandae commodi nemo quod nisi dolorem.
                        </p>
                     </div>
                     <div className="tech">
                        <p>React - Bootstrap - Styled Components</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Projects>
   );
}

export default Project;

const Projects = styled.div`
   background-color: #ffffff;
   width: 100%;
   height: auto;
   justify-content: center;
   align-items: center;
   padding-bottom: 30px;
   .project-con {
      max-width: 85vw;
      margin: 0 auto;
      height: auto;
   }
   .header-con {
      width: 100%;
      height: 60px;
      display: flex;
   }
   .header-con p {
      font-size: 20px;
      color: #1a1a1a;
      text-transform: uppercase;
      font-weight: 400;
   }
   .project-con-info {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 2fr));
      justify-items: center;
      column-gap: 85px;
      row-gap: 85px;
      max-width: 85vw;
      margin: 0 auto;
   }
   .card {
      border-radius: 10px;
      height: auto;
      width: 500px;
      padding: 20px;
   }
   .card img {
      width: 100%;
      height: auto;
      border-radius: 10px;
   }
   .name-pro {
      display: flex;
      width: 100%;
      height: 60px;
      align-items: center;
      justify-content: space-between;
   }
   .name {
      display: flex;
      width: 200px;
      height: 60px;
      align-items: center;
   }
   .name p {
      font-size: 20px;
      color: #111111;
      font-weight: 400px;
      text-transform: uppercase;
   }
   .link {
      display: flex;
      width: 80px;
      height: 60px;
      justify-content: space-between;
   }
   .link img {
      width: 20px;
      height: auto;
   }
   .info-pro {
      width: 100%;
      height: auto;
   }
   .info-pro p {
      font-size: 18px;
      color: #111111;
      font-weight: 300;
   }
   .tech {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
   }
   .tech p {
      font-size: 18px;
      color: #004e93;
      font-weight: 300;
   }
   .card:hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
         rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
      transition: all 0.6s;
   }
`;
