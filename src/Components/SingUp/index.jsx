import React from "react";
import { Link } from "react-router-dom";
import { InputText } from "../InputText";
import { ShoppingCartContext } from "../../Context";
function SingUp() {
  const { findUserByEmail, createUser } = React.useContext(ShoppingCartContext);
  const [userData, setUserData] = React.useState({
    email: "",
    username: "",
    password: "",
  });
  const [created, setCreated] = React.useState(false)
  const changeUserData = (value, attribute) => {
    const cloneUserData = { ...userData };
    cloneUserData[attribute] = value;
    setUserData(cloneUserData);
  };
  const singUp = () => {
    createUser(userData);
    setCreated(true)
  };
  React.useEffect(() => {
    findUserByEmail();
  }, []);
  return (
    <>
      <h1 className="text-lg ">Sing Up</h1>
      <div className="form-group py-2">
        <div className="form-element flex flex-col">
          <label>Email</label>
          <input
            type="text"
            value={userData.email}
            onChange={(event) => changeUserData(event.target.value, "email")}
            className="outline-1 border-black border-2 text-xl"
          />
        </div>
        <div className="form-element flex flex-col">
          <label>Username</label>
          <input
            type="text"
            value={userData.username}
            onChange={(event) => changeUserData(event.target.value, "username")}
            className="outline-1 border-black border-2 text-xl"
          />
        </div>
        <div className="form-element flex flex-col">
          <label>Password</label>
          <input
            type="text"
            value={userData.password}
            onChange={(event) => changeUserData(event.target.value, "password")}
            className="outline-1 border-black border-2 text-xl"
          />
        </div>
      </div>
      <button
        className="py-4 w-full bg-black text-white"
        onClick={() => singUp()}
      >
        Sing Up
      </button>
      <a href="" className="underline table m-auto mt-2 text-slate-600">
        Forgot my password
      </a>
      <Link to="/sing-in">
        <button className="py-2 mt-10 w-full border-2 border-black">
          Login
        </button>
      </Link>
      {created && <span>Created user</span>}
    </>
  );
}

export { SingUp };
