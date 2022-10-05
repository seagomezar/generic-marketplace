import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { executeQuery } from "../../../Service/GraphQlService";
import "./EditForm.css";
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

export default function questionsEditForm() {
  const [questions, setQuestions] = useState({
    title: "",
    answer: "",
    product_id: "",
    user_id: ""
  });
  let { id } = useParams();

  useEffect(() => {
    async function getQuestions() {
      const query = `query getQuestions {
        questions(where: {id: {_eq: ${id}}}) 
        {
          product_id
          answer
          user_id
          created_at
          id
          title
          updated_at
        }
      }
      `;
      console.log(query);
      const { errors, data } = await executeQuery("getQuestions", query);
      if (errors) {
        console.error(errors);
      }
      console.info(data);
      setQuestions(data.questions[0]);
    }
    getQuestions();
  }, []);

  return (
    <div className="questionsEditForm">
      <form>
        <label
          id="questions-EditForm-title-label"
          data-testid="questions-EditForm-title-label"
          htmlFor="questions-EditForm-title"
        >
          title:
        </label>
        <input
          id="questions-EditForm-title"
          data-testid="questions-EditForm-title"
          type="text"
          value={questions.title}
          autoComplete="questions-EditForm-title"
          aria-labelledby="questions-EditForm-title-label"
          aria-describedby="questions-EditForm-title-note"
          onChange={(e) => {
            setQuestions({ ...questions, title: e.target.value });
          }}
        />
        <span
          id="questions-EditForm-title-note"
          data-testid="questions-EditForm-title-note"
        >
          The title for your questions
        </span>
        <label
          id="questions-EditForm-answer-label"
          data-testid="questions-EditForm-answer-label"
          htmlFor="questions-EditForm-answer"
        >
          answer:
        </label>
        <input
          id="questions-EditForm-answer"
          data-testid="questions-EditForm-answer"
          type="text"
          value={questions.answer}
          autoComplete="questions-EditForm-answer"
          aria-labelledby="questions-EditForm-answer-label"
          aria-describedby="questions-EditForm-answer-note"
          onChange={(e) => {
            setQuestions({ ...questions, answer: e.target.value });
          }}
        />
        <span
          id="questions-EditForm-answer-note"
          data-testid="questions-EditForm-answer-note"
        >
          The answer for your questions
        </span>
        <label
          id="questions-EditForm-product_id-label"
          data-testid="questions-EditForm-product_id-label"
          htmlFor="questions-EditForm-product_id"
        >
          product_id:
        </label>
        <input
          id="questions-EditForm-product_id"
          data-testid="questions-EditForm-product_id"
          type="text"
          value={questions.product_id}
          autoComplete="questions-EditForm-product_id"
          aria-labelledby="questions-EditForm-product_id-label"
          aria-describedby="questions-EditForm-product_id-note"
          onChange={(e) => {
            setQuestions({ ...questions, product_id: e.target.value });
          }}
        />
        <span
          id="questions-EditForm-product_id-note"
          data-testid="questions-EditForm-product_id-note"
        >
          The product_id for your questions
        </span>
        <label
          id="questions-EditForm-user_id-label"
          data-testid="questions-EditForm-user_id-label"
          htmlFor="questions-EditForm-user_id"
        >
          user_id:
        </label>
        <input
          id="questions-EditForm-user_id"
          data-testid="questions-EditForm-user_id"
          type="text"
          value={questions.user_id}
          autoComplete="questions-EditForm-user_id"
          aria-labelledby="questions-EditForm-user_id-label"
          aria-describedby="questions-EditForm-user_id-note"
          onChange={(e) => {
            setQuestions({ ...questions, user_id: e.target.value });
          }}
        />
        <span
          id="questions-EditForm-user_id-note"
          data-testid="questions-EditForm-user_id-note"
        >
          The user_id for your questions
        </span>
        <br />
        <button
          onClick={async (e) => {
            e.preventDefault();
            console.log("Aqui esta tu questions", questions);
            const query = `mutation editquestions {
              update_questions(where: {id: {_eq: ${id} } }, _set:{
                  answer: "${questions.answer}", 
                  title: "${questions.title}",
                  product_id: ${questions.product_id}, 
                  user_id: ${questions.user_id}
                }){
              returning {
                id
                updated_at
              }
            }
          }
            `;
            console.log(query);
            const { errors, data } = await executeQuery("editquestions", query);
            if (errors) {
              console.error(errors);
            }
            console.log(data);
          }}
        >
          Save questions
        </button>
      </form>
    </div>
  );
}
