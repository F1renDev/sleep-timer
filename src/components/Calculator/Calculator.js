import React from "react";
import styles from "./Calculator.module.css";
import Button from "../Button/Button";
import sheepImage from "../../assets/images/sheep.gif";

const Calcucator = props => {
  let hoursDropdown = props.showHours ? null : { display: "none" };
  let minutesDropdown = props.showMinutes ? null : { display: "none" };
  const hoursArr = [
    `00`,
    `01`,
    `02`,
    `03`,
    `04`,
    `05`,
    `06`,
    `07`,
    `08`,
    `09`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`,
    `21`,
    `22`,
    `23`
  ];
  const minutesArr = [
    `00`,
    `05`,
    `10`,
    `15`,
    `20`,
    `25`,
    `30`,
    `35`,
    `40`,
    `45`,
    `50`,
    `55`
  ];

  const hoursOnclickFunctions = item => {
    props.setCurrentHours(item);
    props.switchShowHours();
  };

  const minutesOnclickFunctions = item => {
    props.setCurrentMinutes(item);
    props.switchShowMinutes();
  };

  const zzzButtonOnclickFunctions = () => {
    props.switchShowCalc();
    props.zzzButtonClicked();
  };

  return (
    <div className={styles.Calculator}>
      <div className={styles.CalculatorHeader}>SLEEP TIME</div>
      <div className={styles.Type}>
        <div className={styles.Title}>Wanna wake up at...</div>
        <div className={styles.Time}>
          <div className={styles.Select}>
            <div onClick={props.switchShowHours} className={styles.Hour}>
              {props.currentHours}
            </div>
            <div style={hoursDropdown} className={styles.Dropdown}>
              {hoursArr.map(item => {
                return (
                  <div onClick={() => hoursOnclickFunctions(item)} key={item}>
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.Separator}>:</div>
          <div className={styles.Select}>
            <div onClick={props.switchShowMinutes} className={styles.Minute}>
              {props.currentMinutes}
            </div>
            <div
              className={[styles.Dropdown, styles.DropdownLeft].join(" ")}
              style={minutesDropdown}
            >
              {minutesArr.map(item => {
                return (
                  <div onClick={() => minutesOnclickFunctions(item)} key={item}>
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Button clicked={props.switchShowCalc}>Calculate</Button>
      <div className={styles.Text}>or</div>
      <div className={styles.Type}>
        <div className={styles.Title}>
          When should I get up if I go to bed right now...
        </div>
      </div>
      <Button clicked={() => zzzButtonOnclickFunctions()}>Zzz</Button>
      <div className={styles.Animate}>
        <img src={sheepImage} alt="a sheep" />
      </div>
    </div>
  );
};

export default Calcucator;
