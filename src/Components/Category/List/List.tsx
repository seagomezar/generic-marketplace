import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  getCategories,
  executeQuery,
} from '../../../Service/GraphQlService';
import { Category } from '../Category';
import './List.css';

export default function CategorytList() {
  const [category, setCategory] = useState([]);

  async function populateCategories() {
    const data = await getCategories();
    setCategory(data.categories);
  }
  useEffect(() => {
    populateCategories();
  }, []);
  return (
    <>
      <button>
        <Link to={`/newCategory`}>Add a New Category</Link>
      </button>
      {!category.length ? (
        <h2>Loading ...</h2>
      ) : (
        <div className="categoryTable">
          <div>
            <h3>Id</h3>
          </div>
          <div>
            <h3>title</h3>
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
          {category.map((p: Category) => (
            <Fragment key={p.id}>
              <div>{p.id}</div>
              <div>{p.title}</div>
              <div>{new Date(p.created_at).toLocaleString()}</div>
              <div>{new Date(p.updated_at).toLocaleString()}</div>
              <div>
                <button>
                  <Link to={`/editCategory/${p.id}`}>E</Link>
                </button>
              </div>
              <div>
                <button
                  onClick={async (e) => {
                    e.preventDefault();
                    const query = `
                      mutation delete_categories {
                        delete_categories(where: {id: {_eq: ${p.id}}}) {
                          returning {
                            id
                          }
                        }
                      }
                    `;
                    console.log(query);
                    const { errors, data } = await executeQuery(
                      'delete_categories',
                      query
                    );
                    if (errors) {
                      console.error(errors);
                    }
                    console.log(data);
                    populateCategories();
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
