import { Link } from "react-router-dom"

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">

      {/* SIDEBAR */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h1 className="text-2xl font-bold mb-6">
          Client Manager
        </h1>

        <nav className="space-y-3">
          <Link to="/" className="block hover:text-blue-400">
            Clients
          </Link>

          <Link to="/create" className="block hover:text-blue-400">
            Create Client
          </Link>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 bg-gray-100 p-6">
        {children}
      </main>

    </div>
  )
}