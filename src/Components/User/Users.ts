export type User = {
  id: number;
  lat?: number;
  long?: number;
  address_city?: string;
  address_street?: string;
  address_number?: number;
  address_zipcode?: number;
  email?: string;
  username?: string;
  password?: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  image?: string;
  created_at: string;
  updated_at: string;
};

export type Users = User[];
