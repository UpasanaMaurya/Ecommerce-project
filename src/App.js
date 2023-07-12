import React from "react";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "signup",
    element: <SignUpPage />,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
