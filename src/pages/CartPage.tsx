
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockProducts } from "@/data/mockProducts";
import { useToast } from "@/hooks/use-toast";

// Mock cart data - in a real app this would come from context or state management
const initialCart = [
  { productId: "1", quantity: 1 },
  { productId: "7", quantity: 2 }
];

export default function CartPage() {
  const [cart, setCart] = useState(initialCart);
  const { toast } = useToast();
  
  // Calculate cart details
  const cartItems = cart.map(item => {
    const product = mockProducts.find(p => p.id === item.productId);
    return {
      ...item,
      product
    };
  }).filter(item => item.product); // Filter out any items with missing products
  
  const subtotal = cartItems.reduce((sum, item) => {
    return sum + (item.product?.price || 0) * item.quantity;
  }, 0);
  
  const shipping = subtotal > 0 ? 9.99 : 0;
  const total = subtotal + shipping;
  
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    
    setCart(cart.map(item => 
      item.productId === productId ? { ...item, quantity } : item
    ));
  };
  
  const removeItem = (productId: string) => {
    setCart(cart.filter(item => item.productId !== productId));
    
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart",
      duration: 3000,
    });
  };
  
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
          <p className="mb-8 text-gray-500">Looks like you haven't added any products to your cart yet.</p>
          <Button asChild>
            <Link to="/products">Start Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4">Product</th>
                    <th className="text-center p-4">Quantity</th>
                    <th className="text-right p-4">Price</th>
                    <th className="text-right p-4">Total</th>
                    <th className="p-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {cartItems.map(({ product, quantity, productId }) => (
                    product && (
                      <tr key={productId} className="hover:bg-gray-50">
                        <td className="p-4">
                          <div className="flex items-center space-x-4">
                            <img 
                              src={product.imageUrl} 
                              alt={product.name} 
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div>
                              <h3 className="font-medium">{product.name}</h3>
                              <p className="text-sm text-gray-500">{product.category}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex justify-center">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(productId, quantity - 1)}
                            >
                              -
                            </Button>
                            <input
                              type="number"
                              className="w-12 text-center border-y"
                              min="1"
                              value={quantity}
                              onChange={(e) => updateQuantity(productId, parseInt(e.target.value) || 1)}
                            />
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(productId, quantity + 1)}
                            >
                              +
                            </Button>
                          </div>
                        </td>
                        <td className="p-4 text-right">
                          ${product.price.toFixed(2)}
                        </td>
                        <td className="p-4 text-right font-medium">
                          ${(product.price * quantity).toFixed(2)}
                        </td>
                        <td className="p-4">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(productId)}
                            className="text-gray-500 hover:text-red-600"
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    )
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="border rounded-lg p-4">
              <h2 className="text-lg font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="border-t pt-2 mt-2 flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              <Button className="w-full" asChild>
                <Link to="/checkout">
                  Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
