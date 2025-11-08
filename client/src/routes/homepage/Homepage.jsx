import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>spECTRA</h1>
        <h2>Summarize YouTube. Smarter. Faster.</h2>
        <h3>
          Skip the fluff, capture the essence. spECTRA turns hours of YouTube into
           sharp, AI-powered insights — so you learn more in less time.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpeg"
                  : "bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Welcome to SPECTRA! Paste a YouTube link to get started.",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Save time and learn more with spECTRA's smart summaries.",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "SPECTRA uses advanced AI to summarize videos quickly.",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Try it out now and see the magic!",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;