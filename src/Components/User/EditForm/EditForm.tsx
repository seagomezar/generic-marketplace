import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { executeQuery } from "../../../Service/GraphQlService";
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

export default function UserEditForm() {
  const [User, setUser] = useState({
    lat: "",
    long: "",
    address_city: "",
    address_street: "",
    address_number: "",
    address_zipcode: "",
    email: "",
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    phone: "",
    imagen: ""
  });
  let { id } = useParams();

  useEffect(() => {
    async function getUser() {
      const query = `query getUser {
        users(where: {id: {_eq: ${id}}}) {
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
            password
            phone
            updated_at
            username
          }
      }
      `;
      console.log(query);
      const { errors, data } = await executeQuery("getUser", query);
      if (errors) {
        console.error(errors);
      }
      console.info(data.users[0]);
      setUser(data.users[0]);
    }
    getUser();
  }, []);

  return (
    <div className="UserEditform">
      <form>
        <label
          id="User-Editform-lat-label"
          data-testid="User-Editform-lat-label"
          htmlFor="User-Editform-lat"
        >
          lat:
        </label>
        <input
          id="User-Editform-lat"
          data-testid="User-Editform-lat"
          type="text"
          value={User.lat}
          autoComplete="User-Editform-lat"
          aria-labelledby="User-Editform-lat-label"
          aria-describedby="User-Editform-lat-note"
          onChange={(e) => {
            setUser({ ...User, lat: e.target.value });
          }}
        />
        <span id="User-Editform-lat-note" data-testid="User-Editform-lat-note">
          The lat for your User
        </span>

        <label
          id="User-Editform-Long-label"
          data-testid="User-Editform-Long-label"
          htmlFor="User-Editform-Long"
        >
          Long:
        </label>
        <input
          id="User-Editform-Long"
          data-testid="User-Editform-Long"
          type="text"
          value={User.long}
          autoComplete="User-Editform-Long"
          aria-labelledby="User-Editform-Long-label"
          aria-describedby="User-Editform-Long-note"
          onChange={(e) => {
            setUser({ ...User, long: e.target.value });
          }}
        />
        <span
          id="User-Editform-Long-note"
          data-testid="User-Editform-Long-note"
        >
          The Long for your User
        </span>

        <label
          id="User-Editform-Address_City-label"
          data-testid="User-Editform-Address_City-label"
          htmlFor="User-Editform-Address_City"
        >
          Address_City:
        </label>
        <input
          id="User-Editform-Address_City"
          data-testid="User-Editform-Address_City"
          type="text"
          value={User.address_city}
          autoComplete="User-Editform-Address_City"
          aria-labelledby="User-Editform-Address_City-label"
          aria-describedby="User-Editform-Address_City-note"
          onChange={(e) => {
            setUser({ ...User, address_city: e.target.value });
          }}
        />
        <span
          id="User-Editform-Address_City-note"
          data-testid="User-Editform-Address_City-note"
        >
          The Address_City for your User
        </span>

        <label
          id="User-Editform-Address_street-label"
          data-testid="User-Editform-Address_street-label"
          htmlFor="User-Editform-Address_street"
        >
          Address_street:
        </label>
        <input
          id="User-Editform-Address_street"
          data-testid="User-Editform-Address_street"
          type="text"
          value={User.address_street}
          autoComplete="User-Editform-Address_street"
          aria-labelledby="User-Editform-Address_street-label"
          aria-describedby="User-Editform-Address_street-note"
          onChange={(e) => {
            setUser({ ...User, address_street: e.target.value });
          }}
        />
        <span
          id="User-Editform-Address_street-note"
          data-testid="User-Editform-Address_street-note"
        >
          The Address_street for your User
        </span>

        <label
          id="User-Editform-Address_number-label"
          data-testid="User-Editform-Address_number-label"
          htmlFor="User-Editform-Address_number"
        >
          Address_number:
        </label>
        <input
          id="User-Editform-Address_number"
          data-testid="User-Editform-Address_number"
          type="text"
          value={User.address_number}
          autoComplete="User-Editform-Address_number"
          aria-labelledby="User-Editform-Address_number-label"
          aria-describedby="User-Editform-Address_number-note"
          onChange={(e) => {
            setUser({ ...User, address_number: e.target.value });
          }}
        />
        <span
          id="User-Editform-Address_number-note"
          data-testid="User-Editform-Address_number-note"
        >
          The Address_number for your User
        </span>

        <label
          id="User-Editform-Address_zipcode-label"
          data-testid="User-Editform-Address_zipcode-label"
          htmlFor="User-Editform-Address_zipcode"
        >
          Address_zipcode:
        </label>
        <input
          id="User-Editform-Address_zipcode"
          data-testid="User-Editform-Address_zipcode"
          type="text"
          value={User.address_zipcode}
          autoComplete="User-Editform-Address_zipcode"
          aria-labelledby="User-Editform-Address_zipcode-label"
          aria-describedby="User-Editform-Address_zipcode-note"
          onChange={(e) => {
            setUser({ ...User, address_zipcode: e.target.value });
          }}
        />
        <span
          id="User-Editform-Address_zipcode-note"
          data-testid="User-Editform-Address_zipcode-note"
        >
          The Address_zipcode for your User
        </span>

        <label
          id="User-Editform-Email-label"
          data-testid="User-Editform-Email-label"
          htmlFor="User-Editform-Email"
        >
          Email:
        </label>
        <input
          id="User-Editform-Email"
          data-testid="User-Editform-Email"
          type="text"
          value={User.email}
          autoComplete="User-Editform-Email"
          aria-labelledby="User-Editform-Email-label"
          aria-describedby="User-Editform-Email-note"
          onChange={(e) => {
            setUser({ ...User, email: e.target.value });
          }}
        />
        <span
          id="User-Editform-Email-note"
          data-testid="User-Editform-Email-note"
        >
          The Email for your User
        </span>

        <label
          id="User-Editform-Username-label"
          data-testid="User-Editform-Username-label"
          htmlFor="User-Editform-Username"
        >
          Username:
        </label>
        <input
          id="User-Editform-Username"
          data-testid="User-Editform-Username"
          type="text"
          value={User.username}
          autoComplete="User-Editform-Username"
          aria-labelledby="User-Editform-Username-label"
          aria-describedby="User-Editform-Username-note"
          onChange={(e) => {
            setUser({ ...User, username: e.target.value });
          }}
        />
        <span
          id="User-Editform-Username-note"
          data-testid="User-Editform-Username-note"
        >
          The Username for your User
        </span>

        <label
          id="User-Editform-Password-label"
          data-testid="User-Editform-Password-label"
          htmlFor="User-Editform-Password"
        >
          Password:
        </label>
        <input
          id="User-Editform-Password"
          data-testid="User-Editform-Password"
          type="text"
          value={User.password}
          autoComplete="User-Editform-Password"
          aria-labelledby="User-Editform-Password-label"
          aria-describedby="User-Editform-Password-note"
          onChange={(e) => {
            setUser({ ...User, password: e.target.value });
          }}
        />
        <span
          id="User-Editform-Password-note"
          data-testid="User-Editform-Password-note"
        >
          The Password for your User
        </span>

        <label
          id="User-Editform-Firstname-label"
          data-testid="User-Editform-Firstname-label"
          htmlFor="User-Editform-Firstname"
        >
          Firstname:
        </label>
        <input
          id="User-Editform-Firstname"
          data-testid="User-Editform-Firstname"
          type="text"
          value={User.firstname}
          autoComplete="User-Editform-Firstname"
          aria-labelledby="User-Editform-Firstname-label"
          aria-describedby="User-Editform-Firstname-note"
          onChange={(e) => {
            setUser({ ...User, firstname: e.target.value });
          }}
        />
        <span
          id="User-Editform-Firstname-note"
          data-testid="User-Editform-Firstname-note"
        >
          The Firstname for your User
        </span>

        <label
          id="User-Editform-Lastname-label"
          data-testid="User-Editform-Lastname-label"
          htmlFor="User-Editform-Lastname"
        >
          Lastname:
        </label>
        <input
          id="User-Editform-Lastname"
          data-testid="User-Editform-Lastname"
          type="text"
          value={User.lastname}
          autoComplete="User-Editform-Lastname"
          aria-labelledby="User-Editform-Lastname-label"
          aria-describedby="User-Editform-Lastname-note"
          onChange={(e) => {
            setUser({ ...User, lastname: e.target.value });
          }}
        />
        <span
          id="User-Editform-Lastname-note"
          data-testid="User-Editform-Lastname-note"
        >
          The Lastname for your User
        </span>

        <label
          id="User-Editform-phone-label"
          data-testid="User-Editform-phone-label"
          htmlFor="User-Editform-phone"
        >
          phone:
        </label>
        <input
          id="User-Editform-phone"
          data-testid="User-Editform-phone"
          type="text"
          value={User.phone}
          autoComplete="User-Editform-phone"
          aria-labelledby="User-Editform-phone-label"
          aria-describedby="User-Editform-phone-note"
          onChange={(e) => {
            setUser({ ...User, phone: e.target.value });
          }}
        />
        <span
          id="User-Editform-phone-note"
          data-testid="User-Editform-phone-note"
        >
          The phone for your User
        </span>

        <label
          id="User-Editform-imagen-label"
          data-testid="User-Editform-imagen-label"
          htmlFor="User-Editform-imagen"
        >
          imagen:
        </label>
        <input
          id="User-Editform-imagen"
          data-testid="User-Editform-imagen"
          type="text"
          value={User.imagen}
          autoComplete="User-Editform-imagen"
          aria-labelledby="User-Editform-imagen-label"
          aria-describedby="User-Editform-imagen-note"
          onChange={(e) => {
            setUser({ ...User, imagen: e.target.value });
          }}
        />
        <span
          id="User-Editform-imagen-note"
          data-testid="User-Editform-imagen-note"
        >
          The imagen for your User
        </span>
        <br />
        <button
          onClick={async (e) => {
            e.preventDefault();
            console.log("Aqui esta tu User", User);
            const query = `mutation edituser {
              update_users(where: {id: {_eq: ${id}}}, _set: {
                address_city: "${User.address_city}", 
              address_number: "${User.address_number}", 
              address_street: "${User.address_street}", 
              address_zipcode: "${User.address_zipcode}", 
              email: "${User.email}", 
              firstname: "${User.firstname}", 
              username: "${User.username}", 
              phone: "${User.phone}", 
              password: "${User.password}", 
              long: "${User.long}", 
              lat: "${User.lat}",
              lastname: "${User.lastname}", 
              imagen: "${User.imagen}"
              }){
              returning {
                id
                updated_at
              }
            }
          }
            `;
            console.log(query);
            const { errors, data } = await executeQuery("edituser", query);
            if (errors) {
              console.error(errors);
            }
            console.log(data);
          }}
        >
          Save User
        </button>
      </form>
    </div>
  );
}
