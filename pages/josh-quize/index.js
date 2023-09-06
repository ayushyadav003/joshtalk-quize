import QuestionsPanel from "@/components/questionsPanel/QuestionsPanel";
import QuizeHeader from "@/components/quizeHeader/QuizeHeader";
import React, { useEffect, useState } from "react";
import styles from "./joshQuize.module.scss";
import { fetchQuestion } from "@/services/QuestionsApi";

function JoshQuize() {
  const [questionsData, setQuestionData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState();
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    fetchQuizeData();
  }, []);

  const fetchQuizeData = async () => {
    const data = await fetchQuestion();
    setQuestionData(data);
    console.log(data);
  };

  const optionsHandler = () => {
    let data = questionsData[currentQuestion];
    if (data) {
      let options = [...data?.incorrect_answers, data?.correct_answer];
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }
      console.log(options);
      return options;
    }
  };

  return (
    <div className={styles.quizeContainer}>
      <div className={styles.innerWrapper}>
        <QuizeHeader />
        <div className={styles.questionsWrapper}>
          {questionsData && (
            <>
              <p>{questionsData[currentQuestion]?.question}</p>
              <div className={styles.optionsWrapper}>
                {optionsHandler()?.map((option, i) => {
                  return <span>{option}</span>;
                })}
              </div>
            </>
          )}
        </div>
        <div className={styles.btnWrapper}>
          {currentQuestion !== 0 && (
            <button onClick={() => setCurrentQuestion(currentQuestion - 1)}>
              Previous
            </button>
          )}
          <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>
            Next
          </button>
        </div>
      </div>
      <QuestionsPanel questionsData={questionsData} />
    </div>
  );
}

export default JoshQuize;
