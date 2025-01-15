"use client"

import Link from "next/link"
import { FormEvent, useRef, useState } from "react"

function Signup(){

  // ye is liye dia hai nichy jo buttom ko hidden karry
  const [dis,setdis]=useState<boolean>(false);

  // is sy usestate ki value change karrhy hai or is ko buttom main dia hai
  const buttomDis=()=>{
    setdis(!dis);
  };

    // is main jo email ky andar value aye gi wo is main save hogi
    const emailValue=useRef<HTMLInputElement>(null);

    // is main jo password ky andar value aye gi wo is main save hogi
    const passwordvalue=useRef<HTMLInputElement>(null);

    const handle=async (e:FormEvent<HTMLFormElement>)=>{
        // is sy page load reload nhi hoye ga is sy from ky andar submit main dia hai
        e.preventDefault();

        // is ky andar emailValue ki value current value save ho rahe hai
        const emailresponse=emailValue?.current?.value;

        // is ky andar passwordvalue ki value current value save ho rahe hai
        const passwordresponse=passwordvalue?.current?.value;

        console.log(passwordresponse,"++++++++++++", emailresponse)
        // is main api ky andar value dy raha ho
        const url=await fetch("/api/sign",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            // is ky zayeya value ko bankend main send kar raha hai
            body: JSON.stringify({
                email:emailresponse,
                password:passwordresponse,
            }),
        });
    };

    return(
        <>
                         
<div className="flex flex-col min-h-screen bg-gray-100">
{/* Header */}
<header className="bg-white shadow-md py-4">
  <div className="container mx-auto px-4">
    <h1 className="text-2xl font-semibold text-center">Welcome</h1>
  </div>
</header>

{/* Main Content */}
<main className="flex-grow flex items-center justify-center">
  <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
    <h2 className="text-xl font-bold text-gray-700 text-center">Create your Account</h2>

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
          ref={passwordvalue}
          type="password"
          id="password"
          placeholder="Enter your password"
          className="w-full mt-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* <div className="flex items-center justify-between">
        <label className="flex items-center text-sm text-gray-600">
          <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
          <span className="ml-2">Remember me</span>
        </label>
        <a href="#" className="text-sm text-blue-500 hover:underline">
          Forgot password?
        </a>
      </div> */}
      {/* <Link href={"/login"}> */}
      <button
      onClick={buttomDis}
        type="submit"
        className={`w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ${dis ? "hidden" : "block"}`}
      >
        Sign up
      </button>
    </form>

    <div className="mt-6 text-center text-gray-600">
      {/* Don't have an account? */}
      If you have created an account, go to the login page  &nbsp;
      <Link href="login" className="text-blue-500 hover:underline">
        Login
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

export default Signup