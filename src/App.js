import React from "react";
import { connect } from "react-redux";

import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Calculator from "./components/Calculator/Calculator";
import Footer from "./components/Footer/Footer";
import SleepInfo from "./containers/SleepInfo/SleepInfo";
import * as actions from "./store/actions/actions";

const App = props => {
  return (
    <div className={styles.App}>
      <Header />
      {props.showCalculator ? (
        <Calculator
          currentHours={props.currentHours}
          currentMinutes={props.currentMinutes}
          showHours={props.showHours}
          showMinutes={props.showMinutes}
          switchShowMinutes={props.onSwitchShowMinutes}
          switchShowHours={props.onSwitchShowHours}
          switchShowCalc={props.onSwitchShowCalculator}
          setCurrentHours={props.onSetCurrentHours}
          setCurrentMinutes={props.onSetCurrentMinutes}
          zzzButtonClicked={props.onZzzButtonClick}
        />
      ) : (
        <SleepInfo
          currentHours={props.currentHours}
          currentMinutes={props.currentMinutes}
          switchShowCalc={props.onSwitchShowCalculator}
          zzzButtonClicked={props.zzzButtonClicked}
          onZzzButtonClicked={props.onZzzButtonClick}
        />
      )}
      <Footer />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    showCalculator: state.showCalculator,
    showHours: state.showHours,
    showMinutes: state.showMinutes,
    currentHours: state.currentHours,
    currentMinutes: state.currentMinutes,
    zzzButtonClicked: state.zzzButtonClicked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSwitchShowCalculator: () => dispatch(actions.switchShowCalculator()),
    onSwitchShowHours: () => dispatch(actions.switchShowHours()),
    onSwitchShowMinutes: () => dispatch(actions.switchShowMinutes()),
    onSetCurrentHours: item => dispatch(actions.setCurrentHours(item)),
    onSetCurrentMinutes: item => dispatch(actions.setCurrentMinutes(item)),
    onZzzButtonClick: () => dispatch(actions.zzzButtonClicked())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
