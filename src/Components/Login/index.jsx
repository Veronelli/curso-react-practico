import React from "react";
import {InputText} from "../../Components/InputText"
import {Link} from "react-router-dom";
import {ShoppingCartContext} from "../../Context";

function Login(){
    const {setUser, getUser, findUserByUsername} = React.useContext(ShoppingCartContext)
    const [userData, setUserData] = React.useState({
        username: "",
        password: ""
    })

    const changeUserData = (value,attribute)=>{
        const cloneUserData = {...userData};
        cloneUserData[attribute] = value
        setUserData(cloneUserData)
    }

    const submitData = ()=>{
        const user = findUserByUsername(userData);
        setUser(userData)
    }

    return (
        <>
        <h1 className="text-lg ">
            Sign In
          </h1>
          <div className="form-group py-2">
            <div className="form-element flex flex-col">
                <label>Username</label>
                <input
                    type="text"
                    value={userData.username}
                    onChange={(event)=>changeUserData(event.target.value, "username")}
                    className="outline-1 border-black border-2 text-xl" />
                </div>
            <div className="form-element flex flex-col">
                <label>Password</label>
                <input onChange={()=>changeUserData(event.target.value, "password")} type="text" className="outline-1 border-black border-2 text-xl" />
            </div>
          </div>
          <button className="py-4 w-full bg-black text-white" onClick={submitData}>Login</button>
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