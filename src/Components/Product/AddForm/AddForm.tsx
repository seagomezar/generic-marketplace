import { useState } from "react";
import { executeQuery } from "../../../Service/GraphQlService";
import "./AddForm.css";

export default function ProductAddForm() {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
    rating_average: "",
    rating_count: "",
    current_stock: ""
  });

  return (
    <div className="ProductAddForm">
      <form>
        <label
          id="product-addform-title-label"
          data-testid="product-addform-title-title-label"
          htmlFor="product-addform-title"
        >
          Title:
        </label>
        <input
          id="product-addform-title"
          data-testid="product-addform-title"
          type="text"
          autoComplete="product-addform-title"
          aria-labelledby="product-addform-title-label"
          aria-describedby="product-addform-title-note"
          onChange={(e) => {
            setProduct({ ...product, title: e.target.value });
          }}
        />
        <span
          id="product-addform-title-note"
          data-testid="product-addform-title-note"
        >
          The title for your product
        </span>

        <label
          id="product-addform-description-label"
          data-testid="product-addform-description-label"
          htmlFor="product-addform-description"
        >
          Description:
        </label>
        <textarea
          id="product-addform-description"
          data-testid="product-addform-description"
          rows={10}
          cols={35}
          autoComplete="product-addform-description"
          aria-labelledby="product-addform-description-label"
          aria-describedby="product-addform-description-note"
          onChange={(e) => {
            setProduct({ ...product, description: e.target.value });
          }}
        />
        <span
          id="product-addform-description-note"
          data-testid="product-addform-description-note"
        >
          The description for your product
        </span>

        <label
          id="product-addform-price-label"
          data-testid="product-addform-price-label"
          htmlFor="product-addform-price"
        >
          price:
        </label>
        <input
          id="product-addform-price"
          data-testid="product-addform-price"
          type="text"
          autoComplete="product-addform-price"
          aria-labelledby="product-addform-price-label"
          aria-describedby="product-addform-price-note"
          onChange={(e) => {
            setProduct({ ...product, price: e.target.value });
          }}
        />
        <span
          id="product-addform-price-note"
          data-testid="product-addform-price-note"
        >
          The price for your product
        </span>

        <label
          id="product-addform-category-label"
          data-testid="product-addform-category-label"
          htmlFor="product-addform-category"
        >
          category:
        </label>
        <input
          id="product-addform-category"
          data-testid="product-addform-category"
          type="text"
          autoComplete="product-addform-category"
          aria-labelledby="product-addform-category-label"
          aria-describedby="product-addform-category-note"
          onChange={(e) => {
            setProduct({ ...product, category: e.target.value });
          }}
        />
        <span
          id="product-addform-category-note"
          data-testid="product-addform-category-note"
        >
          The category for your product
        </span>

        <label
          id="product-addform-image-label"
          data-testid="product-addform-image-label"
          htmlFor="product-addform-image"
        >
          image:
        </label>
        <input
          id="product-addform-image"
          data-testid="product-addform-image"
          type="text"
          autoComplete="product-addform-image"
          aria-labelledby="product-addform-image-label"
          aria-describedby="product-addform-image-note"
          onChange={(e) => {
            setProduct({ ...product, image: e.target.value });
          }}
        />
        <span
          id="product-addform-image-note"
          data-testid="product-addform-image-note"
        >
          The image for your product
        </span>

        <label
          id="product-addform-rantig_average-label"
          data-testid="product-addform-rantig_average-label"
          htmlFor="product-addform-rantig_average"
        >
          Rating Average:
        </label>
        <input
          id="product-addform-rantig_average"
          data-testid="product-addform-rantig_average"
          type="text"
          autoComplete="product-addform-rantig_average"
          aria-labelledby="product-addform-rantig_average-label"
          aria-describedby="product-addform-rantig_average-note"
          onChange={(e) => {
            setProduct({ ...product, rating_average: e.target.value });
          }}
        />
        <span
          id="product-addform-rantig_average-note"
          data-testid="product-addform-rantig_average-note"
        >
          The Rating Average for your product
        </span>

        <label
          id="product-addform-rantig_count-label"
          data-testid="product-addform-rantig_count-label"
          htmlFor="product-addform-rantig_count"
        >
          Rating Count:
        </label>
        <input
          id="product-addform-rantig_count"
          data-testid="product-addform-rantig_count"
          type="text"
          autoComplete="product-addform-rantig_count"
          aria-labelledby="product-addform-rantig_count-label"
          aria-describedby="product-addform-rantig_count-note"
          onChange={(e) => {
            setProduct({ ...product, rating_count: e.target.value });
          }}
        />
        <span
          id="product-addform-rantig_count-note"
          data-testid="product-addform-rantig_count-note"
        >
          The Rating Count for your product
        </span>

        <label
          id="product-addform-corrent_stock-label"
          data-testid="product-addform-corrent_stock-label"
          htmlFor="product-addform-corrent_stock"
        >
          Current Stock:
        </label>
        <input
          id="product-addform-corrent_stock"
          data-testid="product-addform-corrent_stock"
          type="text"
          autoComplete="product-addform-corrent_stock"
          aria-labelledby="product-addform-corrent_stock-label"
          aria-describedby="product-addform-corrent_stock-note"
          onChange={(e) => {
            setProduct({ ...product, current_stock: e.target.value });
          }}
        />
        <span
          id="product-addform-corrent_stock-note"
          data-testid="product-addform-corrent_stock-note"
        >
          The Current Stock for your product
        </span>
        <br />
        <button
          onClick={async (e) => {
            e.preventDefault();
            console.log("Aqui esta tu Product", product);
            const query = `mutation insertProduct  {
              insert_products_one(object: {
                  title: "${product.title}", 
                  rating_count: ${product.rating_count},
                  rating_average: ${product.rating_average},  
                  price: ${product.price}, 
                  image: "${product.image}", 
                  description: "${product.description}", 
                  current_stock: ${product.current_stock}, 
                  category: "${product.category}"
                }
              ) {
                id
              }
            }
            `;
            console.log(query);
            const { errors, data } = await executeQuery("insertProduct", query);
            if (errors) {
              console.error(errors);
            }
            console.log(data);
          }}
        >
          Save Product
        </button>
      </form>
    </div>
  );
}
