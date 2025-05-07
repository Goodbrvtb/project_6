import React from "react";
import styles from "./index.module.scss";

const Toggle = ({ value, onChange }) => {
  return (
    <div>
      {value ? <h1>Тёмная тема</h1> : <h1>Светлая тема</h1>}
      <label className={styles.root} htmlFor="toggler">
        <input
          id="toggler"
          type="checkbox"
          onClick={onChange}
          checked={value}
          readOnly
        />
        <span className={styles.slider} />
        <span className={styles.wave} />
      </label>
    </div>
  );
};

export default Toggle;
