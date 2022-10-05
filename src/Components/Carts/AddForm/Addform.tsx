import { useState } from "react";
import { executeQuery } from "../../../Service/GraphQlService";
import "./AddForm.css";

export default function CartsAddForm() {
  const [Carts, setCarts] = useState({
    user_id: ""
  });
  return (
    <div className="CartsAddForm">
      <form>
        <label
          id="Carts-AddForm-user_id-label"
          data-testid="Carts-AddForm-user_id-label"
          htmlFor="Carts-AddForm-user_id"
        >
          user_id:
        </label>
        <input
          id="Carts-AddForm-user_id"
          data-testid="Carts-AddForm-user_id"
          type="text"
          autoComplete="Carts-AddForm-user_id"
          aria-labelledby="Carts-AddForm-user_id-label"
          aria-describedby="Carts-AddForm-user_id-note"
          onChange={(e) => {
            setCarts({ ...Carts, user_id: e.target.value });
          }}
        />
        <span
          id="Carts-AddForm-user_id-note"
          data-testid="carts-AddForm-user_id-note"
        >
          The user_id for your Carts
        </span>
        <br />
        <button
          onClick={async (e) => {
            e.preventDefault();
            console.log("Aqui esta tu Carts", Carts);
            const query = `mutation insertcarts {
              insert_carts(objects: {user_id: "${Carts.user_id}"}) {
                returning {
                  id
                  created_at
                  user_id
                  updated_at
                }
              }
            }
          `;
            console.log(query);
            const { errors, data } = await executeQuery("insertcarts", query);

            if (errors) {
              // handle those errors like a pro
              console.error(errors);
            }

            // do something great with this precious data
            console.log(data);
          }}
        >
          Save Carts
        </button>
      </form>
    </div>
  );
}
