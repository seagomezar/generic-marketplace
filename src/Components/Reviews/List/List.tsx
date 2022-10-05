import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { executeQuery } from "../../../Service/GraphQlService";
import "./List.css";

export default function ReviewsList() {
  const [reviews, setReviews] = useState([]);

  async function getReviews() {
    const query = `query getReviews {
      reviews {
        id
        comment
        created_at
        product_id
        rating
        updated_at
        user_id
      }
    }
    `;
    console.log(query);
    const { errors, data } = await executeQuery("getReviews", query);
    if (errors) {
      console.error(errors);
    }
    console.info(data.reviews);
    setReviews(data.reviews);
  }
  useEffect(() => {
    getReviews();
  }, []);
  return (
    <>
      <button>
        <Link to={`/newReviews`}>Add a New Reviews</Link>
      </button>
      {!reviews.length ? (
        <h2>Loading ...</h2>
      ) : (
        <div className="Reviewstable">
          <div>
            <h3>Id</h3>
          </div>
          <div>
            <h3>comment</h3>
          </div>
          <div>
            <h3>rating</h3>
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

          {reviews.map((p: Reviews) => (
            <Fragment key={p.id}>
              <div>{p.id}</div>
              <div>{p.comment}</div>
              <div>{p.rating}</div>
              <div>{p.user_id}</div>
              <div>{p.product_id}</div>
              <div>{new Date(p.created_at).toLocaleString()}</div>
              <div>{new Date(p.updated_at).toLocaleString()}</div>
              <div>
                <button>
                  <Link to={`/editreviews/${p.id}`}>E</Link>
                </button>
              </div>
              <div>
                <button
                  onClick={async (e) => {
                    e.preventDefault();
                    const query = `
                      mutation deletereviews {
                        delete_reviews(where: {id: {_eq: ${p.id}}}) {
                          returning {
                            id
                          }
                        }
                      }
                    `;
                    console.log(query);
                    const { errors, data } = await executeQuery(
                      "deletereviews",
                      query
                    );
                    if (errors) {
                      console.error(errors);
                    }
                    console.log(data);
                    getReviews();
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
