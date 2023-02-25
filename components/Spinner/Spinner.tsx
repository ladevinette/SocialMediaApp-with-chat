import React from "react";
import * as styles from "./Spinner.style";

const Spinner = () => {
  return (
    <div css={styles.loadingSpinnerContainer}>
      <div css={styles.loadingSpinner}></div>
    </div>
  );
};

export default Spinner;
