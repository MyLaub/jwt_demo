import { useState } from "react";
import "./App.css";
import Login from "./components/Login.jsx";
import ViewData from "./components/Viewdata.jsx";
import ErrorBanner from "./components/ErrorBanner.jsx";
import { useAuth } from "./hooks/useAuth.js";
import { Outlet } from "react-router";
import Header from "./components/Header.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
   const auth = useAuth();

  return (
    <>
    <Header username={auth.username} />
      {errorMsg && <ErrorBanner errorMessage={errorMsg.message} onClear={() => setErrorMsg(null)} />}
      <Login setErrorMsg={setErrorMsg} setUsername={auth.setUsername} />
      <ViewData />

       <div>
      <Outlet context={{ auth }} />
    </div>

      {/* lav en komponent hvor man kan trykke på en knap og så kan man se dataen "view data" som kalder viewData() i apiFacade.js og viser dataen i en liste. Hvis man ikke er logget ind skal man ikke kunne se dataen. */}
    </>
  );
}

export default App;
