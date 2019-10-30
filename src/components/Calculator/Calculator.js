import React from 'react';
import styles from './Calculator.module.css';
import Button from '../Button/Button';
import sheepImage from '../../assets/images/sheep.gif';

class Calcucator extends React.Component {
  render() {
    let hoursDropdown = this.props.showHours ? null : { display: 'none' };
    let minutesDropdown = this.props.showMinutes ? null : { display: 'none' };
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

    const hoursOnclickFunctions = (item) => {
      this.props.setCurrentHours(item);
      this.props.switchShowHours();
    };

    const minutesOnclickFunctions = (item) => {
      this.props.setCurrentMinutes(item);
      this.props.switchShowMinutes();
    };

    return (
      <div className={styles.Calculator}>
        <div className={styles.CalculatorHeader}>SLEEP TIME</div>
        <div className={styles.Type}>
          <div className={styles.Title}>Wanna wake up at...</div>
          <div className={styles.Time}>
            <div className={styles.Select}>
              <div onClick={this.props.switchShowHours} className={styles.Hour}>
                {this.props.currentHours}
              </div>
              <div style={hoursDropdown} className={styles.Dropdown}>
                {hoursArr.map((item) => {
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
              <div
                onClick={this.props.switchShowMinutes}
                className={styles.Minute}
              >
                {this.props.currentMinutes}
              </div>
              <div
                className={[styles.Dropdown, styles.DropdownLeft].join(' ')}
                style={minutesDropdown}
              >
                {minutesArr.map((item) => {
                  return (
                    <div
                      onClick={() => minutesOnclickFunctions(item)}
                      key={item}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Button clicked={this.props.switchShowCalc}>Calculate</Button>
        <div className={styles.Text}>or</div>
        <div className={styles.Type}>
          <div className={styles.Title}>
            When should I get up if I go to bed right now...
          </div>
        </div>
        <Button clicked={this.props.switchShowCalc}>Zzz</Button>
        <div className={styles.Animate}>
          <img src={sheepImage} alt='a sheep' />
        </div>
      </div>
    );
  }
}

export default Calcucator;
