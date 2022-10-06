import { useState } from "react";
import "./AddForm.css";
import { executeQuery } from "../../../Service/GraphQlService";

export default function CategoriesAddForm() {
  const [categories, setCategories] = useState({
    title: ""
  });
  return (
    <div className="categoriestAddForm">
      <form>
        <label
          id="categories-addform-title-label"
          data-testid="categories-addform-title-label"
          htmlFor="categories-addform-title"
        >
          title:
        </label>
        <input
          id="categories-addform-title"
          data-testid="categories-addform-title"
          type="text"
          autoComplete="categories-addform-title"
          aria-labelledby="categories-addform-title-label"
          aria-describedby="categories-addform-title-note"
          onChange={(e) => {
            setCategories({ ...categories, title: e.target.value });
          }}
        />
        <span
          id="categories-addform-title-note"
          data-testid="categories-addform-title-note"
        >
          The title for your categories
        </span>
        <br />
        <button
          onClick={async (e) => {
            e.preventDefault();
            console.log("Aqui esta tu categories", categories);
            const query = `
            # Consider giving this mutation a unique, descriptive
            # name in your application as a best practice
            mutation insertCategory {
              insert_categories(objects: {title: "${categories.title}"}) {
                returning {
                  id
                  created_at
                  title
                  updated_at
                }
              }
            }
          `;
            const { errors, data } = await executeQuery(
              "insertCategory",
              query
            );

            if (errors) {
              // handle those errors like a pro
              console.error(errors);
            }

            // do something great with this precious data
            console.log(data);
          }}
        >
          Save categories
        </button>
      </form>
    </div>
  );
}
