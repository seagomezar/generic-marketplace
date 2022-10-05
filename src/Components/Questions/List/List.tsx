import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { executeQuery } from "../../../Service/GraphQlService";
import "./List.css";

export default function QuestionsList() {
  const [questions, setQuestions] = useState([]);

  async function getQuestions() {
    const query = `query getQuestions {
      questions {
        answer
        created_at
        id
        product_id
        title
        updated_at
        user_id
      }
    }
    `;
    console.log(query);
    const { errors, data } = await executeQuery("getQuestions", query);
    if (errors) {
      console.error(errors);
    }
    console.info(data.questions);
    setQuestions(data.questions);
  }
  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <>
      <button>
        <Link to={`/newQuestions`}>Add a New Questions</Link>
      </button>
      {!questions.length ? (
        <h2>Loading ...</h2>
      ) : (
        <div className="Questionstable">
          <div>
            <h3>Id</h3>
          </div>
          <div>
            <h3>answer</h3>
          </div>
          <div>
            <h3>Title</h3>
          </div>
          <div>
            <h3>product_id</h3>
          </div>
          <div>
            <h3>user_id</h3>
          </div>
          <div>
            <h3>Created At</h3>
          </div>
          <div>
            <h3>Updated At</h3>
          </div>
          <div>
            <h3>Edit</h3>
          </div>
          <div>
            <h3>Delete</h3>
          </div>

          {questions.map((p: Product) => (
            <Fragment key={p.id}>
              <div>{p.id}</div>
              <div>{p.answer}</div>
              <div>{p.title}</div>
              <div>{p.user_id}</div>
              <div>{p.product_id}</div>
              <div>{new Date(p.created_at).toLocaleString()}</div>
              <div>{new Date(p.updated_at).toLocaleString()}</div>
              <div>
                <button>
                  <Link to={`/editquestions/${p.id}`}>E</Link>
                </button>
              </div>
              <div>
                <button
                  onClick={async (e) => {
                    e.preventDefault();
                    const query = `
                      mutation deletequestions {
                        delete_questions(where: {id: {_eq: ${p.id}}}) {
                          returning {
                            id
                          }
                        }
                      }
                    `;
                    console.log(query);
                    const { errors, data } = await executeQuery(
                      "deletequestions",
                      query
                    );
                    if (errors) {
                      console.error(errors);
                    }
                    console.log(data);
                    getQuestions();
                  }}
                >
                  D
                </button>
              </div>
            </Fragment>
          ))}
        </div>
      )}
    </>
  );
}
