import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./app/App.tsx";
import "./assets/css/fonts.css";

createRoot(document.getElementById("root")!).render(<App />);
