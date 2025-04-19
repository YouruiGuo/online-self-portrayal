
import { Check, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function OrderConfirmationPage() {
  // In a real app, this data would come from the order processing or context
  const orderNumber = "ORD-" + Math.floor(100000 + Math.random() * 900000);
  const orderDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  
  return (
    <div className="container max-w-2xl px-4 py-16 md:px-6 md:py-24 mx-auto text-center">
      <div className="flex justify-center mb-6">
        <div className="rounded-full bg-green-100 p-3">
          <Check className="h-8 w-8 text-green-600" />
        </div>
      </div>
      
      <h1 className="text-3xl font-bold mb-4">Thank You For Your Order!</h1>
      <p className="text-gray-600 mb-8">
        Your order has been received and is being processed. A confirmation email has been sent to your email address.
      </p>
      
      <div className="border rounded-lg p-6 mb-8">
        <div className="flex items-center justify-center mb-4">
          <Package className="h-5 w-5 mr-2 text-blue-600" />
          <h2 className="text-xl font-semibold">Order Details</h2>
        </div>
        
        <div className="space-y-3 text-left">
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600">Order Number:</span>
            <span className="font-medium">{orderNumber}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600">Date:</span>
            <span className="font-medium">{orderDate}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600">Payment Method:</span>
            <span className="font-medium">Credit Card (•••• 1234)</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600">Shipping Method:</span>
            <span className="font-medium">Standard Shipping (3-5 business days)</span>
          </div>
          <div className="flex justify-between pt-2">
            <span className="font-semibold">Order Total:</span>
            <span className="font-bold">$329.97</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <p className="text-gray-600">
          We will notify you when your order ships. You can also check your order status in your account.
        </p>
        
        <div className="flex justify-center gap-4 flex-wrap">
          <Button asChild>
            <Link to="/products">Continue Shopping</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/account/orders">View Order History</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
