
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function AccountPage() {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would validate and authenticate with backend
    setIsLoggedIn(true);
    toast({
      title: "Login successful",
      description: "Welcome back to GymGear!",
    });
  };
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would validate and create an account
    if (registerData.password !== registerData.confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please make sure your passwords match.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoggedIn(true);
    toast({
      title: "Registration successful",
      description: "Your account has been created!",
    });
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
  };
  
  // Mock order data - in a real app this would come from an API
  const mockOrders = [
    {
      id: "ORD-123456",
      date: "April 15, 2024",
      status: "Delivered",
      total: 199.98
    },
    {
      id: "ORD-789012",
      date: "April 2, 2024",
      status: "Shipped",
      total: 89.99
    },
    {
      id: "ORD-345678",
      date: "March 20, 2024",
      status: "Processing",
      total: 129.97
    }
  ];
  
  if (!isLoggedIn) {
    return (
      <div className="container flex items-center justify-center min-h-[calc(100vh-10rem)] px-4 py-8 md:px-6">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Sign in to your account or create a new one.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="login-email">Email</Label>
                    <Input 
                      id="login-email" 
                      name="email" 
                      type="email" 
                      required
                      value={loginData.email}
                      onChange={handleLoginChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="login-password">Password</Label>
                    <Input 
                      id="login-password" 
                      name="password" 
                      type="password" 
                      required
                      value={loginData.password}
                      onChange={handleLoginChange}
                    />
                  </div>
                  <Button type="submit" className="w-full">Sign In</Button>
                </form>
              </TabsContent>
              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <Label htmlFor="register-name">Full Name</Label>
                    <Input 
                      id="register-name" 
                      name="name" 
                      required
                      value={registerData.name}
                      onChange={handleRegisterChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="register-email">Email</Label>
                    <Input 
                      id="register-email" 
                      name="email" 
                      type="email" 
                      required
                      value={registerData.email}
                      onChange={handleRegisterChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="register-password">Password</Label>
                    <Input 
                      id="register-password" 
                      name="password" 
                      type="password" 
                      required
                      value={registerData.password}
                      onChange={handleRegisterChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="register-confirm-password">Confirm Password</Label>
                    <Input 
                      id="register-confirm-password" 
                      name="confirmPassword" 
                      type="password" 
                      required
                      value={registerData.confirmPassword}
                      onChange={handleRegisterChange}
                    />
                  </div>
                  <Button type="submit" className="w-full">Create Account</Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="justify-center">
            <p className="text-sm text-gray-500">
              By signing in or creating an account, you agree to our{" "}
              <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
            </p>
          </CardFooter>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <Card>
            <CardHeader>
              <CardTitle>My Account</CardTitle>
            </CardHeader>
            <CardContent>
              <nav className="flex flex-col space-y-1">
                <Link to="/account" className="px-4 py-2 rounded-md bg-blue-50 text-blue-600 font-medium">
                  Account Overview
                </Link>
                <Link to="/account/orders" className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  Order History
                </Link>
                <Link to="/account/address" className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  Addresses
                </Link>
                <Link to="/account/settings" className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  Account Settings
                </Link>
                <button 
                  onClick={handleLogout}
                  className="text-left px-4 py-2 rounded-md hover:bg-gray-100 transition-colors text-red-600"
                >
                  Sign Out
                </button>
              </nav>
            </CardContent>
          </Card>
        </div>
        
        <div className="w-full md:w-3/4">
          <Card>
            <CardHeader>
              <CardTitle>Account Overview</CardTitle>
              <CardDescription>View and update your account details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Personal Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="account-name">Full Name</Label>
                    <Input id="account-name" defaultValue="John Doe" />
                  </div>
                  <div>
                    <Label htmlFor="account-email">Email</Label>
                    <Input id="account-email" defaultValue="john@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="account-phone">Phone</Label>
                    <Input id="account-phone" defaultValue="(123) 456-7890" />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Default Address</h3>
                <div className="border p-4 rounded-md">
                  <p className="mb-1 font-medium">John Doe</p>
                  <p className="text-gray-600">123 Main Street</p>
                  <p className="text-gray-600">Apt 4B</p>
                  <p className="text-gray-600">New York, NY 10001</p>
                  <p className="text-gray-600">United States</p>
                  <div className="mt-3">
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Recent Orders</h3>
                <div className="border rounded-md overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left p-3">Order #</th>
                        <th className="text-left p-3">Date</th>
                        <th className="text-left p-3">Status</th>
                        <th className="text-right p-3">Total</th>
                        <th className="p-3"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {mockOrders.map(order => (
                        <tr key={order.id} className="hover:bg-gray-50">
                          <td className="p-3">{order.id}</td>
                          <td className="p-3">{order.date}</td>
                          <td className="p-3">
                            <span 
                              className={`inline-block px-2 py-1 rounded-full text-xs font-medium
                                ${order.status === "Delivered" ? "bg-green-100 text-green-800" : 
                                order.status === "Shipped" ? "bg-blue-100 text-blue-800" : 
                                "bg-amber-100 text-amber-800"}`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="p-3 text-right">${order.total.toFixed(2)}</td>
                          <td className="p-3 text-right">
                            <Button variant="ghost" size="sm">View</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-3 flex justify-end">
                  <Button variant="outline">View All Orders</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
