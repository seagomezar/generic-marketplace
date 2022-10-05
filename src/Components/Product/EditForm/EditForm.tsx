import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { executeQuery } from "../../../Service/GraphQlService";
import "./EditForm.css";

export default function ProductEditForm() {
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
  let { productId } = useParams();

  useEffect(() => {
    async function getProduct() {
      const query = `query getProducts {
        products(where: {id: {_eq: ${productId}}}) {
          category
          created_at
          current_stock
          description
          id
          image
          price
          rating_average
          rating_count
          title
          updated_at
        }
      }
      `;
      console.log(query);
      const { errors, data } = await executeQuery("getProducts", query);
      if (errors) {
        console.error(errors);
      }
      console.info(data);
      setProduct(data.products[0]);
    }
    getProduct();
  }, []);

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
          value={product.title}
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
          value={product.description}
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
          value={product.price}
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
          value={product.category}
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
          value={product.image}
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
          id="product-addform-rating_average-label"
          data-testid="product-addform-rating_average-label"
          htmlFor="product-addform-rating_average"
        >
          Rating Average:
        </label>
        <input
          id="product-addform-rating_average"
          data-testid="product-addform-rating_average"
          type="text"
          value={product.rating_average}
          autoComplete="product-addform-rating_average"
          aria-labelledby="product-addform-rating_average-label"
          aria-describedby="product-addform-rating_average-note"
          onChange={(e) => {
            setProduct({ ...product, rating_average: e.target.value });
          }}
        />
        <span
          id="product-addform-rating_average-note"
          data-testid="product-addform-rating_average-note"
        >
          The rating average for your product
        </span>

        <label
          id="product-addform-rating_count-label"
          data-testid="product-addform-rating_count-label"
          htmlFor="product-addform-rating_count"
        >
          rating_count:
        </label>
        <input
          id="product-addform-rating_count"
          data-testid="product-addform-rating_count"
          type="text"
          value={product.rating_count}
          autoComplete="product-addform-rating_count"
          aria-labelledby="product-addform-rating_count-label"
          aria-describedby="product-addform-rating_count-note"
          onChange={(e) => {
            setProduct({ ...product, rating_count: e.target.value });
          }}
        />
        <span
          id="product-addform-rating_count-note"
          data-testid="product-addform-rating_count-note"
        >
          The rating_count for your product
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
          value={product.current_stock}
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
            const query = `mutation editProduct  {
              update_products(where: {id: {_eq: ${productId} } }, _set: {
                  title: "${product.title}", 
                  rating_count: ${product.rating_count},
                  rating_average: ${product.rating_average},  
                  price: ${product.price}, 
                  image: "${product.image}", 
                  description: "${product.description}", 
                  current_stock: ${product.current_stock}, 
                  category: "${product.category}"
                }
              ) { returning {
                category
                created_at
                current_stock
                description
                id
                image
                price
                rating_average
                rating_count
                title
                updated_at
              }
            }
          }
            `;
            console.log(query);
            const { errors, data } = await executeQuery("editProduct", query);
            if (errors) {
              console.error(errors);
            }
            console.log(data);
          }}
        >
          Edit Product
        </button>
      </form>
    </div>
  );
}
