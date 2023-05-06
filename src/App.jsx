import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPage from "./pages/AddPage/AddPage";
import AllPage from "./pages/AllPage/AllPage";
import CompletedPage from "./pages/CompletedPage/CompletedPage";
import UnCompletedPage from "./pages/UnCompletedPage/UnCompletedPage";
import ConfigurationPage from "./pages/ConfigurationPage/ConfigurationPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add" element={<AddPage />} />
        <Route path="/" element={<AllPage />} />
        <Route path="/completed" element={<CompletedPage />} />
        <Route path="/uncompleted" element={<UnCompletedPage />} />
        <Route path="/configuration-page" element={<ConfigurationPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
