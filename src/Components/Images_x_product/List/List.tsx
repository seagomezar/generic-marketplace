import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { executeQuery } from "../../../Service/GraphQlService";
import "./List.css";

export default function ImagesXProductList() {
  const [imagesXProducts, setImagesXProducts] = useState([]);

  async function getImagesXProduct() {
    const query = `query getImagesXProduct {
      images_x_products {
        product_id
        imagen
        id
        updated_at
        created_at
      }
    }
    `;
    console.log(query);
    const { errors, data } = await executeQuery("getImagesXProduct", query);
    if (errors) {
      console.error(errors);
    }
    console.info(data.images_x_products);
    setImagesXProducts(data.images_x_products);
  }
  useEffect(() => {
    getImagesXProduct();
  }, []);
  return (
    <>
      <button>
        <Link to={`/newImageXProduct`}>Add a New Image X Product</Link>
      </button>
      {!imagesXProducts.length ? (
        <h2>Loading ...</h2>
      ) : (
        <div className="imagesXProductTable">
          <div>
            <h3>Id</h3>
          </div>
          <div>
            <h3>Product Id</h3>
          </div>
          <div>
            <h3>Image</h3>
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

          {imagesXProducts.map((p: Product) => (
            <Fragment key={p.id}>
              <div>{p.id}</div>
              <div>{p.product_id}</div>
              <div>{p.imagen}</div>
              <div>{new Date(p.created_at).toLocaleString()}</div>
              <div>{new Date(p.updated_at).toLocaleString()}</div>
              <div>
                <button>
                  <Link to={`/editImagesXProduct/${p.id}`}>E</Link>
                </button>
              </div>
              <div>
                <button
                  onClick={async (e) => {
                    e.preventDefault();
                    const query = `
                      mutation deleteImagesXProduct {
                        delete_images_x_products(where: {id: {_eq: ${p.id}}}) {
                          returning {
                            id
                          }
                        }
                      }
                    `;
                    console.log(query);
                    const { errors, data } = await executeQuery(
                      "deleteImagesXProduct",
                      query
                    );
                    if (errors) {
                      console.error(errors);
                    }
                    console.log(data);
                    getImagesXProduct();
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
