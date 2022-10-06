import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { executeQuery } from "../../../Service/GraphQlService";
import { ProductInCart } from "../ProductInCart";
import "./List.css";

export default function CartsXProductList() {
  const [products_in_cart, setCarts_x_products] = useState([]);

  async function getCarts_x_products() {
    const query = `query getCarts_x_products {
      products_in_cart {
        product_id
        cart_id
        id
        updated_at
        created_at
      }
    }
    `;
    console.log(query);
    const { errors, data } = await executeQuery("getCarts_x_products", query);
    if (errors) {
      console.error(errors);
    }
    console.info(data.products_in_cart);
    setCarts_x_products(data.products_in_cart);
  }
  useEffect(() => {
    getCarts_x_products();
  }, []);
  return (
    <>
      <button>
        <Link to={`/newproducts_in_cart`}>Add a New products_in_cart</Link>
      </button>
      {!products_in_cart.length ? (
        <h2>Loading ...</h2>
      ) : (
        <div className="CartsXProductTable">
          <div>
            <h3>Id</h3>
          </div>
          <div>
            <h3>Product Id</h3>
          </div>
          <div>
            <h3>Carts_id</h3>
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

          {products_in_cart.map((p: ProductInCart) => (
            <Fragment key={p.id}>
              <div>{p.id}</div>
              <div>{p.product_id}</div>
              <div>{p.cart_id}</div>
              <div>{new Date(p.created_at).toLocaleString()}</div>
              <div>{new Date(p.updated_at).toLocaleString()}</div>
              <div>
                <button>
                  <Link to={`/editCarts_x_products/${p.id}`}>E</Link>
                </button>
              </div>
              <div>
                <button
                  onClick={async (e) => {
                    e.preventDefault();
                    const query = `
                      mutation deleteproducts_in_cart {
                        delete_products_in_cart(where: {id: {_eq: ${p.id}}}) {
                          returning {
                            id
                          }
                        }
                      }
                    `;
                    console.log(query);
                    const { errors, data } = await executeQuery(
                      "deleteproducts_in_cart",
                      query
                    );
                    if (errors) {
                      console.error(errors);
                    }
                    console.log(data);
                    getCarts_x_products();
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
