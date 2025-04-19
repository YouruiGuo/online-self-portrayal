
import { ShoppingCart, User, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  
  // This would be replaced with actual cart state management
  // For MVP purposes, we're using a mock count
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-blue-600">GymGear</span>
          </Link>
          
          <nav className="hidden md:flex gap-6 ml-6">
            <Link to="/products/weights" className="text-sm font-medium transition-colors hover:text-blue-600">
              Weights
            </Link>
            <Link to="/products/machines" className="text-sm font-medium transition-colors hover:text-blue-600">
              Machines
            </Link>
            <Link to="/products/accessories" className="text-sm font-medium transition-colors hover:text-blue-600">
              Accessories
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden md:flex w-60 items-center">
            <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search"
              placeholder="Search products..." 
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] text-white">
                {cartCount}
              </span>
            )}
          </Link>
          
          <Link to="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
