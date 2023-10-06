import QuestionsPanel from "@/components/questionsPanel/QuestionsPanel";
import QuizeHeader from "@/components/quizeHeader/QuizeHeader";
import React, { useEffect, useState } from "react";
import styles from "./joshQuize.module.scss";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function JoshQuize() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState({
    correct: 0,
    incorrect: 0,
    notAttempted: 0,
    total: 0,
  });
  const [showReport, setShowReport] = useState(false);
  const router = useRouter();

  const { quizeQuestion, optionData } = useSelector(({ Quize }) => Quize);

  useEffect(() => {
    if (!quizeQuestion) {
      router.push("/");
    }
  }, [quizeQuestion]);

  const handleReport = () => {
    let finalAnswers = Object.values(answers);
    let arrLength = quizeQuestion.length;
    let scoreCount = 0;
    let incorrectScore = 0;
    let notAttempted = 0;
    let total = 0;
    for (let i = 0; i < arrLength; i++) {
      if (finalAnswers[i] === undefined) {
        notAttempted++;
      } else if (quizeQuestion[i].correct_answer === finalAnswers[i]) {
        scoreCount++;
      } else incorrectScore++;
    }
    total = (scoreCount * 100) / (scoreCount + incorrectScore + notAttempted);
    total = Math.round(total);
    setResult({
      correct: scoreCount,
      incorrect: incorrectScore,
      notAttempted,
      total,
    });
    setShowReport(true);
  };

  return (
    <>
      {showReport ? (
        <div className={styles.finalReportContainer}>
          <h2>Final Report</h2>
          <div className={styles.reportStatsWrapper}>
            <div>
              <p style={{ color: "green" }}>Correct answers </p>
              <p style={{ color: "red" }}>Incorrect answers </p>
              <p style={{ color: "#8B8000" }}>Not attempted </p>
              <p>Final Result</p>
            </div>
            <div>
              <p style={{ color: "green" }}>{result.correct}</p>
              <p style={{ color: "red" }}>{result.incorrect}</p>
              <p style={{ color: "#8B8000" }}>{result.notAttempted}</p>
              <p>{result.total} %</p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.quizeContainer}>
          <div className={styles.innerWrapper}>
            <QuizeHeader handleReport={handleReport} />
            <div className={styles.questionsWrapper}>
              {quizeQuestion && (
                <>
                  <p>{quizeQuestion[currentQuestion]?.question}</p>
                  <div className={styles.optionsWrapper}>
                    {optionData[0][currentQuestion]?.map((option, i) => {
                      return (
                        <span
                          style={{
                            background:
                              answers[currentQuestion] === option && "#babaff",
                          }}
                          onClick={() =>
                            setAnswers({
                              ...answers,
                              [currentQuestion]: option,
                            })
                          }
                        >
                          {option}
                        </span>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
            <div className={styles.btnWrapper}>
              {currentQuestion === quizeQuestion?.length - 1 ? (
                <>
                  <button
                    onClick={() => setCurrentQuestion(currentQuestion - 1)}
                  >
                    Previous
                  </button>
                  <button onClick={() => handleReport()}>Submit</button>
                </>
              ) : (
                <>
                  {currentQuestion !== 0 && (
                    <button
                      onClick={() => setCurrentQuestion(currentQuestion - 1)}
                    >
                      Previous
                    </button>
                  )}

                  <button
                    onClick={() => setCurrentQuestion(currentQuestion + 1)}
                  >
                    Next
                  </button>
                </>
              )}
            </div>
          </div>
          <QuestionsPanel
            questionsData={quizeQuestion}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
          />
        </div>
      )}
    </>
  );
}

export default React.memo(JoshQuize);
