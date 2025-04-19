
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ShoppingCart, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockProducts } from "@/data/mockProducts";
import { useToast } from "@/hooks/use-toast";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  
  const product = mockProducts.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="container flex items-center justify-center py-24">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="mb-6">The product you are looking for does not exist.</p>
          <Button onClick={() => navigate("/products")}>
            Return to Products
          </Button>
        </div>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    // Here we would add the product to cart state
    // For MVP purposes, we're just showing a toast notification
    toast({
      title: "Product added to cart",
      description: `${quantity}x ${product.name} added to your cart`,
      duration: 3000,
    });
  };

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <Link to="/products" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="overflow-hidden rounded-lg">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-auto object-cover"
          />
        </div>
        
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-sm text-gray-500 mb-4">{product.category}</p>
          
          <div className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</div>
          
          <div className="mb-6">
            <p className="text-gray-700">{product.description}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Specifications:</h3>
            <ul className="space-y-2">
              {product.specifications.weight && (
                <li className="flex items-baseline gap-2">
                  <span className="font-medium">Weight:</span>
                  <span>{product.specifications.weight}</span>
                </li>
              )}
              {product.specifications.dimensions && (
                <li className="flex items-baseline gap-2">
                  <span className="font-medium">Dimensions:</span>
                  <span>{product.specifications.dimensions}</span>
                </li>
              )}
              {product.specifications.material && (
                <li className="flex items-baseline gap-2">
                  <span className="font-medium">Material:</span>
                  <span>{product.specifications.material}</span>
                </li>
              )}
              {product.specifications.color && (
                <li className="flex items-baseline gap-2">
                  <span className="font-medium">Color:</span>
                  <span>{product.specifications.color}</span>
                </li>
              )}
              {product.specifications.adjustable !== undefined && (
                <li className="flex items-baseline gap-2">
                  <span className="font-medium">Adjustable:</span>
                  <span>{product.specifications.adjustable ? "Yes" : "No"}</span>
                </li>
              )}
            </ul>
          </div>
          
          <div className="flex items-center space-x-2 mb-6">
            {product.inStock ? (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                <Check className="mr-1 h-3 w-3" />
                In Stock
              </span>
            ) : (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                Out of Stock
              </span>
            )}
          </div>
          
          {product.inStock && (
            <>
              <div className="flex items-center mb-6">
                <label htmlFor="quantity" className="mr-4">Quantity:</label>
                <div className="flex">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <input
                    type="number"
                    id="quantity"
                    className="w-12 text-center border-y"
                    min="1"
                    max="99"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.min(99, quantity + 1))}
                  >
                    +
                  </Button>
                </div>
              </div>
              
              <Button 
                className="w-full"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </>
          )}
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockProducts
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
            .map((relatedProduct) => (
              <Link 
                key={relatedProduct.id} 
                to={`/products/${relatedProduct.id}`}
                className="group"
              >
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={relatedProduct.imageUrl}
                    alt={relatedProduct.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-2 font-medium text-gray-900">{relatedProduct.name}</h3>
                <p className="mt-1 text-gray-900">${relatedProduct.price.toFixed(2)}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
