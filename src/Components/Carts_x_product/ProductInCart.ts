export type ProductInCart = {
  id?: number;
  cart_id?: number;
  product_id?: number;
  created_at: string;
  updated_at: string;
};

export type ProductsInCart = ProductInCart[];
