import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <ErrorBoundary FalbackComponent={ErrorFallback} onReset={() => {}} > */}
      {/* ErrorBoundary in this place will protect against errors in the routing system. So it is a ggod place to put it, just not for this demo where it is put in AppDemoContent instead */}
      <Routes>
        <Route path="/" element={<App />}></Route>
      </Routes>
      {/* </ErrorBoundary> */}
    </BrowserRouter>
  </StrictMode>,
);
