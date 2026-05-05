import { createFileRoute, Link } from '@tanstack/react-router'

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-5xl font-bold mb-8">Welcome to Product Listing</h1>
      <Link to="/products" className="px-6 py-3 bg-gray-600 text-white rounded hover:bg-gray-700 transition">
        View Products
      </Link>
    </div>
  );
}

export const Route = createFileRoute('/')({
  component: RouteComponent,
})