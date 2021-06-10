import Template from "../components/Registration/Template";

export default function Login() {
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
  const title = "Login";

  return (
    <Template formData={formData} title={title} message={message}></Template>
  );
}
