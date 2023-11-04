import Link from "next/link";
import { GoBackButton } from "@/components/goBack";
export default function NotFound() {
  return (
    <section className="bg-background">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div>
          <p className="text-sm font-medium text-blue-700 dark:text-cyan-400">
            404 error
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            We can not find that page
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Sorry, the page you are looking for does not exist or has been
            moved.
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <GoBackButton />
            <Link href="/">
              <button
                className="w-full px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-cyan-500 dark:bg-cyan-600"
                role="link"
              >
                Return to home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
