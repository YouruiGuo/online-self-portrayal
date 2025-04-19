
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container flex items-center justify-center min-h-[70vh] px-4 py-16 md:px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <Link to="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  );
}
