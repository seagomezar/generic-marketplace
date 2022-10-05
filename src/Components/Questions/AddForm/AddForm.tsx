import { useState } from "react";
import { executeQuery } from "../../../Service/GraphQlService";
import "./AddForm.css";

/*
category: String!
created_at: timestamptz!
current_stock: numeric
description: String!
id: Int!
image: String!
price: numeric!
rating_average: numeric!
rating_count: numeric!
title: String!
updated_at: timestamptz!
*/

export default function QuestionsAddForm() {
  const [questions, setQuestions] = useState({
    title: "",
    answer: "",
    product_id: "",
    user_id: ""
  });
  return (
    <div className="QuestionsAddForm">
      <form>
        <label
          id="questions-addform-title-label"
          data-testid="questions-addform-title-label"
          htmlFor="Questions-addform-title"
        >
          title:
        </label>
        <input
          id="questions-addform-title"
          data-testid="questions-addform-title"
          type="text"
          autoComplete="questions-addform-title"
          aria-labelledby="questions-addform-title-label"
          aria-describedby="questions-addform-title-note"
          onChange={(e) => {
            setQuestions({ ...questions, title: e.target.value });
          }}
        />
        <span
          id="questions-addform-title-note"
          data-testid="questions-addform-title-note"
        >
          The title for your questions
        </span>
        <label
          id="questions-addform-answer-label"
          data-testid="questions-addform-answer-label"
          htmlFor="questions-addform-answer"
        >
          answer:
        </label>
        <input
          id="questions-addform-answer"
          data-testid="questions-addform-answer"
          type="text"
          autoComplete="questions-addform-answer"
          aria-labelledby="questions-addform-answer-label"
          aria-describedby="questions-addform-answer-note"
          onChange={(e) => {
            setQuestions({ ...questions, answer: e.target.value });
          }}
        />
        <span
          id="questions-addform-answer-note"
          data-testid="questions-addform-answer-note"
        >
          The answer for your questions
        </span>
        <label
          id="questions-addform-product_id-label"
          data-testid="questions-addform-product_id-label"
          htmlFor="questions-addform-product_id"
        >
          product_id:
        </label>
        <input
          id="questions-addform-product_id"
          data-testid="questions-addform-product_id"
          type="text"
          autoComplete="questions-addform-product_id"
          aria-labelledby="questions-addform-product_id-label"
          aria-describedby="questions-addform-product_id-note"
          onChange={(e) => {
            setQuestions({ ...questions, product_id: e.target.value });
          }}
        />
        <span
          id="questions-addform-product_id-note"
          data-testid="questions-addform-product_id-note"
        >
          The product_id for your questions
        </span>
        <label
          id="questions-addform-user_id-label"
          data-testid="questions-addform-user_id-label"
          htmlFor="questions-addform-user_id"
        >
          user_id:
        </label>
        <input
          id="questions-addform-user_id"
          data-testid="questions-addform-user_id"
          type="text"
          autoComplete="questions-addform-user_id"
          aria-labelledby="questions-addform-user_id-label"
          aria-describedby="questions-addform-user_id-note"
          onChange={(e) => {
            setQuestions({ ...questions, user_id: e.target.value });
          }}
        />
        <span
          id="questions-addform-user_id-note"
          data-testid="questions-addform-user_id-note"
        >
          The user_id for your questions
        </span>
        <br />
        <button
          onClick={async (e) => {
            e.preventDefault();
            console.log("Aqui esta tu question", questions);
            const query = `mutation insertquestions {
              insert_questions_one(object: {
                user_id: ${questions.user_id}, 
                title: "${questions.title}",
                 product_id: ${questions.product_id}, 
                 answer: "${questions.answer}"
                })
                  {
                id
              }
            }`;
            const { errors, data } = await executeQuery(
              "insertquestions",
              query
            );

            if (errors) {
              // handle those errors like a pro
              console.error(errors);
            }

            // do something great with this precious data
            console.log(data);
          }}
        >
          Save Questions
        </button>
      </form>
    </div>
  );
}
