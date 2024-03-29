import React from "react";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import "../styles.css";
export default function NavBar() {
  return (
    <>
      <div
        className={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <div
          className={css`
            z-index: 50;
          `}
        >
          <Link
            to="/"
            className={css`
              text-decoration: none;
            `}
          >
            <div
              className={css`
                font-family: monospace;
                font-size: 40px;
                font-weight: 700;
                text-align: center;
                color: black;
                padding: 12px;
                margin-top: 10px;
                margin-left: 10px;
                font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                &:hover {
                  color: #006bb8;
                }
              `}
            >
              HARSH SOMYA
            </div>
          </Link>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-content: center;
              gap: 25px;
              background-color: transparent;
              padding-left: 15px;
              padding-right: 15px;
              padding-top: 5px;
              padding-bottom: 5px;
            `}
          >
            <div
              onClick={() => {
                window.open("https://github.com/harshsomya004");
              }}
            >
              <BsGithub
                size={25}
                color={"black"}
                className={css`
                  border-style: solid;
                  border-color: black;
                  border-width: 0.5px;
                  padding: 5px;
                  border-radius: 999px;
                  opacity: 1.5;
                  &:hover {
                    width: 50px;
                    height: 50px;
                  }
                `}
              />
            </div>
            <div
              onClick={() => {
                window.open("https://www.instagram.com/__harsh_._04/");
              }}
            >
              <BsInstagram
                size={25}
                color={"#CC99FF"}
                className={css`
                  border-style: solid;
                  border-color: #cc99ff;
                  border-width: 0.5px;
                  padding: 5px;
                  border-radius: 12px;
                  opacity: 1.5;
                  &:hover {
                    width: 50px;
                    height: 50px;
                  }
                `}
              />
            </div>
            <div
              onClick={() => {
                window.open("https://www.linkedin.com/in/harsh-somya-004");
              }}
            >
              <BsLinkedin
                size={25}
                color={"blue"}
                className={css`
                  border-style: solid;
                  border-color: blue;
                  border-width: 0.5px;
                  padding: 5px;
                  border-radius: 999px;
                  opacity: 1.5;
                  &:hover {
                    width: 50px;
                    height: 50px;
                  }
                `}
              />
            </div>
          </div>
        </div>

        <div
          className={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;
            background-color: transparent;
            padding: 12px;
            align-self: flex-start;
            margin-top: 17px;
            z-index: 100;
          `}
        >
          <Link
            to="/about"
            className={css`
              text-decoration: none;
            `}
          >
            <div
              className={css`
                font-family: monospace;
                font-weight: bold;
                padding: 5px;
                color: black;
                padding: 10px;
                font-size: 25px;
                border-color: black;
                border-style: solid;
                border-width: 2px;
                border-radius: 12px;
                text-align: center;
                width: 120px;
                &:hover {
                  background: linear-gradient(to right, #006bb8, #fdba21);
                  color: whitesmoke;
                }
              `}
            >
              About
            </div>
          </Link>

          <Link
            to="/projects"
            className={css`
              text-decoration: none;
            `}
          >
            <div
              className={css`
                font-family: monospace;
                font-weight: bold;
                padding: 5px;
                color: black;
                padding: 10px;
                font-size: 25px;
                border-color: black;
                border-style: solid;
                border-width: 2px;
                border-radius: 12px;
                width: 140px;
                text-align: center;
                &:hover {
                  background: linear-gradient(to right, #006bb8, #fdba21);
                  color: whitesmoke;
                }
              `}
            >
              Projects
            </div>
          </Link>
          <Link
            to="/travel"
            className={css`
              text-decoration: none;
            `}
          >
            <div
              className={css`
                font-family: monospace;
                font-weight: bold;
                padding: 5px;
                color: black;
                padding: 10px;
                font-size: 25px;
                border-color: black;
                border-style: solid;
                border-width: 2px;
                border-radius: 12px;
                width: 120px;
                text-align: center;
                &:hover {
                  background: linear-gradient(to right, #006bb8, #fdba21);
                  color: whitesmoke;
                }
              `}
            >
              Travel
            </div>
          </Link>
          <Link
            to="/blogs"
            className={css`
              text-decoration: none;
            `}
          >
            <div
              className={css`
                font-family: monospace;
                font-weight: bold;
                padding: 5px;
                color: black;
                padding: 10px;
                font-size: 25px;
                border-color: black;
                border-style: solid;
                border-width: 2px;
                border-radius: 12px;
                width: 120px;
                text-align: center;
                &:hover {
                  background: linear-gradient(to right, #006bb8, #fdba21);
                  color: whitesmoke;
                }
              `}
            >
              Blogs
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
