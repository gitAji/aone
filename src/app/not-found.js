import Link from "next/link";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center min-h-[100vh]">
        <div className="card text-center p-10">
          <h2>Page Not Found</h2>
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-500 dark:text-red-400 mb-4">
            404 Error
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8">
            Oops! It looks like the page you’re looking for doesn’t exist or has
            been moved. Let’s get you back on track.
          </p>

          <p>
            <Button
              asChild
              variant="outline"
              className="px-6 py-3 text-lg font-semibold text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-300"
            >
              <Link href="/">Go Back Home</Link>
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}
