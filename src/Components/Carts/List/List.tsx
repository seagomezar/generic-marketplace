import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { executeQuery } from "../../../Service/GraphQlService";
import { Cart } from "../Carts";
import "./List.css";

export default function CartstList() {
  const [carts, setCarts] = useState([]);

  async function getCarts() {
    const query = `query getCarts {
      carts {
        id
        user_id
        updated_at
        created_at
      }
    }
    `;
    console.log(query);
    const { errors, data } = await executeQuery("getCarts", query);
    if (errors) {
      console.error(errors);
    }
    console.info(data.carts);
    setCarts(data.carts);
  }
  useEffect(() => {
    getCarts();
  }, []);
  return (
    <>
      <button>
        <Link to={`/newCarts`}>Add a New Carts</Link>
      </button>
      {!carts.length ? (
        <h2>Loading ...</h2>
      ) : (
        <div className="CartsTable">
          <div>
            <h3>Id</h3>
          </div>
          <div>
            <h3>user_id</h3>
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
          {carts.map((p: Cart) => (
            <Fragment key={p.id}>
              <div>{p.id}</div>
              <div>{p.user_id}</div>
              <div>{new Date(p.created_at).toLocaleString()}</div>
              <div>{new Date(p.updated_at).toLocaleString()}</div>
              <div>
                <button>
                  <Link to={`/editcarts/${p.id}`}>E</Link>
                </button>
              </div>
              <div>
                <button
                  onClick={async (e) => {
                    e.preventDefault();
                    const query = `
                      mutation delete_carts {
                        delete_carts(where: {id: {_eq: ${p.id}}}) {
                          returning {
                            id
                          }
                        }
                      }
                    `;
                    console.log(query);
                    const { errors, data } = await executeQuery(
                      "delete_carts",
                      query
                    );
                    if (errors) {
                      console.error(errors);
                    }
                    console.log(data);
                    getCarts();
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
