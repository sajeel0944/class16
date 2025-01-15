"use client"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react"
import { json } from "stream/consumers";

function Login(){

    // is main emailValue ki value aye gi or is ko email main diya hai
    const emailValue=useRef<HTMLInputElement>(null);

    // is main passwordValue ki value aye gi or is ko email main diya hai
    const passwordValue=useRef<HTMLInputElement>(null);

    // is ky zayeya jo backend sy jo b rout pass hoye ga wo upper jaye ga
    const router=useRouter();


    const handle=async (e:FormEvent<HTMLFormElement>)=>{
        // is ky zayeya page ko reload nhi hota
        e.preventDefault();

        // is main emailValue ki value save ho rahe hai
        const emailresponse=emailValue?.current?.value;

         // is main passwordValue ki value save ho rahe hai
        const passwordresponse=passwordValue?.current?.value;

        // console.log(passwordresponse,"+++++",emailresponse)

        const url=await fetch("/api/logi",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: emailresponse,
                password: passwordresponse,
            }),
        });

        const data= await url.json();
        console.log(data)

        if(data.valitaUser){
            router.push(data.valitaUser)
        }


    }

    
    return(
        <>
            
<div className="flex flex-col min-h-screen bg-gray-100">
{/* Header */}
<header className="bg-white shadow-md py-4">
  <div className="container mx-auto px-4">
    <h1 className="text-2xl font-semibold text-center">Welcome Back</h1>
  </div>
</header>

{/* Main Content */}
<main className="flex-grow flex items-center justify-center">
  <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
    <h2 className="text-xl font-bold text-gray-700 text-center">Login to Your Account</h2>

    <form className="mt-6 space-y-4" onSubmit={handle}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          ref={emailValue}
          type="email"
          id="email"
          placeholder="Enter your email"
          className="w-full mt-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          ref={passwordValue}
          type="password"
          id="password"
          placeholder="Enter your password"
          className="w-full mt-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>


      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Login
      </button>
    </form>

    <div className="mt-6 text-center text-gray-600">
      Dont have an account?{' '}
      <Link href="signup" className="text-blue-500 hover:underline">
        Sign up
      </Link>
    </div>
  </div>
</main>

{/* Footer */}
<footer className="bg-gray-800 text-white py-4">
  <div className="container mx-auto text-center text-sm">
    <p>© 2025 Your Company. All rights reserved.</p>
  </div>
</footer>
</div>

        </>
    )
}

export default Login