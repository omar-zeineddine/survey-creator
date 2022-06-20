import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Admin from "./components/Admin";
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
        <Route
          path="/admin"
          element={
            <>
              <Admin />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
