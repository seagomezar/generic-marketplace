import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { executeQuery } from "../../../Service/GraphQlService";
import "./List.css";

export default function UserList() {
  const [user, setUser] = useState([]);

  async function getUser() {
    const query = `query getUser {
      users {
        address_city
        address_number
        address_street
        address_zipcode
        created_at
        email
        firstname
        id
        imagen
        lastname
        lat
        long
       
      }
    }
    `;
    console.log(query);
    const { errors, data } = await executeQuery("getUser", query);
    if (errors) {
      console.error(errors);
    }
    console.info(data.users);
    setUser(data.users);
  }
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <button>
        <Link to={`/newUser`}>Add a New User</Link>
      </button>
      {!user.length ? (
        <h2>Loading ...</h2>
      ) : (
        <div className="usertable">
          <div>
            <h3>Id</h3>
          </div>
          <div>
            <h3>address_city</h3>
          </div>
          <div>
            <h3>address_number</h3>
          </div>
          <div>
            <h3>address_street</h3>
          </div>
          <div>
            <h3>address_zipcode</h3>
          </div>
          <div>
            <h3>email</h3>
          </div>
          <div>
            <h3>firstname</h3>
          </div>
          <div>
            <h3>imagen</h3>
          </div>
          <div>
            <h3>lastname</h3>
          </div>
          <div>
            <h3>lat</h3>
          </div>
          <div>
            <h3>long</h3>
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

          {user.map((p: User) => (
            <Fragment key={p.id}>
              <div>{p.id}</div>
              <div>{p.address_city}</div>
              <div>{p.address_number}</div>
              <div>{p.address_street}</div>
              <div>{p.address_zipcode}</div>
              <div>{p.email}</div>
              <div>{p.firstname}</div>
              <div>{p.imagen}</div>
              <div>{p.lastname}</div>
              <div>{p.lat}</div>
              <div>{p.long}</div>
              <div>{new Date(p.created_at).toLocaleString()}</div>
              <div>{new Date(p.updated_at).toLocaleString()}</div>
              <div>
                <button>
                  <Link to={`/edituser/${p.id}`}>E</Link>
                </button>
              </div>
              <div>
                <button
                  onClick={async (e) => {
                    e.preventDefault();
                    const query = `
                      mutation deleteusers {
                        delete_users(where: {id: {_eq: ${p.id}}}) {
                          returning {
                            id
                          }
                        }
                      }
                    `;
                    console.log(query);
                    const { errors, data } = await executeQuery(
                      "deleteusers",
                      query
                    );
                    if (errors) {
                      console.error(errors);
                    }
                    console.log(data);
                    getUser();
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
