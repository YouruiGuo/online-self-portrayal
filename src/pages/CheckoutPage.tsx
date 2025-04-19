
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

// For MVP purposes, we're using a mock total
const mockOrderTotal = 329.97;

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCvc: "",
    createAccount: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // In a real app, we would process the payment and order here
    // For MVP, we're simulating a successful order after a delay
    setTimeout(() => {
      setLoading(false);
      
      toast({
        title: "Order placed successfully!",
        description: "Check your email for order confirmation and tracking details.",
      });
      
      navigate("/order-confirmation");
    }, 1500);
  };
  
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="createAccount" 
                  checked={formData.createAccount}
                  onCheckedChange={(checked) => 
                    handleCheckboxChange("createAccount", Boolean(checked))
                  }
                />
                <label htmlFor="createAccount" className="text-sm">
                  Create an account for faster checkout next time
                </label>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input 
                  id="firstName" 
                  name="firstName" 
                  required 
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input 
                  id="lastName" 
                  name="lastName" 
                  required 
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="address">Street Address</Label>
                <Input 
                  id="address" 
                  name="address" 
                  required 
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input 
                  id="city" 
                  name="city" 
                  required 
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="state">State</Label>
                  <Input 
                    id="state" 
                    name="state" 
                    required 
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="zipCode">Zip Code</Label>
                  <Input 
                    id="zipCode" 
                    name="zipCode" 
                    required 
                    value={formData.zipCode}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="country">Country</Label>
                <Input 
                  id="country" 
                  name="country" 
                  required 
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${(mockOrderTotal - 9.99).toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$9.99</span>
              </div>
              <div className="pt-2 border-t flex justify-between font-semibold">
                <span>Order Total</span>
                <span>${mockOrderTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="border rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input 
                    id="cardNumber" 
                    name="cardNumber" 
                    required 
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input 
                    id="cardName" 
                    name="cardName" 
                    required 
                    value={formData.cardName}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cardExpiry">Expiry Date</Label>
                    <Input 
                      id="cardExpiry" 
                      name="cardExpiry" 
                      placeholder="MM/YY" 
                      required
                      value={formData.cardExpiry}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="cardCvc">CVC</Label>
                    <Input 
                      id="cardCvc" 
                      name="cardCvc" 
                      placeholder="123" 
                      required
                      value={formData.cardCvc}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="pt-4">
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Processing..." : `Pay $${mockOrderTotal.toFixed(2)}`}
                  </Button>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 text-center">
              By placing your order, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
