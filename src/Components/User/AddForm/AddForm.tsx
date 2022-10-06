import { useState } from "react";
import { executeQuery } from "../../../Service/GraphQlService";
import "./AddForm.css";

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

export default function UserAddForm() {
  const [user, setUser] = useState({
    Lat: "",
    Long: "",
    Address_City: "",
    Address_street: "",
    Address_number: "",
    Address_zipcode: "",
    Email: "",
    Username: "",
    Password: "",
    Firstname: "",
    Lastname: "",
    phone: "",
    imagen: ""
  });

  return (
    <div className="UserAddForm">
      <form>
        <label
          id="User-addForm-lat-label"
          data-testid="User-addForm-lat-label"
          htmlFor="User-addForm-lat"
        >
          lat:
        </label>
        <input
          id="User-addForm-lat"
          data-testid="User-addForm-lat"
          type="text"
          autoComplete="User-addForm-lat"
          aria-labelledby="User-addForm-lat-label"
          aria-describedby="User-addForm-lat-note"
          onChange={(e) => {
            setUser({ ...user, Lat: e.target.value });
          }}
        />
        <span id="User-addForm-lat-note" data-testid="User-addForm-lat-note">
          The lat for your User
        </span>

        <label
          id="User-addForm-Long-label"
          data-testid="User-addForm-Long-label"
          htmlFor="User-addForm-Long"
        >
          Long:
        </label>
        <input
          id="User-addForm-Long"
          data-testid="User-addForm-Long"
          type="text"
          autoComplete="User-addForm-Long"
          aria-labelledby="User-addForm-Long-label"
          aria-describedby="User-addForm-Long-note"
          onChange={(e) => {
            setUser({ ...user, Long: e.target.value });
          }}
        />
        <span id="User-addForm-Long-note" data-testid="User-addForm-Long-note">
          The Long for your User
        </span>

        <label
          id="User-addform-Address_City-label"
          data-testid="User-addform-Address_City-label"
          htmlFor="User-addform-Address_City"
        >
          Address_City:
        </label>
        <input
          id="User-addform-Address_City"
          data-testid="User-addform-Address_City"
          type="text"
          autoComplete="User-addform-Address_City"
          aria-labelledby="User-addform-Address_City-label"
          aria-describedby="User-addform-Address_City-note"
          onChange={(e) => {
            setUser({ ...user, Address_City: e.target.value });
          }}
        />
        <span
          id="User-addform-Address_City-note"
          data-testid="User-addform-Address_City-note"
        >
          The Address_City for your User
        </span>

        <label
          id="User-addform-Address_street-label"
          data-testid="User-addform-Address_street-label"
          htmlFor="User-addform-Address_street"
        >
          Address_street:
        </label>
        <input
          id="User-addform-Address_street"
          data-testid="User-addform-Address_street"
          type="text"
          autoComplete="User-addform-Address_street"
          aria-labelledby="User-addform-Address_street-label"
          aria-describedby="User-addform-Address_street-note"
          onChange={(e) => {
            setUser({ ...user, Address_street: e.target.value });
          }}
        />
        <span
          id="User-addform-Address_street-note"
          data-testid="User-addform-Address_street-note"
        >
          The Address_street for your User
        </span>

        <label
          id="User-addform-Address_number-label"
          data-testid="User-addform-Address_number-label"
          htmlFor="User-addform-Address_number"
        >
          Address_number:
        </label>
        <input
          id="User-addform-Address_number"
          data-testid="User-addform-Address_number"
          type="text"
          autoComplete="User-addform-Address_number"
          aria-labelledby="User-addform-Address_number-label"
          aria-describedby="User-addform-Address_number-note"
          onChange={(e) => {
            setUser({ ...user, Address_number: e.target.value });
          }}
        />
        <span
          id="User-addform-Address_number-note"
          data-testid="User-addform-Address_number-note"
        >
          The Address_number for your User
        </span>

        <label
          id="User-addform-Address_zipcode-label"
          data-testid="User-addform-Address_zipcode-label"
          htmlFor="User-addform-Address_zipcode"
        >
          Address_zipcode:
        </label>
        <input
          id="User-addform-Address_zipcode"
          data-testid="User-addform-Address_zipcode"
          type="text"
          autoComplete="User-addform-Address_zipcode"
          aria-labelledby="User-addform-Address_zipcode-label"
          aria-describedby="User-addform-Address_zipcode-note"
          onChange={(e) => {
            setUser({ ...user, Address_zipcode: e.target.value });
          }}
        />
        <span
          id="User-addform-Address_zipcode-note"
          data-testid="User-addform-Address_zipcode-note"
        >
          The Address_zipcode for your User
        </span>

        <label
          id="User-addform-Email-label"
          data-testid="User-addform-Email-label"
          htmlFor="User-addform-Email"
        >
          Email:
        </label>
        <input
          id="User-addform-Email"
          data-testid="User-addform-Email"
          type="text"
          autoComplete="User-addform-Email"
          aria-labelledby="User-addform-Email-label"
          aria-describedby="User-addform-Email-note"
          onChange={(e) => {
            setUser({ ...user, Email: e.target.value });
          }}
        />
        <span
          id="User-addform-Email-note"
          data-testid="User-addform-Email-note"
        >
          The Email for your User
        </span>

        <label
          id="User-addform-Username-label"
          data-testid="User-addform-Username-label"
          htmlFor="User-addform-Username"
        >
          Username:
        </label>
        <input
          id="User-addform-Username"
          data-testid="User-addform-Username"
          type="text"
          autoComplete="User-addform-Username"
          aria-labelledby="User-addform-Username-label"
          aria-describedby="User-addform-Username-note"
          onChange={(e) => {
            setUser({ ...user, Username: e.target.value });
          }}
        />
        <span
          id="User-addform-Username-note"
          data-testid="User-addform-Username-note"
        >
          The Username for your User
        </span>

        <label
          id="User-addform-Password-label"
          data-testid="User-addform-Password-label"
          htmlFor="User-addform-Password"
        >
          Password:
        </label>
        <input
          id="User-addform-Password"
          data-testid="User-addform-Password"
          type="text"
          autoComplete="User-addform-Password"
          aria-labelledby="User-addform-Password-label"
          aria-describedby="User-addform-Password-note"
          onChange={(e) => {
            setUser({ ...user, Password: e.target.value });
          }}
        />
        <span
          id="User-addform-Password-note"
          data-testid="User-addform-Password-note"
        >
          The Password for your User
        </span>

        <label
          id="User-addform-Firstname-label"
          data-testid="User-addform-Firstname-label"
          htmlFor="User-addform-Firstname"
        >
          Firstname:
        </label>
        <input
          id="User-addform-Firstname"
          data-testid="User-addform-Firstname"
          type="text"
          autoComplete="User-addform-Firstname"
          aria-labelledby="User-addform-Firstname-label"
          aria-describedby="User-addform-Firstname-note"
          onChange={(e) => {
            setUser({ ...user, Firstname: e.target.value });
          }}
        />
        <span
          id="User-addform-Firstname-note"
          data-testid="User-addform-Firstname-note"
        >
          The Firstname for your User
        </span>

        <label
          id="User-addform-Lastname-label"
          data-testid="User-addform-Lastname-label"
          htmlFor="User-addform-Lastname"
        >
          Lastname:
        </label>
        <input
          id="User-addform-Lastname"
          data-testid="User-addform-Lastname"
          type="text"
          autoComplete="User-addform-Lastname"
          aria-labelledby="User-addform-Lastname-label"
          aria-describedby="User-addform-Lastname-note"
          onChange={(e) => {
            setUser({ ...user, Lastname: e.target.value });
          }}
        />
        <span
          id="User-addform-Lastname-note"
          data-testid="User-addform-Lastname-note"
        >
          The Lastname for your User
        </span>

        <label
          id="User-addform-phone-label"
          data-testid="User-addform-phone-label"
          htmlFor="User-addform-phone"
        >
          phone:
        </label>
        <input
          id="User-addform-phone"
          data-testid="User-addform-phone"
          type="text"
          autoComplete="User-addform-phone"
          aria-labelledby="User-addform-phone-label"
          aria-describedby="User-addform-phone-note"
          onChange={(e) => {
            setUser({ ...user, phone: e.target.value });
          }}
        />
        <span
          id="User-addform-phone-note"
          data-testid="User-addform-phone-note"
        >
          The phone for your User
        </span>

        <label
          id="User-addform-imagen-label"
          data-testid="User-addform-imagen-label"
          htmlFor="User-addform-imagen"
        >
          imagen:
        </label>
        <input
          id="User-addform-imagen"
          data-testid="User-addform-imagen"
          type="text"
          autoComplete="User-addform-imagen"
          aria-labelledby="User-addform-imagen-label"
          aria-describedby="User-addform-imagen-note"
          onChange={(e) => {
            setUser({ ...user, imagen: e.target.value });
          }}
        />
        <span
          id="User-addform-imagen-note"
          data-testid="User-addform-imagen-note"
        >
          The imagen for your User
        </span>
        <br />
        <button
          onClick={async (e) => {
            e.preventDefault();
            console.log("Aqui esta tu user", user);
            const query = `mutation insertusers {
              insert_users_one(object: {
              address_city: "${user.Address_City}", 
              address_number: "${user.Address_number}", 
              address_street: "${user.Address_street}", 
              address_zipcode: "${user.Address_zipcode}", 
              email: "${user.Email}", 
              firstname: "${user.Firstname}", 
              username: "${user.Username}", 
              phone: "${user.phone}", 
              password: "${user.Password}", 
              long: "${user.Long}", 
              lat: "${user.Lat}",
              lastname: "${user.Lastname}", 
              imagen: "${user.imagen}"
            }
              ) {
                  id
                  created_at
                  updated_at
              }
            }
          `;
            console.log(query);
            const { errors, data } = await executeQuery("insertusers", query);

            if (errors) {
              // handle those errors like a pro
              console.error(errors);
            }

            // do something great with this precious data
            console.log(data);
          }}
        >
          Save User
        </button>
      </form>
    </div>
  );
}
