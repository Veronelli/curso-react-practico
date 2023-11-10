// TODO: Modify user by email and save into local storage

import React from "react";
import { ShoppingCartContext } from "../../Context";
import { Link, useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();
  const { setUser, getUser, findUsers, setUsers } =
    React.useContext(ShoppingCartContext);
  const [display, setDisplay] = React.useState(InformationUser.name);
  function InformationUser() {
    return (
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
        <button
          className="py-2 mt-4 w-full border-2 border-black"
          onClick={() => {
            changeDisplay(EditUser.name);
          }}
        >
          Edit
        </button>
      </div>
    );
  }

  function EditUser() {
    const updateUser = () => {
      const users = [];
      let foundUsers = findUsers();
      foundUsers.forEach((userData) => {
        if (userData.email === user.email) {
          users.push({ ...editUser });
        } else {
          users.push({ ...userData });
        }
      });
      setUsers(users);
    };
    const changeUserData = (attribute, value) => {
      const auxUserData = { ...editUser, [attribute]: value };

      setEditUser(auxUserData);
    };
    const [editUser, setEditUser] = React.useState({ ...user });

    return (
      <div className="form-group py-2 mb-4">
        <div className="form-element flex flex-col">
          <label>Email</label>
          <input
            type="text"
            value={editUser.email}
            onChange={(event) => {
              changeUserData("email", event.target.value);
            }}
            className="outline-1 border-black border-2 text-xl"
          />
        </div>
        <div className="form-element flex flex-col">
          <label>Username</label>
          <input
            type="text"
            value={editUser.username}
            onChange={(event) => {
              changeUserData("username", event.target.value);
            }}
            className="outline-1 border-black border-2 text-xl"
          />
        </div>
        <div className="form-element flex flex-col">
          <label>Password</label>
          <input
            type="text"
            onInput={(event) => {
              changeUserData("password", event.target.value);
            }}
            value={editUser.password}
            className="outline-1 border-black border-2 text-xl"
          />
        </div>
        <button
          className="py-2 mt-4 w-full border-2 bg-black text-white"
          onClick={() => {
            updateUser();
          }}
        >
          Update
        </button>
        <button
          className="py-2 mt-4 w-full border-2 border-black"
          onClick={() => {
            changeDisplay(InformationUser.name);
          }}
        >
          User Information
        </button>
      </div>
    );
  }

  const [user, setUserData] = React.useState({});
  const logout = () => {
    setUser({});
  };

  React.useEffect(() => {
    const userLoged = getUser();
    setUserData(userLoged);
    if (!userLoged) {
      navigate("/");
    }
  }, []);

  const changeDisplay = (view) => {
    setDisplay(view);
  };

  return (
    <>
      <h1 className="text-lg ">User Information</h1>
      {display === InformationUser.name && <InformationUser />}
      {display === EditUser.name && <EditUser />}
      <Link to="/sing-in" onClick={() => logout()}>
        <button className="py-4 w-full bg-black text-white">Logout</button>
      </Link>
      <Link to="/">
        <button className="py-2 mt-2 w-full border-2 border-black">Back</button>
      </Link>
    </>
  );
}

export { Account };
