import { useState } from "react";
import "./App.css";
import Login from "./components/Login.jsx";
import ViewData from "./components/Viewdata.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Login />
      <ViewData />

      {/* lav en komponent hvor man kan trykke på en knap og så kan man se dataen "view data" som kalder viewData() i apiFacade.js og viser dataen i en liste. Hvis man ikke er logget ind skal man ikke kunne se dataen. */}
    </>
  );
}

export default App;
