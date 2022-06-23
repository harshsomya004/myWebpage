import React from "react";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";
import "../styles.css";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
export default function NavBar() {
    return (
        <>
            <div
                className={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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
              background-color: lightcyan;
              color: steelblue;
              padding: 20px;
              border-style: solid;
              border-width: 2px;
              border-radius: 12px;
            `}
                    >
                        Harsh Somya
                    </div>
                </Link>
                <div
                    className={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;
            background-color: transparent;
            padding: 10px;
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
                background-color: lightcyan;
                padding: 10px;
                font-size: 20px;
                border-color: black;
                border-style: solid;
                border-width: 2px;
                border-radius: 12px;
                width: 100px;
                text-align: center;
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
                background-color: lightcyan;
                padding: 10px;
                font-size: 20px;
                border-color: black;
                border-style: solid;
                border-width: 2px;
                border-radius: 12px;
                width: 100px;
                text-align: center;
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
                background-color: lightcyan;
                padding: 10px;
                font-size: 20px;
                border-color: black;
                border-style: solid;
                border-width: 2px;
                border-radius: 12px;
                width: 100px;
                text-align: center;
              `}
                        >
                            Travel
                        </div>
                    </Link>
                </div>
                <div
                    className={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-content: center;
            gap: 25px;
            background-color: lightcyan;
            padding-left: 15px;
            padding-right: 15px;
            padding-top: 5px;
            padding-bottom: 5px;
            border-style: solid;
            border-width: 1px;
            border-color: navy;
            border-radius: 12px;
          `}
                >
                    <BsGithub
                        size={25}
                        color={"cyan"}
                        className={css`
              border-style: solid;
              border-color: steelblue;
              border-width: 0.5px;
              padding: 5px;
              border-radius: 999px;
            `}
                    />
                    <BsInstagram
                        size={25}
                        color={"cyan"}
                        className={css`
              border-style: solid;
              border-color: steelblue;
              border-width: 0.5px;
              padding: 5px;
              border-radius: 12px;
            `}
                    />
                    <BsLinkedin
                        size={25}
                        color={"cyan"}
                        className={css`
              border-style: solid;
              border-color: steelblue;
              border-width: 0.5px;
              padding: 5px;
              border-radius: 999px;
            `}
                        onClick={() => {
                            window.location.replace(
                                "https://www.linkedin.com/in/harsh-somya-004"
                            );
                        }}
                    />
                </div>
            </div>
        </>
    );
}
