import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPage from "./pages/AddPage/AddPage";
import AllCompletedUncompleted from "./pages/AllCompletedUncompleted/AllCompletedUncompleted";
import ConfigurationPage from "./pages/ConfigurationPage/ConfigurationPage";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <div className="site-wrapper">
          <div className="container">
            <main className="content">
              <Header />
              <Navbar />
              <Routes>
                <Route path="/add" element={<AddPage />} />
                <Route path="/" element={<AllCompletedUncompleted />} />
                <Route path="/configuration" element={<ConfigurationPage />} />
              </Routes>
            </main>
          </div>
        </div>
      </>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
