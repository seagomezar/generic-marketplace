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

export default function ReviewsAddForm() {
  const [Reviews, setReviews] = useState({
    comment: "",
    rating: "",
    product_id: "",
    user_id: ""
  });
  return (
    <div className="reviewsAddForm">
      <form>
        <label
          id="reviews-addform-comment-label"
          data-testid="reviews-addform-comment-label"
          htmlFor="reviews-addform-comment"
        >
          comment:
        </label>
        <input
          id="reviews-addform-comment"
          data-testid="reviews-addform-comment"
          type="text"
          autoComplete="reviews-addform-comment"
          aria-labelledby="reviews-addform-comment-label"
          aria-describedby="reviews-addform-comment-note"
          onChange={(e) => {
            setReviews({ ...Reviews, comment: e.target.value });
          }}
        />
        <span
          id="reviews-addform-comment-note"
          data-testid="reviews-addform-comment-note"
        >
          The comment for your Reviews
        </span>
        <label
          id="reviews-addform-rating-label"
          data-testid="reviews-addform-rating-label"
          htmlFor="reviews-addform-rating"
        >
          rating:
        </label>
        <input
          id="reviews-addform-rating"
          data-testid="reviews-addform-rating"
          type="text"
          autoComplete="reviews-addform-rating"
          aria-labelledby="reviews-addform-rating-label"
          aria-describedby="reviews-addform-rating-note"
          onChange={(e) => {
            setReviews({ ...Reviews, rating: e.target.value });
          }}
        />
        <span
          id="reviews-addform-rating-note"
          data-testid="reviews-addform-rating-note"
        >
          The rating for your Reviews
        </span>
        <label
          id="reviews-addform-product_id-label"
          data-testid="reviews-addform-product_id-label"
          htmlFor="reviews-addform-product_id"
        >
          product_id:
        </label>
        <input
          id="reviews-addform-product_id"
          data-testid="reviews-addform-product_id"
          type="text"
          autoComplete="reviews-addform-product_id"
          aria-labelledby="reviews-addform-product_id-label"
          aria-describedby="reviews-addform-product_id-note"
          onChange={(e) => {
            setReviews({ ...Reviews, product_id: e.target.value });
          }}
        />
        <span
          id="reviews-addform-product_id-note"
          data-testid="reviews-addform-product_id-note"
        >
          The product_id for your Reviews
        </span>
        <label
          id="reviews-addform-user_id-label"
          data-testid="reviews-addform-user_id-label"
          htmlFor="reviews-addform-user_id"
        >
          user_id:
        </label>
        <input
          id="reviews-addform-user_id"
          data-testid="reviews-addform-user_id"
          type="text"
          autoComplete="reviews-addform-user_id"
          aria-labelledby="reviews-addform-user_id-label"
          aria-describedby="reviews-addform-user_id-note"
          onChange={(e) => {
            setReviews({ ...Reviews, user_id: e.target.value });
          }}
        />
        <span
          id="reviews-addform-user_id-note"
          data-testid="reviews-addform-user_id-note"
        >
          The user_id for your Reviews
        </span>
        <br />
        <button
          onClick={async (e) => {
            e.preventDefault();
            console.log("Aqui esta tu Reviews", Reviews);
            const query = `mutation insertReviews {
              insert_reviews_one(object: {
                comment: ${Reviews.comment},
               product_id: ${Reviews.product_id}, 
               rating: ${Reviews.rating}, 
               user_id:${Reviews.user_id},
            }
              ) {
                id
              }
            }
          `;
            console.log(query);
            const { errors, data } = await executeQuery("insertReviews", query);

            if (errors) {
              // handle those errors like a pro
              console.error(errors);
            }

            // do something great with this precious data
            console.log(data);
          }}
        >
          Save Reviews
        </button>
      </form>
    </div>
  );
}
