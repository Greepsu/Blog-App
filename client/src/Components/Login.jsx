import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";

const clientId = "915916895591-btur57uribnd14j5odbs8bm80eq88ssk.apps.googleusercontent.com";

export default function Login() {

    const [name, setName] = useState()

  const onSuccess = (res) => {
    console.log("[Login Success] currentUser: ", res.profileObj.name);
    setName(res.profileObj.name)
  };

  const onFailure = (res) => {
    console.log("[Login Failed] res:", res);
  };

  return (
    <div>
        {name ? name :
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        render={renderProps => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled}><span>Login</span></button>
          )}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
        }
    </div>
  );
}
