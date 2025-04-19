
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "./ui/card";
import { mockProducts } from "@/data/mockProducts";

interface ProductGridProps {
  category?: string;
  featuredOnly?: boolean;
  searchQuery?: string;
}

export function ProductGrid({ category, featuredOnly = false, searchQuery = "" }: ProductGridProps) {
  // Filter products based on props
  let filteredProducts = [...mockProducts];
  
  if (category) {
    filteredProducts = filteredProducts.filter(product => product.category.toLowerCase() === category.toLowerCase());
  }
  
  if (featuredOnly) {
    filteredProducts = filteredProducts.filter(product => product.featured);
  }
  
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  
  // Limit to 6 items if on homepage featured section
  if (featuredOnly) {
    filteredProducts = filteredProducts.slice(0, 6);
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      {filteredProducts.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <Link to={`/products/${product.id}`}>
            <div className="aspect-square overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium text-lg truncate">{product.name}</h3>
              <p className="text-sm text-gray-500 truncate">{product.category}</p>
            </CardContent>
            <CardFooter className="flex items-center justify-between p-4 pt-0">
              <span className="font-bold">${product.price.toFixed(2)}</span>
              {product.inStock ? (
                <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">In Stock</span>
              ) : (
                <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-800">Out of Stock</span>
              )}
            </CardFooter>
          </Link>
        </Card>
      ))}
      
      {filteredProducts.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-lg text-gray-500">No products found.</p>
        </div>
      )}
    </div>
  );
}
