function Student(){
    return(
        <>
             <div className="min-h-screen flex flex-col">
      {/* Sidebar */}
      <div className="flex flex-wrap">
        <aside className="bg-blue-800 text-white w-full sm:w-64 min-h-screen p-4">
          <h1 className="text-xl font-bold mb-4">Student Dashboard</h1>
          <nav>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:bg-blue-700 block px-4 py-2 rounded">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-blue-700 block px-4 py-2 rounded">
                  Assignments
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-blue-700 block px-4 py-2 rounded">
                  Grades
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-blue-700 block px-4 py-2 rounded">
                  Profile
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-blue-700 block px-4 py-2 rounded">
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-4 sm:p-6">
          <header className="flex flex-wrap justify-between items-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold">Welcome, Student</h2>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Logout
            </button>
          </header>

          {/* Courses Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white shadow p-4 rounded">
              <h3 className="text-lg font-semibold">Mathematics</h3>
              <p className="text-gray-700">Instructor: John Smith</p>
            </div>
            <div className="bg-white shadow p-4 rounded">
              <h3 className="text-lg font-semibold">Physics</h3>
              <p className="text-gray-700">Instructor: Jane Doe</p>
            </div>
            <div className="bg-white shadow p-4 rounded">
              <h3 className="text-lg font-semibold">History</h3>
              <p className="text-gray-700">Instructor: Alice Brown</p>
            </div>
          </div>

          {/* Table Section */}
          <div className="mt-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Upcoming Assignments</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border">
                <thead>
                  <tr className="bg-blue-200">
                    <th className="py-2 px-4 border">Subject</th>
                    <th className="py-2 px-4 border">Assignment</th>
                    <th className="py-2 px-4 border">Due Date</th>
                    <th className="py-2 px-4 border">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border">Mathematics</td>
                    <td className="py-2 px-4 border">Algebra Practice</td>
                    <td className="py-2 px-4 border">Jan 20, 2025</td>
                    <td className="py-2 px-4 border text-yellow-500">Pending</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">Physics</td>
                    <td className="py-2 px-4 border">Lab Report</td>
                    <td className="py-2 px-4 border">Jan 22, 2025</td>
                    <td className="py-2 px-4 border text-green-500">Completed</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">History</td>
                    <td className="py-2 px-4 border">Essay</td>
                    <td className="py-2 px-4 border">Jan 25, 2025</td>
                    <td className="py-2 px-4 border text-red-500">Overdue</td>
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

export default Student