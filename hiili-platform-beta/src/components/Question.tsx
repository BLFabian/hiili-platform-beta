import React, { useState } from "react"; // Import the useState hook
import "../styles/QuestionStyles.css";
import { FaAngleDown } from "react-icons/fa";

interface QuestionProps {
  question: string | JSX.Element;
  answer: string | JSX.Element;
}

function Question({ question, answer }: QuestionProps) {
  // State to manage whether the answer is expanded
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the expanded state
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <>
      <div className="questionAndAnswer">
        <div
          className={`questionText ${isExpanded ? "expandedQuestion" : ""}`}
          onClick={toggleExpand}
        >
          {question}
          <div
            className={`questionExpander ${
              isExpanded ? "rotatedExpander" : ""
            }`}
          >
            <FaAngleDown />
          </div>
        </div>
        <div className={`answerText ${isExpanded ? "" : "hiddenAnswer"}`}>
          {answer}
        </div>
      </div>
    </>
  );
}

export default Question;
