import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { DarkModeProvider } from "./pages/ConfigurationPage/DarkModeContext";
import Main from "./pages/Main/Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
          <div className="site-wrapper">
            <Main />
          </div>
        </QueryClientProvider>
      </DarkModeProvider>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
