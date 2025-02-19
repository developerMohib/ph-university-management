import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/auth/Register";
import SignIn from "../pages/auth/SignIn";
import NotFound from "../pages/notFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
