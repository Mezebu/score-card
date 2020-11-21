import React from "react";
import cx from "classnames";
import dayjs from "dayjs";

import stadiumIcon from "./assets/stadium.svg";
import calendarIcon from "./assets/calendar.svg";
import bootIcon from "./assets/boots.svg";
import clockIcon from "./assets/clock.svg";
import ballIcon from "./assets/ball.svg";

const Scorecard = ({
  id,
  home,
  away,
  stadium,
  isOpen,
  setOpenCardId,
  date
}) => {
  return (
    <div
      onClick={() => setOpenCardId(isOpen ? null : id)}
      className={cx("scorecard", { "scorecard-open": isOpen })}
    >
      {isOpen && (
        <>
          <div className="venue">
            <img className="stadium-icon" src={stadiumIcon} alt="" />
            {stadium}
          </div>
          <div className="game-time">
            <img className="calender-icon" src={calendarIcon} alt="" />
            {dayjs(date).format("ddd, D MMM - h:mmA")}
          </div>
        </>
      )}
      <div className="score-row">
        <div className="team team-home">
          <span className="logo-team-align">
            {home.name}
            <span
              className="logo"
              style={{ backgroundImage: `url(${home.logoUrl})` }}
            />
          </span>
          {isOpen && (
            <div className="score-info score-info-home">
              {home.goals.map(({ player, time, assist }) => (
                <div>
                  <span className="goal goal-scorer">
                    {player}
                    <img className="ball-icon" src={ballIcon} alt="" />
                  </span>
                  <span className="goal goal-assist">
                    {assist}
                    <img className="boot-icon" src={bootIcon} alt="" />
                  </span>
                  <span className="goal goal-time">
                    {time}
                    <img className="clock-icon" src={clockIcon} alt="" />
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <span className="score">
          <span className="score-align">
            <span className="score-value">{home.score}</span>
            <span>:</span>
            <span className="score-value">{away.score}</span>
          </span>
        </span>
        <div className="team team-away">
          <span className="logo-team-align">
            <span
              className="logo"
              style={{ backgroundImage: `url(${away.logoUrl})` }}
            />
            {away.name}
          </span>
          {isOpen && (
            <div className="score-info score-info-away">
              {away.goals.map(({ player, time, assist }) => (
                <div>
                  <span className="goal goal-scorer">
                    {player}
                    <img className="ball-icon" src={ballIcon} alt="" />
                  </span>
                  <span className="goal goal-assist">
                    {assist}
                    <img className="boot-icon" src={bootIcon} alt="" />
                  </span>
                  <span className="goal goal-time">
                    {time}
                    <img className="clock-icon" src={clockIcon} alt="" />
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Scorecard;
