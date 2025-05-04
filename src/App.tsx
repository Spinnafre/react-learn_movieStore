import { Outlet } from "react-router";
import "./styles/App.css";
import { Navbar } from "./components/Navbar";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
    </MovieProvider>
  );
}

export default App;
