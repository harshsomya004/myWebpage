import React from "react";
import { css } from "@emotion/css";
import { Timeline } from "antd";
import { BsGithub } from "react-icons/bs";

export default function ProjectDisplayBlock(props) {
  return (
    <>
      <div
        className={css`
          flex: 1;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-content: center;
          margin-top: 40px;
          gap: 1in;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-content: flex-start;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-content: center;
            `}
          >
            <div
              className={css`
                font-size: 22px;
                font-weight: bold;
                font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                color: #71797e;
              `}
            >
              {props.projectName}
            </div>
            <div
              onClick={() => {
                window.open(props.projectLink);
              }}
            >
              <BsGithub
                size={22}
                color={"black"}
                className={css`
                  border-radius: 999px;
                  opacity: 1.5;
                  margin-top: 8px;
                  margin-left: 10px;
                `}
              />
            </div>
          </div>
          <div
            className={css`
              max-width: 400px;
              margin-top: 8px;
              text-align: center;
            `}
          >
            {props.projectDesp}
          </div>
        </div>
        <Timeline>
          <Timeline.Item color={props.color}>
            <>
              <div
                className={css`
                  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                  font-size: 18px;
                  color: #006bb8;
                  max-width: 400px;
                  text-align: center;
                `}
              >
                {props.content1}
              </div>
              <div
                className={css`
                  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                  font-size: 16px;
                  color: #71797e;
                  max-width: 400px;
                  text-align: center;
                `}
              >
                {props.content1date}
              </div>
            </>
          </Timeline.Item>
          <Timeline.Item color={props.color}>
            <>
              <div
                className={css`
                  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                  font-size: 18px;
                  color: #006bb8;
                  max-width: 400px;
                  text-align: center;
                `}
              >
                {props.content2}
              </div>
              <div
                className={css`
                  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                  font-size: 16px;
                  color: #71797e;
                  max-width: 400px;
                  text-align: center;
                `}
              >
                {props.content2date}
              </div>
            </>
          </Timeline.Item>
          {props.timelineCount >= 3 ? (
            <Timeline.Item color={props.color}>
              <>
                <div
                  className={css`
                    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                    font-size: 18px;
                    color: #006bb8;
                    max-width: 400px;
                    text-align: center;
                  `}
                >
                  {props.content3}
                </div>
                <div
                  className={css`
                    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                    font-size: 16px;
                    color: #71797e;
                    max-width: 400px;
                    text-align: center;
                  `}
                >
                  {props.content3date}
                </div>
              </>
            </Timeline.Item>
          ) : null}
          {props.timelineCount >= 4 ? (
            <Timeline.Item color={props.color}>
              <>
                <div
                  className={css`
                    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                    font-size: 18px;
                    color: #006bb8;
                    max-width: 400px;
                    text-align: center;
                  `}
                >
                  {props.content4}
                </div>
                <div
                  className={css`
                    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                    font-size: 16px;
                    color: #71797e;
                    max-width: 400px;
                    text-align: center;
                  `}
                >
                  {props.content4date}
                </div>
              </>
            </Timeline.Item>
          ) : null}
          {props.timelineCount >= 5 ? (
            <Timeline.Item color={props.color}>
              <>
                <div
                  className={css`
                    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                    font-size: 18px;
                    color: #006bb8;
                    max-width: 400px;
                    text-align: center;
                  `}
                >
                  {props.content5}
                </div>
                <div
                  className={css`
                    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                    font-size: 16px;
                    color: #71797e;
                    max-width: 400px;
                    text-align: center;
                  `}
                >
                  {props.content5date}
                </div>
              </>
            </Timeline.Item>
          ) : null}
          {props.timelineCount >= 6 ? (
            <Timeline.Item color={props.color}>
              <>
                <div
                  className={css`
                    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                    font-size: 18px;
                    color: #006bb8;
                    max-width: 400px;
                    text-align: center;
                  `}
                >
                  {props.content6}
                </div>
                <div
                  className={css`
                    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                    font-size: 16px;
                    color: #71797e;
                    max-width: 400px;
                    text-align: center;
                  `}
                >
                  {props.content6date}
                </div>
              </>
            </Timeline.Item>
          ) : null}
          {props.timelineCount >= 7 ? (
            <Timeline.Item color={props.color}>
              <>
                <div
                  className={css`
                    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                    font-size: 18px;
                    color: #006bb8;
                    max-width: 400px;
                    text-align: center;
                  `}
                >
                  {props.content7}
                </div>
                <div
                  className={css`
                    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                    font-size: 16px;
                    color: #71797e;
                    max-width: 400px;
                    text-align: center;
                  `}
                >
                  {props.content7date}
                </div>
              </>
            </Timeline.Item>
          ) : null}
          {props.timelineCount >= 8 ? (
            <Timeline.Item color={props.color}>
              <>
                <div
                  className={css`
                    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                    font-size: 18px;
                    color: #006bb8;
                    max-width: 400px;
                    text-align: center;
                  `}
                >
                  {props.content8}
                </div>
                <div
                  className={css`
                    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                    font-size: 16px;
                    color: #71797e;
                    max-width: 400px;
                    text-align: center;
                  `}
                >
                  {props.content8date}
                </div>
              </>
            </Timeline.Item>
          ) : null}
          {props.timelineCount >= 9 ? (
            <Timeline.Item color={props.color}>
              <>
                <div
                  className={css`
                    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                    font-size: 18px;
                    color: #006bb8;
                    max-width: 400px;
                    text-align: center;
                  `}
                >
                  {props.content9}
                </div>
                <div
                  className={css`
                    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                    font-size: 16px;
                    color: #71797e;
                    max-width: 400px;
                    text-align: center;
                  `}
                >
                  {props.content9date}
                </div>
              </>
            </Timeline.Item>
          ) : null}
          {props.timelineCount >= 10 ? (
            <Timeline.Item color={props.color}>
              <>
                <div
                  className={css`
                    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                    font-size: 18px;
                    color: #006bb8;
                    max-width: 400px;
                    text-align: center;
                  `}
                >
                  {props.content10}
                </div>
                <div
                  className={css`
                    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                    font-size: 16px;
                    color: #71797e;
                    max-width: 400px;
                    text-align: center;
                  `}
                >
                  {props.content10date}
                </div>
              </>
            </Timeline.Item>
          ) : null}
        </Timeline>
      </div>
    </>
  );
}
