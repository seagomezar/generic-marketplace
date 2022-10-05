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

export default function reviewsEditForm() {
  const [reviews, setReviews] = useState({
    comment: "",
    rating: "",
    product_id: "",
    user_id: ""
  });
  let { id } = useParams();

  useEffect(() => {
    async function getReviews() {
      const query = `query getReviews {
        reviews(where: {id: {_eq: ${id}}}) {
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
      console.info(data);
      setReviews(data.reviews[0]);
    }
    getReviews();
  }, []);

  return (
    <div className="reviewEditForm">
      <form>
        <label
          id="reviews-EditForm-comment-label"
          data-testid="reviews-EditForm-comment-label"
          htmlFor="reviews-EditForm-comment"
        >
          comment:
        </label>
        <input
          id="reviews-EditForm-comment"
          data-testid="reviews-EditForm-comment"
          type="text"
          value={reviews.comment}
          autoComplete="reviews-EditForm-comment"
          aria-labelledby="reviews-EditForm-comment-label"
          aria-describedby="reviews-EditForm-comment-note"
          onChange={(e) => {
            setReviews({ ...reviews, comment: e.target.value });
          }}
        />
        <span
          id="reviews-EditForm-comment-note"
          data-testid="reviews-EditForm-comment-note"
        >
          The comment for your reviews
        </span>
        <label
          id="reviews-EditForm-rating-label"
          data-testid="reviews-EditForm-rating-label"
          htmlFor="reviews-EditForm-rating"
        >
          rating:
        </label>
        <input
          id="reviews-EditForm-rating"
          data-testid="reviews-EditForm-rating"
          type="text"
          value={reviews.rating}
          autoComplete="reviews-EditForm-rating"
          aria-labelledby="reviews-EditForm-rating-label"
          aria-describedby="reviews-EditForm-rating-note"
          onChange={(e) => {
            setReviews({ ...reviews, rating: e.target.value });
          }}
        />
        <span
          id="reviews-EditForm-rating-note"
          data-testid="reviews-EditForm-rating-note"
        >
          The rating for your reviews
        </span>
        <label
          id="reviews-EditForm-product_id-label"
          data-testid="reviews-EditForm-product_id-label"
          htmlFor="reviews-EditForm-product_id"
        >
          product_id:
        </label>
        <input
          id="reviews-EditForm-product_id"
          data-testid="reviews-EditForm-product_id"
          type="text"
          value={reviews.product_id}
          autoComplete="reviews-EditForm-product_id"
          aria-labelledby="reviews-EditForm-product_id-label"
          aria-describedby="reviews-EditForm-product_id-note"
          onChange={(e) => {
            setReviews({ ...reviews, product_id: e.target.value });
          }}
        />
        <span
          id="reviews-EditForm-product_id-note"
          data-testid="reviews-EditForm-product_id-note"
        >
          The product_id for your reviews
        </span>
        <label
          id="reviews-EditForm-user_id-label"
          data-testid="reviews-EditForm-user_id-label"
          htmlFor="reviews-EditForm-user_id"
        >
          user_id:
        </label>
        <input
          id="reviews-EditForm-user_id"
          data-testid="reviews-EditForm-user_id"
          type="text"
          value={reviews.user_id}
          autoComplete="reviews-EditForm-user_id"
          aria-labelledby="reviews-EditForm-user_id-label"
          aria-describedby="reviews-EditForm-user_id-note"
          onChange={(e) => {
            setReviews({ ...reviews, user_id: e.target.value });
          }}
        />
        <span
          id="reviews-EditForm-user_id-note"
          data-testid="reviews-EditForm-user_id-note"
        >
          The user_id for your reviews
        </span>
        <br />
        <button
          onClick={async (e) => {
            e.preventDefault();
            console.log("Aqui esta tu reviews", reviews);
            const query = `mutation editreviews {
              update_reviews(where: {id: {_eq: ${id}}}, _set: {
                comment: ${reviews.comment}, 
                product_id: ${reviews.product_id}, 
                rating: ${reviews.rating}, 
                user_id: ${reviews.user_id}
              }){
              returning {
                id
                updated_at
              }
            }
          }
            `;
            console.log(query);
            const { errors, data } = await executeQuery("editreviews", query);
            if (errors) {
              console.error(errors);
            }
            console.log(data);
          }}
        >
          Save reviews
        </button>
      </form>
    </div>
  );
}
