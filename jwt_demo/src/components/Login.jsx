import { login } from "../../apiFacade.js";

function Login() {
  const handlesubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const formObject = Object.fromEntries(new FormData(form));
    console.log(formObject);
    login(formObject.username, formObject.password);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handlesubmit}>
        <input type="text" id="username" placeholder="Username" name="username" />
        <input type="password" id="password" placeholder="Password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
