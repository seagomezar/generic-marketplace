export type Review = {
  id: number;
  comment?: string;
  rating?: number;
  product_id?: number;
  user_id?: number;
  created_at: string;
  updated_at: string;
};

export type Reviews = Review[];
