export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 text-center mt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Baba Gandhi Kandagatla. All rights reserved.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
          Built with Next.js, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

