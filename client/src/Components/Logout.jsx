import React, { useEffect, useState } from "react";
import {  GoogleLogout } from "react-google-login";

const clientId = "915916895591-btur57uribnd14j5odbs8bm80eq88ssk.apps.googleusercontent.com";

export default function Logout() {

  const onSuccess = () => {
    alert("Logout made successfully !")
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        render={renderProps => (
            <button type="submit" onClick={renderProps.onClick} disabled={renderProps.disabled}><span>Logout</span></button>
          )}
      />
    </div>
  );
}
