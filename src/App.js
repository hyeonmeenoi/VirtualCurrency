import Main from "./routes/main.js";
import Detail from "./routes/detail.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Main />} />
        <Route
          path={`${process.env.PUBLIC_URL}/coin/:id`}
          element={<Detail />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
