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

export default function Carts_x_productAddForm() {
  const [Carts_x_product, setCarts_x_product] = useState({
    cart_id: "",
    product_id: ""
  });
  return (
    <div className="Carts_x_productAddForm">
      <form>
        <label
          id="Carts_x_product-addform-cart_id-label"
          data-testid="Carts_x_product-addform-cart_id-label"
          htmlFor="Carts_x_product-addform-cart_id"
        >
          cart_id:
        </label>
        <input
          id="Carts_x_product-addform-cart_id"
          data-testid="Carts_x_product-addform-cart_id"
          type="text"
          autoComplete="Carts_x_product-addform-cart_id"
          aria-labelledby="Carts_x_product-addform-cart_id-label"
          aria-describedby="Carts_x_product-addform-cart_id-note"
          onChange={(e) => {
            setCarts_x_product({
              ...Carts_x_product,
              cart_id: e.target.value
            });
          }}
        />
        <span
          id="Carts_x_product-addform-cart_id-note"
          data-testid="Carts_x_product-addform-cart_id-note"
        >
          The cart_id for your Carts_x_product
        </span>
        <label
          id="Carts_x_product-addform-product_id-label"
          data-testid="Carts_x_product-addform-product_id-label"
          htmlFor="Carts_x_product-addform-product_id"
        >
          product_id:
        </label>
        <input
          id="Carts_x_product-addform-product_id"
          data-testid="Carts_x_product-addform-product_id"
          type="text"
          autoComplete="Carts_x_product-addform-product_id"
          aria-labelledby="Carts_x_product-addform-product_id-label"
          aria-describedby="Carts_x_product-addform-product_id-note"
          onChange={(e) => {
            setCarts_x_product({
              ...Carts_x_product,
              product_id: e.target.value
            });
          }}
        />
        <span
          id="Carts_x_product-addform-product_id-note"
          data-testid="Carts_x_product-addform-product_id-note"
        >
          The product_id for your Carts_x_product
        </span>
        <br />
        <button
          onClick={async (e) => {
            e.preventDefault();
            console.log("Aqui esta tu Carts_x_product", Carts_x_product);
            const query = `mutation products_in_cart {
              insert_products_in_cart_one(object: {
                  cart_id: "${Carts_x_product.cart_id}",
                  product_id: "${Carts_x_product.product_id}" 
                } ) {
                    id
                    created_at
                    updated_at
                }
              }
          `;
            console.log(query);
            const { errors, data } = await executeQuery(
              "products_in_cart",
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
          Save Carts_x_product
        </button>
      </form>
    </div>
  );
}
