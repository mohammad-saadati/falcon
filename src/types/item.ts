export interface Category {
  id: number;
  image: string;
  title: string;
  slug: string;
  created_at: string | null;
  updated_at: string | null;
}
export interface Seo {
  id: number;
  image: string;
  title: string;
  slug: string;
  created_at: string | null;
  updated_at: string | null;
}
export interface Images {
  small: Image;
  large: Image;
}
export interface Image {
  url: string;
  width: number;
  height: number;
}
export interface User {
  id: number;
  avatar: string;
  bio: string;
  username: string;
  collection_count: number;
  name: string;
  business_data: string;
  created_at: string;
}
export interface Item {
  id: number;
  title: string;
  name: string;
  description: string;
  color: string;
  type: string;
  seo: Seo;
  category: Category;
  images: Images;
  user: User;
}
