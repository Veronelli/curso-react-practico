import React from "react";
import { ShoppingCartContext } from "../../Context";
import { Link, useNavigate } from "react-router-dom";
function Account() {
  const navigate = useNavigate();
  const { setUser, getUser, findUserByUsername } =
    React.useContext(ShoppingCartContext);
  const [user, setUserData] = React.useState({});
  const logout = () => {
    setUser({});
  };

  React.useEffect(() => {
    const userLoged = getUser();
    setUserData(userLoged);
    if(!userLoged){
        navigate("/")
    }
  }, []);
  return (
    <>
      <h1 className="text-lg ">User Information</h1>
      <div className="form-group py-2 mb-4">
        <div className="form-element flex flex-col ">
          <p className="text-xl">
            <span>
              <b>Email: </b>
            </span>
            <span>{user.email}</span>
          </p>
        </div>
        <div className="form-element flex flex-col">
          <p className="text-xl">
            <span>
              <b>Username: </b>
            </span>
            <span>{user.username}</span>
          </p>
        </div>
        <div className="form-element flex flex-col">
          <p className="text-xl">
            <span>
              <b>Password: </b>
            </span>
            <span>{user.password}</span>
          </p>
        </div>
      </div>
      <Link
        to="/sing-in"
        onClick={() => logout()}
      >
        <button className="py-4 w-full bg-black text-white">Logout</button>
      </Link>
      <Link to="/">
        <button className="py-2 mt-2 w-full border-2 border-black">Back</button>
      </Link>
    </>
  );
}

export { Account };
