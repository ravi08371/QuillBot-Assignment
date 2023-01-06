import "./features.css";
import React, { useState, useEffect } from "react";

const slides = [
  {
    src: "https://assets.quillbot.com/images/theme/light/premiumPage/newAvailableWord.svg",
    alt: "Slide 1",
    heading: "Scan for plagiarism",
    text: "Unlock the Plagiarism Checker to guarantee all sources are cited and nothing is unintentionally plagiarized.",
  },
  {
    src: "https://assets.quillbot.com/images/theme/light/premiumPage/synonym.svg",
    alt: "Slide 2",
    heading: "Increase your productivity",
    text: "Paraphrase more text at once to finish writing faster.",
  },
  {
    src: "https://assets.quillbot.com/images/theme/commonImages/plagiarismChecker/plag-premium.svg",
    // src: "https://assets.quillbot.com/images/theme/commonImages/premiumPage/comparisonTable.svg",
    alt: "Slide 3",
    heading: "Compare all mode outputs at once",
    text: "Paraphrase in and compare outputs from all seven modes.",
  },
  {
    src: "https://assets.quillbot.com/images/theme/commonImages/premiumPage/comparisonTable.svg",
    // src: "https://assets.quillbot.com/images/theme/light/premiumPage/synonym.svg",
    alt: "Slide 4",
    heading: "Access all modes",
    text: "Get maximum control over how you paraphrase.",
  },
];

function Features() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transition, setTransition] = useState(false);
  // ------------------------------
  const [count, setCount] = useState(0);

  var i = 0;
  useEffect(() => {
    let barId = `bar${currentSlide + 1}`;
    console.log(barId);
    if (i == 0) {
      i = 1;
      var elem = document.getElementById(barId);
      var width = 1;
      var id = setInterval(() => {
        if (width >= 100) {
          clearInterval(id);
          elem.style.width = 0 + "%";
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }, 50);
    }
  }, [currentSlide]);

  //for small screen
  useEffect(() => {
    const interval = setInterval(() => {
      setTransition(true);
      setTimeout(() => {
        setCurrentSlide((currentSlide + 1) % slides.length);
        setTransition(false);
      }, 1000);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <div className="slideshow-container">
      <div id="bigscreen">
        <div id="slidesDiv">
          <div id="slidesImgs">
            <img
              src={slides[currentSlide].src}
              alt={slides[currentSlide].alt}
              id="slideImagesBig"
            />
          </div>
          <div id="sliders">
            <div>
              <h3>Increase your productivity</h3>
              <p>Paraphrase more text at once to finish writing faster.</p>
              <div id="myProgress">
                <div id="bar1"></div>
              </div>
            </div>
            <div>
              <h3>Access all modes</h3>
              <p>Get maximum control over how you paraphrase.</p>
              <div id="myProgress">
                <div id="bar2"></div>
              </div>
            </div>

            <div>
              <h3>Scan for plagiarism</h3>
              <p>
                Unlock the Plagiarism Checker to guarantee all sources are cited
                and nothing is unintentionally plagiarized.
              </p>
              <div id="myProgress">
                <div id="bar3"></div>
              </div>
            </div>
            <div>
              <h3>Compare all mode outputs at once</h3>
              <p>Paraphrase in and compare outputs from all seven modes.</p>
              <div id="myProgress">
                <div id="bar4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="smallScreenDevice">
        <div className={`slideshow-slide ${transition ? "transition" : ""}`}>
          <img
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            id="slideImage"
          />
        </div>
        <div className="slideText">
          <h4>{slides[currentSlide].heading}</h4>
          <p>{slides[currentSlide].text}</p>
        </div>

        <div className="slideshow-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={index === currentSlide ? "active" : ""}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
