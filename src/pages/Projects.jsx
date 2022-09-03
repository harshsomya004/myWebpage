import React from "react";
import { css } from "@emotion/css";
import NavBar from "../components/NavBar";
import MainAnimation from "../components/NavBarBackground/MainAnimation";
import ProjectDisplayBlock from "../components/ProjectDisplayBlock.jsx";

export default function Projects() {
  let projDesp = {
    todo:
      "To-Do App project is one my Inital Level Project to learn the implemntaion of React in Front-End Development. This app contains the basic functionality of adding, deleting of tasks.",
    NewsLetter:
      "It was the project for learning the responsivness of the React Pages and also to learn the various libraries of CSS. This is a sample newslatter from a comnay to it's email subscribers.",
    Website:
      "This special project was always my dream to make my personal website. It is made using reactjs and @emotion/css on Codesandbox. It contains 5 pages which are Main page, Projects, Blogs, Travel, and About. ",
    Game:
      "This project is a tic-Tac-Toe game with the help of react. This was created while i was learning the basics of JavaScript and it's implementation in React. This project is perfect implementaion of Logic building and furthur using it in your Development. ",
    CoinBase:
      "This project was creation of full working front-end side of an cryto-exchage website. This was created using react and its made mostly using @emotin/css and Material UI library. It contains all the basic features of an website as required by users."
  };

  return (
    <>
      <NavBar />
      <h1
        className={css`
          flex: 1;
          font-size: 35px;
          font-weight: bold;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          padding: 12px;
          color: #006bb8;
          justify-content: center;
          text-align: center;
        `}
      >
        Projects
      </h1>

      <ProjectDisplayBlock
        projectName={"Personal Website Using React"}
        color={"blue"}
        projectLink={"https://github.com/harshsomya004/myWebpage"}
        projectDesp={projDesp.Website}
        timelineCount={5} //mimimum 2
        content1={"Initial Structure and Design Finalziation"}
        content1date={"2022-06-10"}
        content2={"Added Main Screen and made Navbar component"}
        content2date={"2022-06-23"}
        content3={"Added About Page and Improvised over all desgining"}
        content3date={"2022-07-25"}
        content4={"Added blog page adn added animations to the website"}
        content4date={"2022-08-17"}
        content5={"Added Project Page and Added various projects to it."}
        content5date={"2022-09-03"}
      />
      <ProjectDisplayBlock
        projectName={"Crpto purchase Website template"}
        color={"red"}
        projectLink={"https://github.com/harshsomya004/CoinCard-Sample-WebPage"}
        projectDesp={projDesp.CoinBase}
        timelineCount={5} //mimimum 2
        content1={
          "Initial commit with Backgrounnd formation and NavBar component Formation"
        }
        content1date={"2022-07-10"}
        content2={"Added bottomComponent to website "}
        content2date={"2022-07-16"}
        content3={"Added FAQ component and About Component"}
        content3date={"2022-07-27"}
        content4={"Added Review component and Payment Module Component"}
        content4date={"2022-07-30"}
        content5={
          "Optimized overall struture and added multiple features along with travel feature across the website "
        }
        content5date={"2022-08-05"}
      />

      <ProjectDisplayBlock
        projectName={"Tic-Tac-Toe Game with React"}
        color={"green"}
        projectLink={
          "https://github.com/harshsomya004/Tic-Tac-Toe-Using-ReactJS"
        }
        projectDesp={projDesp.Game}
        timelineCount={3} //mimimum 2
        content1={
          "Initial commit for Logic and Structure using javascript and added various components as well"
        }
        content1date={"2021-12-11"}
        content2={"Added winner selection logic"}
        content2date={"2021-12-26"}
        content3={"Added CSS to the Game"}
        content3date={"2021-12-30"}
      />

      <ProjectDisplayBlock
        projectName={"To-Do List App"}
        color={"#704E2E"}
        projectLink={"https://github.com/harshsomya004/To-Do-app-with-ReactJS"}
        projectDesp={projDesp.todo}
        timelineCount={4} //mimimum 2
        content1={"Initial commit for Logic and Structure"}
        content1date={"2021-11-15"}
        content2={"Added Deletion Feature along with done feature"}
        content2date={"2021-11-20"}
        content3={"Added CSS and Designing to the App"}
        content3date={"2021-12-14"}
        content4={
          "Added background images and improvised overall structure of app"
        }
        content4date={"2021-12-28"}
      />

      <ProjectDisplayBlock
        projectName={"NewsLetter Template with ReactJS"}
        color={"#A997DF"}
        projectLink={
          "https://github.com/harshsomya004/NewsLetter-Template-Using-ReactJS-Project"
        }
        projectDesp={projDesp.NewsLetter}
        timelineCount={3} //mimimum 2
        content1={"Initial Structure Using Sample desgin"}
        content1date={"2021-09-10"}
        content2={"Added various components using React Functions"}
        content2date={"2021-09-29"}
        content3={"Final Optimization"}
        content3date={"2021-09-30"}
      />

      <MainAnimation />
    </>
  );
}
