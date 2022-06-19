import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Example from "./components/Example";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Login />
            </>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <>
              <Signup />
            </>
          }
        ></Route>
        <Route
          path="/example"
          element={
            <>
              <Example />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
