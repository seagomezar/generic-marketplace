import { useEffect, useState } from "react";
import { executeQuery } from "../../../Service/GraphQlService";
import { useParams } from "react-router-dom";
import "./EditForm.css";

/*
category: String!
created_at: timestamptz!
current_stock: numeric
description: String!
id: Int!
image: String!
price: numeric!
rating_average: numeric!
rating_count: numeric!
title: String!
updated_at: timestamptz!
*/

export default function CategoriesEditForm() {
  const [categories, setcategories] = useState({
    title: ""
  });

  let { id } = useParams();

  useEffect(() => {
    async function getProduct() {
      const query = `query getCategory {
        categories(where: {id: {_eq: ${id}}}) {
          title,

        }
      }
      `;
      console.log(query);
      const { errors, data } = await executeQuery("getCategory", query);
      if (errors) {
        console.error(errors);
      }
      console.info(data);
      setcategories(data.categories[0]);
    }
    getProduct();
  }, []);
  return (
    <div className="categoriesEditForm">
      <form>
        <label
          id="categories-EditForm-title-label"
          data-testid="categories-EditForm-title-label"
          htmlFor="categories-EditForm-title"
        >
          title:
        </label>
        <input
          id="categories-EditForm-title"
          data-testid="categories-EditForm-title"
          type="text"
          value={categories.title}
          autoComplete="categories-EditForm-title"
          aria-labelledby="categories-EditForm-title-label"
          aria-describedby="categories-EditForm-title-note"
          onChange={(e) => {
            setcategories({ ...categories, title: e.target.value });
          }}
        />
        <span
          id="categories-EditForm-title-note"
          data-testid="categories-EditForm-title-note"
        >
          The title for your categories
        </span>
        <br />
        <button
          onClick={async (e) => {
            e.preventDefault();
            console.log("Aqui esta tu Category", categories);
            const query = `mutation editCategory  {
            update_categories(where: {id: {_eq: ${id}}}, _set: {
              title: "${categories.title}"
            }){
                returning {
                  id
                  updated_at
                }
              }
          }
            `;
            console.log(query);
            const { errors, data } = await executeQuery("editCategory", query);
            if (errors) {
              console.error(errors);
            }
            console.log(data);
          }}
        >
          Save categories
        </button>
      </form>
    </div>
  );
}
