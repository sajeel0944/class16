import Athu from "@/components/Athu";
import Link from "next/link";

function Home() {
  return (
    <>
      {/* <Athu/> */}

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 p-8">
          <h1 className="text-2xl font-bold text-center mb-6">Welcome!</h1>
          <p className="text-gray-600 text-center mb-8">
          If you want to become an admin, you need to sign up first and then log in. If you want to become a student, simply log in.
          </p>
          <p className="text-gray-600 text-center mb-8">
            Please choose an option to continue:
          </p>

          <div className="flex flex-col gap-4">
            {/* Login Button */}
            <Link href="/login">
              <div className="w-full text-center bg-gray-100 text-blue-500 border  border-blue-500 py-3 rounded-md hover:text-white hover:bg-blue-500  transition">
                Log In
              </div>
            </Link>
            {/* bg-blue-500 */}
            {/* Sign Up Button */}
            <Link href="/signup">
              <div className="w-full text-center bg-gray-100 text-blue-500 border border-blue-500 py-3 rounded-md hover:text-white hover:bg-blue-500  transition">
                Sign Up
              </div>
            </Link>
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
