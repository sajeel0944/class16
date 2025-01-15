import Link from "next/link"

function Admin(){
    return(
        <>
            <div className="min-h-screen flex flex-col">
      {/* Sidebar */}
      <div className="flex flex-wrap">
        <aside className="bg-gray-800 text-white w-full sm:w-64 min-h-screen p-4">
          <h1 className="text-xl font-bold mb-4">Admin Dashboard</h1>
          <nav>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:bg-gray-700 block px-4 py-2 rounded">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:bg-gray-700 block px-4 py-2 rounded">
                  Users
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:bg-gray-700 block px-4 py-2 rounded">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:bg-gray-700 block px-4 py-2 rounded">
                  Orders
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:bg-gray-700 block px-4 py-2 rounded">
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-4 sm:p-6">
          <header className="flex flex-wrap justify-between items-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold">Welcome, Admin</h2>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Logout
            </button>
          </header>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white shadow p-4 rounded">
              <h3 className="text-lg font-semibold">Total Users</h3>
              <p className="text-2xl sm:text-3xl font-bold">1,234</p>
            </div>
            <div className="bg-white shadow p-4 rounded">
              <h3 className="text-lg font-semibold">Total Products</h3>
              <p className="text-2xl sm:text-3xl font-bold">567</p>
            </div>
            <div className="bg-white shadow p-4 rounded">
              <h3 className="text-lg font-semibold">Total Orders</h3>
              <p className="text-2xl sm:text-3xl font-bold">789</p>
            </div>
            <div className="bg-white shadow p-4 rounded">
              <h3 className="text-lg font-semibold">Revenue</h3>
              <p className="text-2xl sm:text-3xl font-bold">$12,345</p>
            </div>
          </div>

          {/* Table Section */}
          <div className="mt-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Recent Orders</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-2 px-4 border">Order ID</th>
                    <th className="py-2 px-4 border">Customer</th>
                    <th className="py-2 px-4 border">Amount</th>
                    <th className="py-2 px-4 border">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border">#12345</td>
                    <td className="py-2 px-4 border">John Doe</td>
                    <td className="py-2 px-4 border">$120</td>
                    <td className="py-2 px-4 border text-green-500">Completed</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">#12346</td>
                    <td className="py-2 px-4 border">Jane Smith</td>
                    <td className="py-2 px-4 border">$80</td>
                    <td className="py-2 px-4 border text-yellow-500">Pending</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">#12347</td>
                    <td className="py-2 px-4 border">Alice Brown</td>
                    <td className="py-2 px-4 border">$200</td>
                    <td className="py-2 px-4 border text-red-500">Cancelled</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
        </>
    )
}

export default Admin