import "./styles.css";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Link to="/read">
          <h1>Read</h1>
        </Link>
        <Link to="/create">
          <h1>Create</h1>
        </Link>
        <Routes>
          <Route path="/" element={<Read />} />
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
