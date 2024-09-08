import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { JobProvider } from "./providers/JobContext.jsx";
import { UserProvider } from "./providers/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <JobProvider>
          <App />
        </JobProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
