import { ChangeEvent, useEffect, useState } from 'react';
import {
  executeQuery,
  getCategories,
} from '../../../Service/GraphQlService';
import Select from 'react-select';
import './AddForm.css';
import { Category } from '../../Category/Category';
import AsyncSelect from 'react-select/async';

export default function ProductAddForm() {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    image: '',
    rating_average: '',
    rating_count: '',
    current_stock: '',
  });

  async function populateCategories(inputValue: string) {
    console.log(inputValue);
    const dataCategories = await getCategories();
    return dataCategories.categories
      .map((c: Category) => ({
        value: c.id,
        label: c.title,
      }))
      .filter((i: any) =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
      );
  }

  return (
    <form className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="product-addform-title"
          >
            Title
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="product-addform-title"
            data-testid="product-addform-title"
            type="text"
            autoComplete="product-addform-title"
            aria-labelledby="product-addform-title-label"
            aria-describedby="product-addform-title-note"
            onChange={(e) => {
              setProduct({ ...product, title: e.target.value });
            }}
          />
          <p className="text-gray-600 text-xs italic">
            Make it as long and as crazy as you'd like
          </p>
        </div>
      </div>
      <label
        id="product-addform-title-label"
        data-testid="product-addform-title-title-label"
        htmlFor="product-addform-title"
      >
        Title:
      </label>
      <input />
      <span
        id="product-addform-title-note"
        data-testid="product-addform-title-note"
        className="label-legend"
      >
        The title for your product
      </span>

      <label
        id="product-addform-description-label"
        data-testid="product-addform-description-label"
        htmlFor="product-addform-description"
      >
        Description:
      </label>
      <textarea
        id="product-addform-description"
        data-testid="product-addform-description"
        rows={10}
        cols={35}
        autoComplete="product-addform-description"
        aria-labelledby="product-addform-description-label"
        aria-describedby="product-addform-description-note"
        onChange={(e) => {
          setProduct({ ...product, description: e.target.value });
        }}
      />
      <span
        id="product-addform-description-note"
        data-testid="product-addform-description-note"
        className="label-legend"
      >
        The description for your product
      </span>

      <label
        id="product-addform-price-label"
        data-testid="product-addform-price-label"
        htmlFor="product-addform-price"
      >
        price:
      </label>
      <input
        id="product-addform-price"
        data-testid="product-addform-price"
        type="text"
        autoComplete="product-addform-price"
        aria-labelledby="product-addform-price-label"
        aria-describedby="product-addform-price-note"
        onChange={(e) => {
          setProduct({ ...product, price: e.target.value });
        }}
      />
      <span
        id="product-addform-price-note"
        data-testid="product-addform-price-note"
        className="label-legend"
      >
        The price for your product
      </span>

      <label
        id="product-addform-category-label"
        data-testid="product-addform-category-label"
        htmlFor="product-addform-category"
      >
        Category
      </label>
      <AsyncSelect
        cacheOptions
        defaultOptions
        className="basic-single"
        classNamePrefix="select"
        defaultValue={product.category}
        isDisabled={false}
        isLoading={false}
        isClearable={true}
        isSearchable={true}
        loadOptions={populateCategories}
        onChange={(e: any) => {
          setProduct({
            ...product,
            category: e ? e.label : '',
          });
        }}
      />
      <div className="label-legend">The Category of your product</div>

      <label
        id="product-addform-image-label"
        data-testid="product-addform-image-label"
        htmlFor="product-addform-image"
      >
        image:
      </label>
      <input
        id="product-addform-image"
        data-testid="product-addform-image"
        type="text"
        autoComplete="product-addform-image"
        aria-labelledby="product-addform-image-label"
        aria-describedby="product-addform-image-note"
        onChange={(e) => {
          setProduct({ ...product, image: e.target.value });
        }}
      />
      <span
        id="product-addform-image-note"
        data-testid="product-addform-image-note"
        className="label-legend"
      >
        The image for your product
      </span>

      <label
        id="product-addform-rantig_average-label"
        data-testid="product-addform-rantig_average-label"
        htmlFor="product-addform-rantig_average"
      >
        Rating Average:
      </label>
      <input
        id="product-addform-rantig_average"
        data-testid="product-addform-rantig_average"
        type="text"
        autoComplete="product-addform-rantig_average"
        aria-labelledby="product-addform-rantig_average-label"
        aria-describedby="product-addform-rantig_average-note"
        onChange={(e) => {
          setProduct({
            ...product,
            rating_average: e.target.value,
          });
        }}
      />
      <span
        id="product-addform-rantig_average-note"
        data-testid="product-addform-rantig_average-note"
        className="label-legend"
      >
        The Rating Average for your product
      </span>

      <label
        id="product-addform-rantig_count-label"
        data-testid="product-addform-rantig_count-label"
        htmlFor="product-addform-rantig_count"
      >
        Rating Count:
      </label>
      <input
        id="product-addform-rantig_count"
        data-testid="product-addform-rantig_count"
        type="text"
        autoComplete="product-addform-rantig_count"
        aria-labelledby="product-addform-rantig_count-label"
        aria-describedby="product-addform-rantig_count-note"
        onChange={(e) => {
          setProduct({ ...product, rating_count: e.target.value });
        }}
      />
      <span
        id="product-addform-rantig_count-note"
        data-testid="product-addform-rantig_count-note"
        className="label-legend"
      >
        The Rating Count for your product
      </span>

      <label
        id="product-addform-corrent_stock-label"
        data-testid="product-addform-corrent_stock-label"
        htmlFor="product-addform-corrent_stock"
      >
        Current Stock:
      </label>
      <input
        id="product-addform-corrent_stock"
        data-testid="product-addform-corrent_stock"
        type="text"
        autoComplete="product-addform-corrent_stock"
        aria-labelledby="product-addform-corrent_stock-label"
        aria-describedby="product-addform-corrent_stock-note"
        onChange={(e) => {
          setProduct({ ...product, current_stock: e.target.value });
        }}
      />
      <span
        id="product-addform-corrent_stock-note"
        data-testid="product-addform-corrent_stock-note"
        className="label-legend"
      >
        The Current Stock for your product
      </span>
      <br />
      <button
        onClick={async (e) => {
          e.preventDefault();
          console.log('Aqui esta tu Product', product);
          const query = `mutation insertProduct  {
              insert_products_one(object: {
                  title: "${product.title}",
                  rating_count: ${product.rating_count},
                  rating_average: ${product.rating_average},
                  price: ${product.price},
                  image: "${product.image}",
                  description: "${product.description}",
                  current_stock: ${product.current_stock},
                  category: "${product.category}"
                }
              ) {
                id
              }
            }
            `;
          console.log(query);
          const { errors, data } = await executeQuery(
            'insertProduct',
            query
          );
          if (errors) {
            console.error(errors);
          }
          console.log(data);
        }}
      >
        Save Product
      </button>
    </form>
  );
}
