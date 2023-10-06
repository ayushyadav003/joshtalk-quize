import React from "react";
import styles from "./QuestionsPanel.module.scss";

function QuestionsPanel({
  questionsData,
  currentQuestion,
  setCurrentQuestion,
}) {
  return (
    <div className={styles.panelContainer}>
      {questionsData?.map((questionData, i) => {
        return (
          <p
            style={{
              background: currentQuestion === i ? "#dcdcdc" : "#fff",
            }}
            onClick={() => setCurrentQuestion(i)}
          >
            {i + 1}. {"   "}
            {questionData?.question}
          </p>
        );
      })}
    </div>
  );
}

export default QuestionsPanel;
