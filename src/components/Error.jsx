import React from "react";
import styles from "./Loader.module.css";

const Error = ({ error }) => {
  return (
    <div className={styles.error}>{error ? error : "There was an error"}</div>
  );
};

export default Error;
