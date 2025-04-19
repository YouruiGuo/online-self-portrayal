
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/ProductGrid";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Equip Your Fitness Journey
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Premium gym equipment for every fitness level. Build your home gym with our quality selection of weights, machines, and accessories.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/products">
                  <Button className="gap-1">
                    Shop Now <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1740&auto=format&fit=crop"
                alt="Gym Equipment"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                width="550"
                height="310"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories section */}
      <section className="w-full py-12 md:py-24 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Shop by Category
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find the perfect equipment for your workout routine
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <Link to="/products/weights" className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop" 
                alt="Weights" 
                className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Weights</h3>
              </div>
            </Link>
            <Link to="/products/machines" className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1287&auto=format&fit=crop" 
                alt="Machines" 
                className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Machines</h3>
              </div>
            </Link>
            <Link to="/products/accessories" className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop" 
                alt="Accessories" 
                className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Accessories</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured products section */}
      <section className="w-full py-12 md:py-24 lg:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Products
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Top-rated fitness equipment for your home gym
            </p>
          </div>
          <ProductGrid featuredOnly={true} />
        </div>
      </section>

      {/* Call to action */}
      <section className="w-full py-12 md:py-24 lg:py-16 bg-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center text-white">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to Start Your Fitness Journey?
            </h2>
            <p className="max-w-[600px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Shop our collection of premium fitness equipment and transform your workout experience
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/products">
                <Button size="lg" variant="secondary">
                  Shop All Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
