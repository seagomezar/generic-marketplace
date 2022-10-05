import { useEffect, useState } from "react";
import "./EditForm.css";
import { executeQuery } from "../../../Service/GraphQlService";
import { useParams } from "react-router-dom";

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

export default function ImagesXProductEditForm() {
  const [images_x_product, setimages_x_product] = useState({
    imagen: "",
    product_id: ""
  });

  let { id } = useParams();

  useEffect(() => {
    async function getProduct() {
      const query = `query getImageXProduct {
        images_x_products(where: {id: {_eq: ${id}}}) {
          product_id,
          imagen
        }
      }
      `;
      console.log(query);
      const { errors, data } = await executeQuery("getImageXProduct", query);
      if (errors) {
        console.error(errors);
      }
      console.info(data);
      setimages_x_product(data.images_x_products[0]);
    }
    getProduct();
  }, []);

  return (
    <div className="images_x_productEditForm">
      <form>
        <label
          id="images_x_product-EditForm-imagen-label"
          data-testid="images_x_product-EditForm-imagen-label"
          htmlFor="images_x_product-EditForm-imagen"
        >
          imagen:
        </label>
        <input
          id="images_x_product-EditForm-imagen"
          data-testid="images_x_product-EditForm-imagen"
          type="text"
          value={images_x_product.imagen}
          autoComplete="images_x_product-EditForm-imagen"
          aria-labelledby="images_x_product-EditForm-imagen-label"
          aria-describedby="images_x_product-EditForm-imagen-note"
          onChange={(e) => {
            setimages_x_product({
              ...images_x_product,
              imagen: e.target.value
            });
          }}
        />
        <span
          id="images_x_product-EditForm-imagen-note"
          data-testid="images_x_product-EditForm-imagen-note"
        >
          The imagen for your images_x_product
        </span>
        <label
          id="images_x_product-EditForm-product_id-label"
          data-testid="images_x_product-EditForm-product_id-label"
          htmlFor="images_x_product-EditForm-product_id"
        >
          product_id:
        </label>
        <input
          id="images_x_product-EditForm-product_id"
          data-testid="images_x_product-addform-product_id"
          type="text"
          value={images_x_product.product_id}
          autoComplete="images_x_product-EditForm-product_id"
          aria-labelledby="images_x_product-EditForm-product_id-label"
          aria-describedby="images_x_product-EditForm-product_id-note"
          onChange={(e) => {
            setimages_x_product({
              ...images_x_product,
              product_id: e.target.value
            });
          }}
        />
        <span
          id="images_x_product-EditForm-product_id-note"
          data-testid="images_x_product-EditForm-product_id-note"
        >
          The product_id for your images_x_product
        </span>
        <br />
        <button
          onClick={async (e) => {
            e.preventDefault();
            console.log("Aqui esta tu images_x_product", images_x_product);
            const query = `mutation editImagesXProduct  {
              update_images_x_products(where: {id: {_eq: ${id}}}, _set: {
                imagen: "${images_x_product.imagen}", 
                product_id: ${images_x_product.product_id}
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
              "editImagesXProduct",
              query
            );
            if (errors) {
              console.error(errors);
            }
            console.log(data);
          }}
        >
          Save images_x_product
        </button>
      </form>
    </div>
  );
}
