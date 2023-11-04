import React from "react";
import {Link} from "react-router-dom";
import {InputText} from "../InputText"
function SingUp(){
    return (
        <>
        <h1 className="text-lg ">
            Sing Up
          </h1>
          <div className="form-group py-2">
            <InputText label="Username"/>
            <InputText label="Password"/>
          </div>
          <button className="py-4 w-full bg-black text-white">Sing Up</button>
          <a href="" className="underline table m-auto mt-2 text-slate-600">Forgot my password</a>
          <Link to="/sing-in">
            <button className="py-2 mt-10 w-full border-2 border-black">
            Login
            </button>
          </Link   >
        </>
    )
}

export {SingUp};