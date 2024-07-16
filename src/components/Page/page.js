import React from "react";
import "./page.css";
import buddy from "../images/Vector.png";
import sampu from "../images/Image.png";
import star from "../images/Icon.png";
import avtar from "../images/Avatar.png";
import QR from "../images/QR.png";
import Close from "../images/Icon Button.png";

const Page = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src={buddy} alt="buddy" />
          <div>Buddy</div>
        </div>
        <div className="signup">Sign up</div>
      </header>
      <main className="main">
        <div className="left-container">
          <img src={sampu} alt="Water Sport Sunscreen" />
        </div>
        <div className="right-container">
          <div className="box-one">
            <div className="subtitle">Stream2Sea</div>
            <div className="title">Water Sport Sunscreen</div>
            <div className="description-one">
              Sunscreen SPF 30 is a high performance mineral-
              <br />
              based sunscreen which protects your body while <br /> preserving
              the ecosystems you love.
            </div>
            <div className="buy">Buy</div>
          </div>
          <div className="box-two">
            <div className="rating-box">
              <div className="rating">
                <img src={star} alt="star" />
                <div>Rating</div>
              </div>
              <div>4.7</div>
            </div>
            <hr className="hr" />
            <div className="review">Review</div>
            <div className="description-two">
              Absolutely love the sunscreen! It’s smooth and <br /> doesn’t feel
              sticky. Even better that it’s reef safe. It <br />
              comes in a few sizes but I like to take the travel <br />
              size with me because a little goes a long way. <br />
              Would definitely recommend :
            </div>
            <div>
              <div className="profile">
                <img src={avtar} alt="Taylor H." />
                <div className="profile-details">
                  <div className="name">Taylor H.</div>
                  <div className="location">Divemaster</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="cards">
        <div className="cookie">
          <div className="cookie-description">
            Buddy uses cookies to personalize content and ads, provide social
            media features, and analyze our traffic. Click "Accept all" to
            accept these uses. Read more in our Cookie Policy
          </div>
          <div className="cookie-button">
            <div className="reject">Reject all</div>
            <div className="accept">Accept all</div>
          </div>
        </div>
        <div className="scan">
          <div className="close">
            <img src={Close} alt="Close" />
          </div>
          <div className="scan-text1">
            Find more gear reviews <br />
            in the Buddy app
          </div>
          <div className="scan-text2">
            Scan the code below with your <br />
            phone to download
          </div>
          <img src={QR} alt="QR" />
        </div>
      </div>
      <footer>
        <div className="footer">
          <ul>
            <li>About Buddy</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Page;
