import React, { useState, useContext } from "react";

//import Lib
import { GoogleLogin, GoogleLogout } from "react-google-login";

//import Component
import { Context } from "./userContext";

const clientId =
  "915916895591-btur57uribnd14j5odbs8bm80eq88ssk.apps.googleusercontent.com";

export default function Login() {
  const [name, setName] = useState();
  const [context, setContext] = useContext(Context);

  const onSuccessLogin = (res) => {
    console.log("[Login Success] currentUser: ", res.profileObj.name);
    setContext(res.profileObj);
    setName(res.profileObj.name);
  };

  const onSuccessLogout = () => {
    setName("");
    alert("Logout made successfully !");
  };

  const onFailure = (res) => {
    console.log("[Login Failed] res:", res);
  };

  return (
    <div className="login-button">
      {name ? (
        name
      ) : (
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <span>Login</span>
            </button>
          )}
          onSuccess={onSuccessLogin}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      )}
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccessLogout}
        render={(renderProps) => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
            <span>Logout</span>
          </button>
        )}
      />
    </div>
  );
}
