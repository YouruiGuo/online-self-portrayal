
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">GymGear</h3>
            <p className="text-sm text-gray-600">
              Premium gym equipment for fitness enthusiasts. Build your perfect home gym with our quality selection.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="text-gray-600 hover:text-gray-900">All Products</Link>
              </li>
              <li>
                <Link to="/products/weights" className="text-gray-600 hover:text-gray-900">Weights</Link>
              </li>
              <li>
                <Link to="/products/machines" className="text-gray-600 hover:text-gray-900">Machines</Link>
              </li>
              <li>
                <Link to="/products/accessories" className="text-gray-600 hover:text-gray-900">Accessories</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Account</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/account" className="text-gray-600 hover:text-gray-900">My Account</Link>
              </li>
              <li>
                <Link to="/account/orders" className="text-gray-600 hover:text-gray-900">Order History</Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-600 hover:text-gray-900">View Cart</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Shipping Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Returns & Refunds</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Newsletter</h3>
            <p className="text-sm text-gray-600">Subscribe to get special offers, free giveaways, and product launches.</p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} GymGear. All rights reserved.</p>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
