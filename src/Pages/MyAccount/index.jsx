import { useNavigate } from "react-router-dom";
import { Account } from "../../Components/Account";
import Layout from "../../Components/Layout";
import React from "react";
import { ShoppingCartContext } from "../../Context";

function MyAccount() {
  const navigate = useNavigate();
  const [user, setUserData] = React.useState({});
  const { setUser, getUser, findUserByUsername } =
    React.useContext(ShoppingCartContext);
  React.useEffect(() => {
    const userSession = getUser(); 
    setUserData(userSession);
    if (JSON.stringify(userSession) == "{}") {
      navigate("/");
    }
  }, []);
  return (
    <Layout>
      MyAccount
      <div className="my-4">
        <div className="p-2 border-2 border-black">
          <Account />
        </div>
      </div>
    </Layout>
  );
}

export default MyAccount;
