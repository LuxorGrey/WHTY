// Define un tipo para la información de cada producto
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  
};

// Define un tipo para el objeto que contiene la lista de productos
type ProductList = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

// Exporta el tipo de la lista de productos
export type { Product, ProductList };
