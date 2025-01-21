import { createRoot } from "react-dom/client";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App.jsx";
import { StudentProvider } from "./student-context.jsx";
import { BrowserRouter } from "react-router-dom";
// import { StudentProvider } from "./student-context.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StudentProvider>
      <App />
    </StudentProvider>
  </BrowserRouter>
);
