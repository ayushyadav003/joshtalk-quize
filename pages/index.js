import { useRouter } from "next/router";
import { fetchQuestion } from "@/services/QuestionsApi";
import { useDispatch } from "react-redux";
import { setOptionData, setQuizeQuestions } from "@/redux/features/QuizeSlice";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleQuizeQuestions = async () => {
    const data = await fetchQuestion();
    if (data) {
      const randomizedOptions = data.map((item) => {
        let options = [...item?.incorrect_answers];
        let randomIndex = Math.floor(Math.random() * options.length + 1);
        options.splice(randomIndex, 0, item?.correct_answer);
        return options;
      });
      dispatch(setQuizeQuestions(data));
      dispatch(setOptionData([randomizedOptions]));
    }
    router.push("/josh-quize");
  };

  return (
    <main>
      <div className="flex justify-center items-center h-[100vh]">
        <button
          className="bg-[#000] text-[#fff] p-5 pl-9 pr-9 rounded"
          onClick={() => handleQuizeQuestions()}
        >
          Start Quize
        </button>
      </div>
    </main>
  );
}
