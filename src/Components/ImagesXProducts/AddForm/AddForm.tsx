import { useState } from "react";
import { executeQuery } from "../../../Service/GraphQlService";
import "./AddForm.css";

export default function ImagesXProductsAddForm() {
  const [images_x_product, setImages_x_Product] = useState({
    image: "",
    product_id: ""
  });
  return (
    <div className="images_x_productAddForm">
      <form>
        <label
          id="images_x_product-addform-image-label"
          data-testid="images_x_product-addform-image-label"
          htmlFor="images_x_product-addform-image"
        >
          image:
        </label>
        <input
          id="images_x_product-addform-image"
          data-testid="images_x_product-addform-image"
          type="text"
          autoComplete="images_x_product-addform-image"
          aria-labelledby="images_x_product-addform-image-label"
          aria-describedby="images_x_product-addform-image-note"
          onChange={(e) => {
            setImages_x_Product({
              ...images_x_product,
              image: e.target.value
            });
          }}
        />
        <span
          id="images_x_product-addform-image-note"
          data-testid="images_x_product-addform-image-note"
        >
          The image for your images_x_product
        </span>
        <label
          id="images_x_product-addform-product_id-label"
          data-testid="images_x_product-addform-product_id-label"
          htmlFor="images_x_product-addform-product_id"
        >
          product_id:
        </label>
        <input
          id="images_x_product-addform-product_id"
          data-testid="images_x_product-addform-product_id"
          type="text"
          autoComplete="images_x_product-addform-product_id"
          aria-labelledby="images_x_product-addform-product_id-label"
          aria-describedby="images_x_product-addform-product_id-note"
          onChange={(e) => {
            setImages_x_Product({
              ...images_x_product,
              product_id: e.target.value
            });
          }}
        />
        <span
          id="images_x_product-addform-product_id-note"
          data-testid="images_x_product-addform-product_id-note"
        >
          The product_id for your images_x_product
        </span>
        <br />
        <button
          onClick={async (e) => {
            e.preventDefault();
            console.log("Aqui esta tu Images_X_Product", images_x_product);
            const query = `mutation insertImagesXProduct {
              insert_images_x_product_one(object:{
               image: ${images_x_product.image},
               product_id: ${images_x_product.product_id},
              }
              ) {
                id
              }
            }
          `;
            console.log(query);
            const { errors, data } = await executeQuery(
              "insertImagesXProduct",
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
          Save Images_x_product
        </button>
      </form>
    </div>
  );
}
