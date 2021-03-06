import React from 'react';
import { Line } from 'rc-progress';

const WelcomePageContentFourthPage = ({}) => (
  <div>
    <h2 className="welcomePageContent-TourPageTitle"><span className="welcomePageContent-TourPageTitle-Lighter">2. Track your</span> Weeks 🗓</h2>
    <p>Completion <strong>percentages</strong> for each category will increase as you check off your goals:</p>
    <div className="welcomePageContent-percentagesBox">
      <div>
        <div className="weekPageContent-percentagesText-flex">
          <p className="weekPageContent-weekOfSubtitle flexGrow-one">Personal</p>
          <p className="weekPageContent-percentageText smallPercentage flexGrow-zero">
            <span><strong>{50}</strong>{'%'}</span>
          </p>
        </div>
        <div className="weekPage-progressLineContainer">
          <Line
            percent={50}
            strokeWidth="1"
            trailWidth="1"
            strokeLinecap="round"
            strokeColor="rgb(255, 118, 167)"
            trailColor="#fbfbfb"
          />
        </div>
      </div>
      <div>
        <div className="weekPageContent-percentagesText-flex">
          <p className="weekPageContent-weekOfSubtitle flexGrow-one">Work</p>
          <p className="weekPageContent-percentageText smallPercentage flexGrow-zero">
            <span><strong>{100}</strong>{'%'}</span>
          </p>
        </div>
        <div className="weekPage-progressLineContainer">
          <Line
            percent={100}
            strokeWidth="1"
            trailWidth="1"
            strokeLinecap="round"
            strokeColor="rgb(132, 116, 255)"
            trailColor="#fbfbfb"
          />
        </div>
      </div>
    </div>
    <p>Save your week once you're done. <strong>Do this every Sunday</strong> (we'll remind you via email!)</p>
  </div>
);

export default WelcomePageContentFourthPage
