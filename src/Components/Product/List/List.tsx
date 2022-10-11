import { Fragment, useEffect, useState } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import {
  executeQuery,
  getProducts,
} from '../../../Service/GraphQlService';
import { Product } from '../Product';
import './List.css';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  async function populateProducts() {
    const dataProducts = await getProducts();
    setProducts(dataProducts.products);
  }
  useEffect(() => {
    populateProducts();
  }, []);
  return (
    <>
      <button>
        <Link to={`/new-product`}>Add a New Product</Link>
      </button>
      {!products.length ? (
        <h2>Loading ...</h2>
      ) : (
        <div className="table">
          <div>
            <h3>Id</h3>
          </div>
          <div>
            <h3>Category</h3>
          </div>
          <div>
            <h3>Title</h3>
          </div>
          <div>
            <h3>Description</h3>
          </div>
          <div>
            <h3>Price</h3>
          </div>
          <div>
            <h3>Image</h3>
          </div>
          <div>
            <h3>Current Stock</h3>
          </div>
          <div>
            <h3>Rating Average</h3>
          </div>
          <div>
            <h3>Rating Count</h3>
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

          {products.map((p: Product) => (
            <Fragment key={p.id}>
              <div>{p.id}</div>
              <div>{p.category}</div>
              <div>{p.title}</div>
              <div>{p.description}</div>
              <div>${p.price}</div>
              <div>{p.image}</div>
              <div>{p.current_stock}</div>
              <div>{p.rating_average}</div>
              <div>{p.rating_count}</div>
              <div>{new Date(p.created_at).toLocaleString()}</div>
              <div>{new Date(p.updated_at).toLocaleString()}</div>
              <div>
                <button>
                  <Link to={`/editProduct/${p.id}`}>E</Link>
                </button>
              </div>
              <div>
                <button
                  onClick={async (e) => {
                    e.preventDefault();
                    const query = `
                      mutation deleteProduct {
                        delete_products(where: {id: {_eq: ${p.id}}}) {
                          returning {
                            id
                          }
                        }
                      }
                    `;
                    console.log(query);
                    const { errors, data } = await executeQuery(
                      'deleteProduct',
                      query
                    );
                    if (errors) {
                      console.error(errors);
                    }
                    console.log(data);
                    getProducts();
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
