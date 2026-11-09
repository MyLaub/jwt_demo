// import { login } from "../../apiFacade.js";
import { useAuth } from "../hooks/useAuth.js";

function Login({ setErrorMsg, auth}) {
  const handlesubmit = async (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const formObject = Object.fromEntries(new FormData(form));
    console.log(formObject);

    try {
      // const username = await login(formObject.username, formObject.password);

    await auth.signIn(formObject.username, formObject.password);
      // auth.setUsername(username);
    } catch (error) {
      console.error("MESSAGE: ", error.message);
      setErrorMsg(error);
    }
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
