import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import auth_data from "./raw_data/auth data/auth_data.json";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain={auth_data.domain}
    clientId={auth_data.client_id}
    authorizationParams={{
      redirect_uri: `${window.location.origin}/upload_images` 
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);
