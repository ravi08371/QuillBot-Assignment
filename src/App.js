import "./App.css";
import Features from "./components/Features";
import Freemium from "./components/Freemium";
import MenuAppBar from "./components/MenuAppBar";
import ProgressBars from "./components/ProgressBars";
import UpgradePremiumButtom from "./components/UpgradePremiumButtom";
import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";

import "./components/menuAppBar.css";

// -------trial---------------/
let backgroundColors = "#499557";
const free = {
  classNameFree: "free",
  heading: "FREE",
  buttonId: "freeBtn",
  buttonText: `Sign Up-It's Free`,
  tick: <DoneIcon className="greenTick" />,
  cross: <CloseIcon className="cross" />,
};
const listItemText = {
  text1: "125 words in the Paraphraser",
  text2: "Standard and Fluency modes",
  text3: "3 synonym options",
  text4: "1 Freeze word or phrase",
  text5: "1200 words in the Summarizer",
  text6: "Faster processing speed",
  text7: "Advanced grammar rewrites",
  text8: "Compare Modes (Desktop only)",
  text9: "Plagiarism Checker*",
  text10: "Tone detection",
  bottomText: "No Credit Card Required",
};
const free2 = {
  classNameFree: "premium",
  heading: "PREMIUM",
  buttonId: "premiumBtn",
  buttonText: `Upgrade to Premium`,
  tick: <DoneIcon className="yellowTick" />,
  diamond: (
    <DiamondOutlinedIcon style={{ color: "white", fontWeight: "100" }} />
  ),
};
let backgroundColorsTwo = "#dc9e00";
const listItemText2 = {
  text1: "Unlimited words in the Paraphraser",
  text2:
    "Standard, Fluency, Expand, Shorten, Formal, Simple, and Creative modes",
  text3: "4 synonym options",
  text4: "Unlimited Freeze words and phrases",
  text5: "6000 words in the Summarizer",
  text6: "Faster processing speed",
  text7: "Advanced grammar rewrites",
  text8: "Compare Modes (Desktop only)",
  text9: "Plagiarism Checker*",
  text10: "Tone detection",
  bottomText: "3-Day Money-Back Guarantee",
};

// ------------------------------------------------------------/

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="App">
      <div className={darkMode ? "dark" : "light"}>
        <MenuAppBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <UpgradePremiumButtom />
        <Features />
        <div className="apps">
          <h4 className={darkMode ? "dark" : "light"}>
            Experience the full power of QuillBot
          </h4>
          <div id="fremiumDiv">
            <Freemium
              darkMode={darkMode}
              backgroundColors={backgroundColors}
              classNameFree={free.classNameFree}
              heading={free.heading}
              buttonId={free.buttonId}
              buttonText={free.buttonText}
              tick={free.tick}
              cross={free.cross}
              text1={listItemText.text1}
              text2={listItemText.text2}
              text3={listItemText.text3}
              text4={listItemText.text4}
              text5={listItemText.text5}
              text6={listItemText.text6}
              text7={listItemText.text7}
              text8={listItemText.text8}
              text9={listItemText.text9}
              text10={listItemText.text10}
              bottomText={listItemText.bottomText}
              infoBtn={false}
            />
            <Freemium
              darkMode={darkMode}
              backgroundColors={backgroundColorsTwo}
              classNameFree={free2.classNameFree}
              heading={free2.heading}
              buttonId={free2.buttonId}
              buttonText={free2.buttonText}
              tick={free2.tick}
              cross={free2.cross}
              text1={listItemText2.text1}
              text2={listItemText2.text2}
              text3={listItemText2.text3}
              text4={listItemText2.text4}
              text5={listItemText2.text5}
              text6={listItemText2.text6}
              text7={listItemText2.text7}
              text8={listItemText2.text8}
              text9={listItemText2.text9}
              text10={listItemText2.text10}
              bottomText={listItemText2.bottomText}
              infoBtn={true}
              diamond={free2.diamond}
            />
          </div>
          <p className="hide">*Scan up to 20 pages a month</p>
          <div id="reach" className={darkMode ? "dark" : "light"}>
            <h4>Write better, faster, and clearer instantly</h4>
            <p>QuillBot is trusted by students, professional writers, and</p>
            <p>business people who want to write more effectively.</p>
          </div>
          <ProgressBars darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}

export default App;
