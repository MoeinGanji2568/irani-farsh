export interface Carpet {
  id: number;
  name: string;
  categoryId: number;
  category: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
  description: string;
  price: number;
  image: string;
  size: string;
  color: string;
  shape: string;
  quality: string;
  seller: string;
  rating: string;
  isLike: string;
  isDislike: string;
  isFavorite: string;
  reactionStats: {
    likes: number;
    dislikes: number;
    total: number;
  };
}
