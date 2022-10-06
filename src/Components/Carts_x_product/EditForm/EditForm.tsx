import { useEffect, useState } from "react";
import { executeQuery } from "../../../Service/GraphQlService";
import { useParams } from "react-router-dom";
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

export default function Carts_x_productEditForm() {
  const [Carts_x_product, setCarts_x_product] = useState({
    cart_id: "",
    product_id: ""
  });
  let { id } = useParams();

  useEffect(() => {
    async function getCarts_x_products() {
      const query = `query getCarts_x_products {
        products_in_cart(where: {id: {_eq: ${id}}}) {
          cart_id,
          product_id

        }
      }
      `;
      console.log(query);
      const { errors, data } = await executeQuery("getCarts_x_products", query);
      if (errors) {
        console.error(errors);
      }
      console.info(data);
      setCarts_x_product(data.products_in_cart[0]);
    }
    getCarts_x_products();
  }, []);
  return (
    <div className="Carts_x_productEditForm">
      <form>
        <label
          id="Carts_x_product-EditForm-cart_id-label"
          data-testid="Carts_x_product-EditForm-cart_id-label"
          htmlFor="Carts_x_product-EditForm-cart_id"
        >
          cart_id:
        </label>
        <input
          id="Carts_x_product-EditForm-cart_id"
          data-testid="Carts_x_product-EditForm-cart_id"
          type="text"
          value={Carts_x_product.cart_id}
          autoComplete="Carts_x_product-EditForm-cart_id"
          aria-labelledby="Carts_x_product-EditForm-cart_id-label"
          aria-describedby="Carts_x_product-EditForm-cart_id-note"
          onChange={(e) => {
            setCarts_x_product({
              ...Carts_x_product,
              cart_id: e.target.value
            });
          }}
        />
        <span
          id="Carts_x_product-EditForm-cart_id-note"
          data-testid="Carts_x_product-EditForm-cart_id-note"
        >
          The cart_id for your Carts_x_product
        </span>
        <label
          id="Carts_x_product-EditForm-product_id-label"
          data-testid="Carts_x_product-EditForm-product_id-label"
          htmlFor="Carts_x_product-EditForm-product_id"
        >
          product_id:
        </label>
        <input
          id="Carts_x_product-EditForm-product_id"
          data-testid="Carts_x_product-EditForm-product_id"
          type="text"
          value={Carts_x_product.product_id}
          autoComplete="Carts_x_product-EditForm-product_id"
          aria-labelledby="Carts_x_product-EditForm-product_id-label"
          aria-describedby="Carts_x_product-EditForm-product_id-note"
          onChange={(e) => {
            setCarts_x_product({
              ...Carts_x_product,
              product_id: e.target.value
            });
          }}
        />
        <span
          id="Carts_x_product-EditForm-product_id-note"
          data-testid="Carts_x_product-EditForm-product_id-note"
        >
          The product_id for your Carts_x_product
        </span>
        <br />
        <button
          onClick={async (e) => {
            e.preventDefault();
            console.log("Aqui esta tu Carts_x_product", Carts_x_product);
            const query = `mutation editproducts_in_cart  {
              update_products_in_cart(where: {id: {_eq: ${id}}}, _set: {
                cart_id:${Carts_x_product.cart_id}
                product_id:${Carts_x_product.product_id}
               }) {
                returning {
                  id
                  updated_at
                }
              }
          }
            `;
            console.log(query);
            const { errors, data } = await executeQuery(
              "editproducts_in_cart",
              query
            );
            if (errors) {
              console.error(errors);
            }
            console.log(data);
          }}
        >
          Save Carts_x_product
        </button>
      </form>
    </div>
  );
}
