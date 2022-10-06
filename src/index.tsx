import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header/Header";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import ProductList from "./Components/Product/List/List";
import ProductAddForm from "./Components/Product/AddForm/AddForm";
import ProductEditForm from "./Components/Product/EditForm/EditForm";
import ImagesXProductList from "./Components/ImagesXProducts/List/List";
import CategoryList from "./Components/Category/List/List";
import ImagesXProductsAddForm from "./Components/ImagesXProducts/AddForm/AddForm";
import CategoriesAddForm from "./Components/Category/AddForm/AddForm";
import ImagesXProductEditForm from "./Components/ImagesXProducts/EditForm/EditForm";
import CategoryEditForm from "./Components/Category/EditForm/EditForm";
import CartsList from "./Components/Carts/List/List";
import CartsAddForm from "./Components/Carts/AddForm/Addform";
import CartsEditForm from "./Components/Carts/EditForm/EditForm";
import Carts_x_productsList from "./Components/Carts_x_product/List/List";
import Carts_x_productsAddForm from "./Components/Carts_x_product/AddForm/AddForm";
import Carts_x_productsEditForm from "./Components/Carts_x_product/EditForm/EditForm";
import QuestionsList from "./Components/Questions/List/List";
import QuestionsAddForm from "./Components/Questions/AddForm/AddForm";
import QuestionsEditForm from "./Components/Questions/EditForm/EditForm";
import ReviewsList from "./Components/Reviews/List/List";
import ReviewsAddForm from "./Components/Reviews/AddForm/AddForm";
import ReviewsEditForm from "./Components/Reviews/EditForm/EditForm";
import UserList from "./Components/User/List/List";
import UserAddForm from "./Components/User/AddForm/AddForm";
import UserEditForm from "./Components/User/EditForm/EditForm";
import "./styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "products",
        element: <ProductList />
      },
      {
        path: "new-product",
        element: <ProductAddForm />
      },
      {
        path: "edit-product/:productId",
        element: <ProductEditForm />
      },
      {
        path: "images-x-product",
        element: <ImagesXProductList />
      },
      {
        path: "categories",
        element: <CategoryList />
      },
      {
        path: "new-image-x-product",
        element: <ImagesXProductsAddForm />
      },
      {
        path: "new-category",
        element: <CategoriesAddForm />
      },
      {
        path: "edit-image-x-product/:id",
        element: <ImagesXProductEditForm />
      },
      {
        path: "edit-category/:id",
        element: <CategoryEditForm />
      },
      {
        path: "carts",
        element: <CartsList />
      },
      {
        path: "new-cart",
        element: <CartsAddForm />
      },
      {
        path: "edit-cart/:id",
        element: <CartsEditForm />
      },
      {
        path: "products_in_cart",
        element: <Carts_x_productsList />
      },
      {
        path: "new-product-in-cart",
        element: <Carts_x_productsAddForm />
      },
      {
        path: "edit-product-in-cart/:id",
        element: <Carts_x_productsEditForm />
      },
      {
        path: "questions",
        element: <QuestionsList />
      },
      {
        path: "new-question",
        element: <QuestionsAddForm />
      },
      {
        path: "edit-question/:id",
        element: <QuestionsEditForm />
      },
      {
        path: "review",
        element: <ReviewsList />
      },
      {
        path: "new-review",
        element: <ReviewsAddForm />
      },
      {
        path: "edit-review/:id",
        element: <ReviewsEditForm />
      },
      {
        path: "user",
        element: <UserList />
      },
      {
        path: "new-user",
        element: <UserAddForm />
      },
      {
        path: "edit-user/:id",
        element: <UserEditForm />
      }
    ]
  }
]);

const rootElement = document.getElementById("root");
if(rootElement){
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
  

