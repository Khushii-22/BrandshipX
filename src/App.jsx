import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./common/footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
