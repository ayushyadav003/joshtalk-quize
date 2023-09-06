import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { fetchQuestion } from "@/services/QuestionsApi";

export default function Home() {
  const router = useRouter();

  const handleQuizeQuestions = async () => {
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
