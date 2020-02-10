import React from "react";
import styles from "./SleepInfo.module.css";

import sheepImage from "../../assets/images/sheep.gif";

const SleepInfo = props => {
  /* A function that returns an array of 2 elements being 'Hours' and 'Minutes' to display */
  const getHoursForDisplay = (
    currentHours,
    currentMinutes,
    subtractedMinutes
  ) => {
    let returnedDate = new Date();
    let returnedArr = [];
    returnedDate.setHours(currentHours);
    returnedDate.setMinutes(currentMinutes);
    /* if zzz button was clicked we count time backwards */
    if (props.zzzButtonClicked) {
      subtractedMinutes = -Math.abs(subtractedMinutes);
    }
    returnedDate.setMinutes(returnedDate.getMinutes() - subtractedMinutes);
    returnedDate.getHours() < 10
      ? returnedArr.push("0" + returnedDate.getHours())
      : returnedArr.push(returnedDate.getHours());
    returnedDate.getMinutes() < 10
      ? returnedArr.push("0" + returnedDate.getMinutes())
      : returnedArr.push(returnedDate.getMinutes());
    return returnedArr;
  };

  let displayFirst = getHoursForDisplay(
    props.zzzButtonClicked ? new Date().getHours() : props.currentHours,
    props.zzzButtonClicked ? new Date().getMinutes() : props.currentMinutes,
    540
  );

  let displaySecond = getHoursForDisplay(
    props.zzzButtonClicked ? new Date().getHours() : props.currentHours,
    props.zzzButtonClicked ? new Date().getMinutes() : props.currentMinutes,
    450
  );

  let displayThird = getHoursForDisplay(
    props.zzzButtonClicked ? new Date().getHours() : props.currentHours,
    props.zzzButtonClicked ? new Date().getMinutes() : props.currentMinutes,
    360
  );

  let displayFourth = getHoursForDisplay(
    props.zzzButtonClicked ? new Date().getHours() : props.currentHours,
    props.zzzButtonClicked ? new Date().getMinutes() : props.currentMinutes,
    270
  );

  let displayFifth = getHoursForDisplay(
    props.zzzButtonClicked ? new Date().getHours() : props.currentHours,
    props.zzzButtonClicked ? new Date().getMinutes() : props.currentMinutes,
    180
  );

  let displaySixth = getHoursForDisplay(
    props.zzzButtonClicked ? new Date().getHours() : props.currentHours,
    props.zzzButtonClicked ? new Date().getMinutes() : props.currentMinutes,
    90
  );

  const onBackButtonClickFunctions = () => {
    props.switchShowCalc();
    if (props.zzzButtonClicked) {
      props.onZzzButtonClicked();
    }
  };

  const outputArr = [
    <div key={1} className={styles.ResultTime}>
      {displayFirst[0]}:{displayFirst[1]}
    </div>,
    <div key={2} className={styles.ResultTime}>
      {displaySecond[0]}:{displaySecond[1]}
    </div>,
    <div key={3} className={styles.ResultTime}>
      {displayThird[0]}:{displayThird[1]}
    </div>,
    <div key={4} className={styles.ResultTime}>
      {displayFourth[0]}:{displayFourth[1]}
    </div>,
    <div key={5} className={styles.ResultTime}>
      {displayFifth[0]}:{displayFifth[1]}
    </div>,
    <div key={6} className={styles.ResultTime}>
      {displaySixth[0]}:{displaySixth[1]}
    </div>
  ];

  return (
    <div className={styles.SleepInfo}>
      <div className={styles.SleepInfoHeader}>SLEEP TIME</div>
      <div className={styles.Title}>
        {props.zzzButtonClicked
          ? "Set an alarm for this time:"
          : "Go to bed at this time:"}
      </div>
      <div className={styles.Time}>
        {props.zzzButtonClicked
          ? outputArr.reverse().map(item => {
              return item;
            })
          : outputArr.map(item => {
              return item;
            })}
      </div>
      <p className={styles.Text}>
        You can sleep even 10 hours a day and still feel broken or you can have
        a quick nap and make greate achievements
      </p>
      <p className={styles.Text}>
        A good sleep consists of 5-6 full cycles. In order to get up refreshed,
        plan your awakening at the end of the cycle. Keep in mind that it
        usually take about 14 minutes to fall asleep.
      </p>
      <p className={styles.Text}>
        Sweet dreams. And don't forget to set the alarm!
      </p>
      <p onClick={() => onBackButtonClickFunctions()} className={styles.Back}>
        BACK
      </p>
      <div className={styles.Animate}>
        <img src={sheepImage} alt="a sheep" />
      </div>
    </div>
  );
};

export default SleepInfo;
