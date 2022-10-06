export type Question = {
  id?: number;
  title?: string;
  answer?: string;
  product_id?: number;
  user_id?: number;
  created_at: string;
  updated_at: string;
};

export type Questions = Question[];
