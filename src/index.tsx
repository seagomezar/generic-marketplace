import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./styles.css";
import Header from "./Components/Header/Header";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import ProductList from "./Components/Product/List/List";
import ProductAddForm from "./Components/Product/AddForm/AddForm";
import ProductEditForm from "./Components/Product/EditForm/EditForm";
import ImagesXProductList from "./Components/Images_x_product/List/List";
import CategoryList from "./Components/Category/List/List";
import Images_x_productAddForm from "./Components/Images_x_product/AddForm/AddForm";
import CategoriesAddForm from "./Components/Category/AddForm/AddForm";
import ImagesXProductEditForm from "./Components/Images_x_product/EditForm/EditForm";
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
        path: "newProduct",
        element: <ProductAddForm />
      },
      {
        path: "editProduct/:productId",
        element: <ProductEditForm />
      },
      {
        path: "imagesxproduct",
        element: <ImagesXProductList />
      },
      {
        path: "Category",
        element: <CategoryList />
      },
      {
        path: "newImageXProduct",
        element: <Images_x_productAddForm />
      },
      {
        path: "newCategory",
        element: <CategoriesAddForm />
      },
      {
        path: "editImagesXProduct/:id",
        element: <ImagesXProductEditForm />
      },
      {
        path: "editcategory/:id",
        element: <CategoryEditForm />
      },
      {
        path: "Carts",
        element: <CartsList />
      },
      {
        path: "newCarts",
        element: <CartsAddForm />
      },
      {
        path: "editCarts/:id",
        element: <CartsEditForm />
      },
      {
        path: "carts_x_products",
        element: <Carts_x_productsList />
      },
      {
        path: "newcarts_x_products",
        element: <Carts_x_productsAddForm />
      },
      {
        path: "editcarts_x_products/:id",
        element: <Carts_x_productsEditForm />
      },
      {
        path: "questions",
        element: <QuestionsList />
      },
      {
        path: "newquestions",
        element: <QuestionsAddForm />
      },
      {
        path: "editquestions/:id",
        element: <QuestionsEditForm />
      },
      {
        path: "reviews",
        element: <ReviewsList />
      },
      {
        path: "newreviews",
        element: <ReviewsAddForm />
      },
      {
        path: "editreviews/:id",
        element: <ReviewsEditForm />
      },
      {
        path: "user",
        element: <UserList />
      },
      {
        path: "newuser",
        element: <UserAddForm />
      },
      {
        path: "edituser/:id",
        element: <UserEditForm />
      }
    ]
  }
]);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
