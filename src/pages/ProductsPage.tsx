
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { ProductGrid } from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

export default function ProductsPage() {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      searchParams.set("search", searchQuery);
    } else {
      searchParams.delete("search");
    }
    setSearchParams(searchParams);
  };
  
  useEffect(() => {
    // Update search input when URL search param changes
    const searchFromParams = searchParams.get("search");
    if (searchFromParams !== searchQuery) {
      setSearchQuery(searchFromParams || "");
    }
  }, [searchParams]);

  const categoryTitle = category 
    ? category.charAt(0).toUpperCase() + category.slice(1) 
    : "All Products";

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold">{categoryTitle}</h1>
        
        <form onSubmit={handleSearch} className="flex w-full md:w-auto gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button type="submit">
            <Search className="h-4 w-4 mr-2" />
            <span>Search</span>
          </Button>
        </form>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white p-4 border rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-4 w-4" />
              <h2 className="font-semibold">Categories</h2>
            </div>
            <div className="flex flex-col space-y-2">
              <Button 
                variant={!category ? "default" : "outline"} 
                className="justify-start"
                asChild
              >
                <a href="/products">All Products</a>
              </Button>
              <Button 
                variant={category === "weights" ? "default" : "outline"} 
                className="justify-start"
                asChild
              >
                <a href="/products/weights">Weights</a>
              </Button>
              <Button 
                variant={category === "machines" ? "default" : "outline"} 
                className="justify-start"
                asChild
              >
                <a href="/products/machines">Machines</a>
              </Button>
              <Button 
                variant={category === "accessories" ? "default" : "outline"} 
                className="justify-start"
                asChild
              >
                <a href="/products/accessories">Accessories</a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <ProductGrid 
            category={category} 
            searchQuery={searchParams.get("search") || ""} 
          />
        </div>
      </div>
    </div>
  );
}
