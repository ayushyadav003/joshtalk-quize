import Timer from "@/widgets/timer/Timer";
import React from "react";
import styles from "./QuizeHeader.module.scss";

function QuizeHeader() {
  return (
    <div className={styles.QuizeHeaderContainer}>
      <Timer />
    </div>
  );
}

export default QuizeHeader;
