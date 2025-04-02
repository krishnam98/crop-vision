import React from "react";
import styles from "./SciFiLoader.module.css";

const SciFiLoader = () => {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.glow}></div>
            <div className={styles.loader}></div>
            <p className={styles.text}>Generating Crops...</p>
        </div>
    );
};

export default SciFiLoader;
