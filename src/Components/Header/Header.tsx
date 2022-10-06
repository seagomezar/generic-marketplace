import { Link, Outlet } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div id="sidebar">
        <h1>Store Administration</h1>
        {/*<div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>*/}
        <nav>
          <ul>
            <li>
              <Link to={`products`}>Products</Link>
            </li>
            <li>
              <Link to={`images-x-product`}>Images X Product</Link>
            </li>
            <li>
              <Link to={`category`}>Categories</Link>
            </li>
            <li>
              <Link to={`Carts`}>Carts</Link>
            </li>
            <li>
              <Link to={`products-in-cart`}>Products In Cart</Link>
            </li>
            <li>
              <Link to={`questions`}>Questions</Link>
            </li>
            <li>
              <Link to={`reviews`}>Reviews</Link>
            </li>
            <li>
              <Link to={`users`}>User</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
