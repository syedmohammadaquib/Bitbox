/** @format */

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contexts/authContext/index.jsx";
// import Alert from "./component/Alert";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AuthProvider>
      <App />
      <Toaster />
    </AuthProvider>
  </>
);
