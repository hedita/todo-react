import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPage from "../pages/AddPage/AddPage";
import AllPage from "../pages/AllPage/AllPage";
import CompletedPage from "../pages/CompletedPage/CompletedPage";
import UnCompletedPage from "../pages/UnCompletedPage/UnCompletedPage";
import ConfigurationPage from "../pages/ConfigurationPage/ConfigurationPage";

const App = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/Add" element={<AddPage />} />
      <Route path="/All" element={<AllPage />} />
      <Route path="/Completed" element={<CompletedPage />} />
      <Route path="/UnCompleted" element={<UnCompletedPage />} />
      <Route path="/ConfigurationPage" element={<ConfigurationPage />} />
    </Routes>
  </BrowserRouter>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
