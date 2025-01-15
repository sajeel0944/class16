"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";

function Athu() {
  const manageApi = useRef<HTMLInputElement>(null);
  const responce=useRouter();
  const handle = async (e: FormEvent<HTMLFormElement>) => {
    const getData = manageApi?.current?.value;
    console.log(getData);
    e.preventDefault();
    const url = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ email: getData }),
    });

    
    const data = await url.json();
    console.log(data)

    if(data.putUser){
        responce.push(data.putUser)
    }
    
  };

  return (
    <>
      <form onSubmit={handle}>
        <input
          type="email"
          placeholder="enter your email"
          ref={manageApi}
          className=" h-10 w-96 "
        />

        <button type="submit" className="px-2 py-1 bg-blue-500">
          login
        </button>
      </form>
    </>
  );
}

export default Athu;
