import Main from "./routes/main.js";
import Detail from "./routes/detail.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/coin" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
