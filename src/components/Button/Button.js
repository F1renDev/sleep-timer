import React from "react";
import styles from "./Button.module.css";

const button = props => {
  return (
    <div onClick={props.clicked} className={styles.Button}>
      {props.children}
    </div>
  );
};

export default button;
