import React from 'react';
import styles from './SleepInfo.module.css';

import sheepImage from '../../assets/images/sheep.gif';

class SleepInfo extends React.Component {
  render() {
    return (
      <div className={styles.SleepInfo}>
        <div className={styles.SleepInfoHeader}>SLEEP TIME</div>
        <div className={styles.Title}>Go to bed at this time:</div>
        <div className={styles.Time}>
          <div className={styles.ResultTime}>22:00</div>
          <div className={styles.ResultTime}>23:30</div>
          <div className={styles.ResultTime}>01:00</div>
          <div className={styles.ResultTime}>02:30</div>
          <div className={styles.ResultTime}>04:00</div>
          <div className={styles.ResultTime}>05:30</div>
        </div>
        <p className={styles.Text}>
          You can sleep even 10 hours a day and still feel broken or you can
          have a quick nap and make greate achievements
        </p>
        <p className={styles.Text}>
          A good sleep consists of 5-6 full cycles. In order to get up
          refreshed, plan your awakening at the end of the cycle. Keep in mind
          that it usually take about 14 minutes to fall asleep.
        </p>
        <p className={styles.Text}>
          Sweet dreams. And don't forget to set the alarm!
        </p>
        <p onClick={this.props.switchShowCalc} className={styles.Back}>BACK</p>
        <div className={styles.Animate}>
          <img src={sheepImage} alt='a sheep' />
        </div>
      </div>
    );
  }
}

export default SleepInfo;
