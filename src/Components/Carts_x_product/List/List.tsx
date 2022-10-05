import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { executeQuery } from "../../../Service/GraphQlService";
import "./List.css";

export default function CartsXProductList() {
  const [carts_x_products, setCarts_x_products] = useState([]);

  async function getCarts_x_products() {
    const query = `query getCarts_x_products {
      carts_x_products {
        product_id
        carts_id
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
    console.info(data.carts_x_products);
    setCarts_x_products(data.carts_x_products);
  }
  useEffect(() => {
    getCarts_x_products();
  }, []);
  return (
    <>
      <button>
        <Link to={`/newcarts_x_products`}>Add a New carts_x_products</Link>
      </button>
      {!carts_x_products.length ? (
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

          {carts_x_products.map((p: Product) => (
            <Fragment key={p.id}>
              <div>{p.id}</div>
              <div>{p.product_id}</div>
              <div>{p.carts_id}</div>
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
                      mutation deletecarts_x_products {
                        delete_carts_x_products(where: {id: {_eq: ${p.id}}}) {
                          returning {
                            id
                          }
                        }
                      }
                    `;
                    console.log(query);
                    const { errors, data } = await executeQuery(
                      "deletecarts_x_products",
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
