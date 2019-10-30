import React from 'react';
import { connect } from 'react-redux';

import styles from './App.module.css';
import Header from './components/Header/Header';
import Calculator from './components/Calculator/Calculator';
import Footer from './components/Footer/Footer';
import SleepInfo from './containers/SleepInfo/SleepInfo';
import * as actions from './store/actions/actions';

class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />
        {this.props.showCalculator ? (
          <Calculator
            currentHours={this.props.currentHours}
            currentMinutes={this.props.currentMinutes}
            showHours={this.props.showHours}
            showMinutes={this.props.showMinutes}
            switchShowMinutes={this.props.onSwitchShowMinutes}
            switchShowHours={this.props.onSwitchShowHours}
            switchShowCalc={this.props.onSwitchShowCalculator}
            setCurrentHours={this.props.onSetCurrentHours}
            setCurrentMinutes={this.props.onSetCurrentMinutes}
            zzzButtonClicked={this.props.onZzzButtonClick}
          />
        ) : (
          <SleepInfo
            currentHours={this.props.currentHours}
            currentMinutes={this.props.currentMinutes}
            switchShowCalc={this.props.onSwitchShowCalculator}
            zzzButtonClicked={this.props.zzzButtonClicked}
            onZzzButtonClicked={this.props.onZzzButtonClick}
          />
        )}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showCalculator: state.showCalculator,
    showHours: state.showHours,
    showMinutes: state.showMinutes,
    currentHours: state.currentHours,
    currentMinutes: state.currentMinutes,
    zzzButtonClicked: state.zzzButtonClicked
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchShowCalculator: () => dispatch(actions.switchShowCalculator()),
    onSwitchShowHours: () => dispatch(actions.switchShowHours()),
    onSwitchShowMinutes: () => dispatch(actions.switchShowMinutes()),
    onSetCurrentHours: (item) => dispatch(actions.setCurrentHours(item)),
    onSetCurrentMinutes: (item) => dispatch(actions.setCurrentMinutes(item)),
    onZzzButtonClick: () => dispatch(actions.zzzButtonClicked())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
