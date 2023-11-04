import React from "react";
import {InputText} from "../../Components/InputText"
import {Link} from "react-router-dom";

function Login(){
    return (
        <>
        <h1 className="text-lg ">
            Sign In
          </h1>
          <div className="form-group py-2">
            <InputText label="Username"/>
            <InputText label="Password"/>
          </div>
          <button className="py-4 w-full bg-black text-white">Login</button>
          <a href="" className="underline table m-auto mt-2 text-slate-600">Forgot my password</a>
          <Link to="/sing-up">
            <button className="py-2 mt-10 w-full border-2 border-black">
            Sing Up
            </button>
          </Link   >
        </>
    )
}

export {Login};