import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <GoogleOAuthProvider clientId="240049511783-nj9fbj759jm5hetqt2cn2bbel17atphl.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </BrowserRouter>
    </StrictMode>
  </Provider>
);
