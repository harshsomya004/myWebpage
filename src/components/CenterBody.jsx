import React from "react";
import { css } from "@emotion/css";
import { HiOutlineLightBulb } from "react-icons/hi";

export default function CenterBody() {
  const recentProjects = [
    {
      name: "Tic Tac Toe Using React.js",
      link: "https://github.com/harshsomya004/Tic-Tac-Toe-Using-ReactJS",
      monthAndYear: "Feb,2022"
    },
    {
      name: "Responsive Newsletter Template Using React.js",
      link:
        "https://github.com/harshsomya004/NewsLetter-Template-Using-ReactJS-Project",
      monthAndYear: "Jan,2022"
    },
    {
      name: "To-Do App Using React.js",
      link: "https://github.com/harshsomya004/To-Do-app-with-ReactJS",
      monthAndYear: "Feb,2022"
    },
    {
      name: "HR Managment Project Using HTML,CSS, JavaScript",
      link: "https://github.com/harshsomya004/HR-Management-Project",
      monthAndYear: "Dec,2021"
    }
  ];

  const softSkills = [
    "Frontend Development",
    "React Native",
    "React JS",
    "JavaScript",
    "DSA",
    "C++",
    "RestAPI",
    "Node.js",
    "HTML",
    "CSS",
    "MATLAB",
    "Simulink"
  ];
  return (
    <>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          background-color: transparent;
          margin-left: 40px;
          margin-right: 40px;
          margin-top: 10px;
          margin-bottom: 10px;
          font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
            sans-serif;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-content: center;
            text-align: center;
            margin-top: 5px;
            margin-bottom: 7.5px;
            font-weight: bold;
            font-size: 35px;
          `}
        >
          <HiOutlineLightBulb />
          Soft Skills
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-content: center;
            text-align: center;
          `}
        >
          {softSkills.map((item, index) => {
            return (
              <>
                <div
                  className={css`
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-content: center;
                    margin: 10px;
                    border-style: solid;
                    border-width: 1.5px;
                    font-weight: bold;
                    border-color: black;
                    text-align: center;
                    padding: 10px;
                    color: steelblue;
                    border-radius: 12px;
                    background-color: whitesmoke;
                  `}
                >
                  {item}
                </div>
              </>
            );
          })}
        </div>
      </div>
      {/* <div
        className={css`
          height: 500px;
          width: 500px;
          margin-left: auto;
          margin-right: auto;
        `}
      >
        <TravelerEffect />
      </div> */}
      {/* <div>
                {recentProjects.map((item, index) => {
                    return (
                        <>
                            <div
                                className={css`
                  margin-left: 40px;
                  margin-right: 40px;
                  margin-top: 10px;
                  margin-bottom: 10px;
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  align-content: center;
                  text-align: center;
                  background-color: lightcyan;
                  border-style: solid;
                  border-color: steelblue;
                  border-width: 2px;
                `}
                            >
                                <div
                                    className={css`
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-content: center;
                    text-align: center;
                  `}
                                >
                                    <div>{item.name}</div>
                                    <div>{item.monthAndYear}</div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div> */}
    </>
  );
}
