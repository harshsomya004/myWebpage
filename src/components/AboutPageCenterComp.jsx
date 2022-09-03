import React from "react";
import { css } from "@emotion/css";
import ProfileImg from "../Images/ProfileImg.jpg";

export default function AboutPageCenterComp() {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        text-align: center;
      `}
    >
      <div
        className={css`
          font-size: 35px;
          font-weight: bold;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          padding: 12px;
          color: #006bb8;
        `}
      >
        {" "}
        About Me
      </div>
      <img
        src={ProfileImg}
        alt="myImage.png"
        className={css`
          width: 230px;
          height: 307px;
          display: flex;
          justify-content: center;
          align-self: center;
        `}
      />
      <p
        className={css`
          font-size: 20px;
          margin-left: 100px;
          margin-right: 100px;
          margin-top: 20px;
          margin-bottom: 5px;
          font-family: "Times New Roman", Times, serif;
          background: -webkit-linear-gradient(135deg, #1f2421, #216869);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        `}
      >
        Hi there! Myself Harsh Somya. I belong to District Hamirpur of Himachal
        Pradesh, India. I did my schooling from JNV Hamirpur and by coincidence
        and little effort did my graduation from NIT Hamirpur. I am a person who
        is Highly Passionate about Software Development and Problem Solving.
        Learning is a continious process but I grew my interest in Frontend
        Development with time. I am into learning C++ from my senior secondary
        years of schooling where i eventually learned and grew my interest in
        software Development. Over the time it became a part and parcel of my
        life and while learning it i got to feel it's power to impact ones life.
      </p>
      <div
        className={css`
          font-size: 25px;
          font-weight: bold;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          padding: 5px;
          color: #006bb8;
        `}
      >
        Interests
      </div>
      <p
        className={css`
          font-size: 20px;
          margin-left: 100px;
          margin-right: 100px;
          margin-top: 5px;
          margin-bottom: 5px;
          font-family: "Times New Roman", Times, serif;
          background: -webkit-linear-gradient(135deg, #1f2421, #216869);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        `}
      >
        Well, like everyone my interests also changes with time and people but
        there are few which remains the same. First of all I like to travel a
        lot and I often do it as well. You may refer to the travel page at the
        top to see more of my highlightes there. Second one maybe called as
        Playing Basketball. I don't want brag but I played it at national level
        and repesented Himachal Pradesh(My Home State) twice at that level.
        Third one maybe and surely sleeping(Like most of people my age!). Other
        than that i like things other that i don't like(Best defination i can
        come up with!) for example riding bike or driving car or going on a late
        night drive with friends etc.... etc....
      </p>
      <div
        className={css`
          font-size: 25px;
          font-weight: bold;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          padding: 5px;
          color: #006bb8;
        `}
      >
        Contact Details
      </div>
      <p
        className={css`
          font-size: 20px;
          margin-left: 100px;
          margin-right: 100px;
          margin-top: 20px;
          margin-bottom: 5px;
          color: #006bb8;
          font-family: "Times New Roman", Times, serif;
        `}
      >
        Mob. No. - +91-9805821822
      </p>
      <p
        className={css`
          font-size: 20px;
          margin-left: 100px;
          margin-right: 100px;
          margin-top: 5px;
          margin-bottom: 50px;
          color: #006bb8;
          font-family: "Times New Roman", Times, serif;
        `}
      >
        Email ID - 183048@nith.ac.in / madsombody@gmail.com
      </p>
    </div>
  );
}
