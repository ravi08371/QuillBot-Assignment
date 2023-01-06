import { style } from "@mui/system";
import React from "react";
import "./progressbar.css";

function ProgressBars() {
  // const { darkMode } = props;
  window.onload = () => {
    let circularProgress = document.querySelector(".circularProgress");
    let circularProgressTwo = document.querySelector(".circularProgressTwo");
    let circularProgressThree = document.querySelector(
      ".circularProgressThree"
    );
    let circularVal = document.querySelector(".circularVal");
    let circularValTwo = document.querySelector(".circularValTwo");
    let circularValThree = document.querySelector(".circularValThree");
    let progressStart = 0;
    let progressStartTwo = 0;
    let progressStartThree = 0;
    let progressEndOne = 75;
    let progressEndTwo = 50;
    let progressEndThree = 85;
    let speed = 30;
    let progressTwo = setInterval(() => {
      progressStartTwo++;
      circularValTwo.textContent = `${progressStartTwo}+ `;
      circularProgressTwo.style.background = `conic-gradient(#499557 ${
        progressStartTwo * 8.6
      }deg, #dcdcdc 0deg)`;
      if (progressStartTwo === progressEndTwo) {
        clearInterval(progressTwo);
      }
    }, speed);
    let progressThree = setInterval(() => {
      progressStartThree++;
      circularValThree.textContent = `${progressStartThree}% `;
      circularProgressThree.style.background = `conic-gradient(#499557 ${
        progressStartThree * 3.6
      }deg, #dcdcdc 0deg)`;
      if (progressStartThree === progressEndThree) {
        clearInterval(progressThree);
      }
    }, speed);

    let progress = setInterval(() => {
      progressStart++;
      circularVal.textContent = `${progressStart}% `;
      circularProgress.style.background = `conic-gradient(#499557 ${
        progressStart * 3.6
      }deg, #dcdcdc 0deg)`;
      if (progressStart === progressEndOne) {
        clearInterval(progress);
      }
    }, speed);
  };
  return (
    <div id="mainContainor">
      <div className="progress1">
        <div className="circularProgress">
          <span className="circularVal">0%</span>
          <p>time saved</p>
        </div>
        <p className="para">Average time savings per writing</p>
        <p className="para">project.</p>
      </div>
      <div className="progress2">
        <div className="circularProgressTwo">
          <span className="circularValTwo">0+</span>
          <p>million</p>
        </div>
        <p className="para">Trusted by millions worldwide.</p>
      </div>
      <div className="progress1">
        <div className="circularProgressThree">
          <span className="circularValThree">0%</span>
          <p>of students</p>
        </div>
        <p className="para">Who reported their grades improved</p>
        <p className="para">after using QuillBot.</p>
      </div>
    </div>
  );
}

export default ProgressBars;
