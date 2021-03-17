import React from "react";
import Map from "./components/Map/MapComponent";
import Template from "./components/Registration/Template";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const formData = [
    {
      label: "Email",
      inputType: "email",
      inputPlaceHolder: "example@server.com",
    },
    {
      label: "Password",
      inputType: "password",
      inputPlaceHolder: "Enter Password",
    },
  ];

  const message = "Don't have an account? Register now";
  const title = "Log in";

  return (
    <div>
      <Template formData={formData} title={title} message={message}></Template>
    </div>
  );
  // <Map></Map>;
}

export default App;
