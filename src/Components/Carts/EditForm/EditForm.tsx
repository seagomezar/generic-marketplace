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

export default function CartsEditform() {
  const [Carts, setCarts] = useState({
    user_id: ""
  });

  let { id } = useParams();

  useEffect(() => {
    async function getcarts() {
      const query = `query getcarts {
        carts(where: {id: {_eq: ${id}}}) {
          user_id,

        }
      }
      `;
      console.log(query);
      const { errors, data } = await executeQuery("getcarts", query);
      if (errors) {
        console.error(errors);
      }
      console.info(data);
      setCarts(data.carts[0]);
    }
    getcarts();
  }, []);
  return (
    <div className="CartsEditform">
      <form>
        <label
          id="Carts-Editform-user_id-label"
          data-testid="Carts-Editform-user_id-label"
          htmlFor="Carts-Editform-user_id"
        >
          user_id:
        </label>
        <input
          id="Carts-Editform-user_id"
          data-testid="Carts-Editform-user_id"
          type="text"
          value={Carts.user_id}
          autoComplete="Carts-Editform-user_id"
          aria-labelledby="Carts-Editform-user_id-label"
          aria-describedby="Carts-Editform-user_id-note"
          onChange={(e) => {
            setCarts({ ...Carts, user_id: e.target.value });
          }}
        />
        <span
          id="Carts-Editform-user_id-note"
          data-testid="carts-Editform-user_id-note"
        >
          The user_id for your Carts
        </span>
        <br />
        <button
          onClick={async (e) => {
            e.preventDefault();
            console.log("Aqui esta tu Carts", Carts);
            const query = `mutation editCarts {
              update_carts(where: {id: {_eq: ${id}}}, _set: {
                user_id: ${Carts.user_id}
              }){
              returning {
                id
                updated_at
              }
            }
        }
            `;
            console.log(query);
            const { errors, data } = await executeQuery("editCarts", query);
            if (errors) {
              console.error(errors);
            }
            console.log(data);
          }}
        >
          Save Carts
        </button>
      </form>
    </div>
  );
}
