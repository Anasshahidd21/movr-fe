import Template from "../components/Registration/Template";

export default function Signup() {
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
    {
      label: "Validate Password",
      inputType: "password",
      inputPlaceHolder: "Enter Password",
    },
  ];

  const message = "Already have an account? Log in!";
  const title = "Sign Up";

  return (
    <Template formData={formData} title={title} message={message}></Template>
  );
}
