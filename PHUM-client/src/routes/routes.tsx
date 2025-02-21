import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/auth/Register";
import SignIn from "../pages/auth/SignIn";
import NotFound from "../pages/notFound/NotFound";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import { adminPaths } from "./admin.routes";
import { routeGenerator } from "../utils/routeGenerator";

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <Mainlayout />,
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  },
  {
    path: "/admin",
    element: <App />,
    errorElement: <NotFound />,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    errorElement: <NotFound />,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/student",
    element: <App />,
    errorElement: <NotFound />,
    children: routeGenerator(adminPaths),
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
