import { useReactiveVar } from "@apollo/client";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { isLoggedInVar } from "./apollo";
import { routes } from "./routes";
import { Home } from "./screens/Home";
import { Login } from "./screens/Login";
import { NotFound } from "./screens/NotFound";
import { SignUp } from "./screens/SignUp";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={isLoggedIn ? <Home /> : <Login />} />
        <Route path={routes.signUp} element={<SignUp />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
