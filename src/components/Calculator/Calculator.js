import React from 'react';
import styles from './Calculator.module.css';
import Button from '../Button/Button';
import sheepImage from "../../assets/images/sheep.gif";

class Calcucator extends React.Component {
  render() {
    return (
      <div className={styles.Calculator}>
        <div className={styles.CalculatorHeader}>SLEEP TIME</div>
        <div className={styles.Type}>
          <div className={styles.Title}>Wanna wake up at...</div>
          <div className={styles.Time}>
            <div className={styles.Select}>
              <div className={styles.Hour}>08</div>
              <div style={{ display: 'none' }} className={styles.Dropdown}>
                <div class='select__option'>00</div>
                <div class='select__option'>01</div>
                <div class='select__option'>02</div>
                <div class='select__option'>03</div>
                <div class='select__option'>04</div>
                <div class='select__option'>05</div>
                <div class='select__option'>06</div>
                <div class='select__option'>07</div>
                <div class='select__option'>08</div>
                <div class='select__option'>09</div>
                <div class='select__option'>10</div>
                <div class='select__option'>11</div>
                <div class='select__option'>12</div>
                <div class='select__option'>13</div>
                <div class='select__option'>14</div>
                <div class='select__option'>15</div>
                <div class='select__option'>16</div>
                <div class='select__option'>17</div>
                <div class='select__option'>18</div>
                <div class='select__option'>19</div>
                <div class='select__option'>20</div>
                <div class='select__option'>21</div>
                <div class='select__option'>22</div>
                <div class='select__option'>23</div>
              </div>
            </div>
            <div className={styles.Separator}>:</div>
            <div className={styles.Select}>
              <div className={styles.Minute}>00</div>
              <div className={styles.Dropdown} style={{ display: 'none' }}>
                <div class='select__option'>00</div>
                <div class='select__option'>05</div>
                <div class='select__option'>10</div>
                <div class='select__option'>15</div>
                <div class='select__option'>20</div>
                <div class='select__option'>25</div>
                <div class='select__option'>30</div>
                <div class='select__option'>35</div>
                <div class='select__option'>40</div>
                <div class='select__option'>45</div>
                <div class='select__option'>50</div>
                <div class='select__option'>55</div>
              </div>
            </div>
          </div>
        </div>
        <Button>Calculate</Button>
        <div className={styles.Text}>or</div>
        <div className={styles.Type}>
            <div style={{textAlign: 'center'}} className={styles.Title}>When should I get up if I go to bed right now...</div>
        </div>
        <Button>Zzz</Button>
        <div className={styles.Animate}>
            <img src={sheepImage} alt="a sheep"/>
        </div>
      </div>
    );
  }
}

export default Calcucator;
