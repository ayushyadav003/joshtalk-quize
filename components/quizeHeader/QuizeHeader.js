import Timer from "@/widgets/timer/Timer";
import React from "react";
import styles from "./QuizeHeader.module.scss";

function QuizeHeader({ handleReport }) {
  return (
    <div className={styles.QuizeHeaderContainer}>
      <Timer handleReport={handleReport} />
    </div>
  );
}

export default QuizeHeader;
