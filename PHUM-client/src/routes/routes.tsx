import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/auth/Register";
import SignIn from "../pages/auth/SignIn";
import NotFound from "../pages/notFound/NotFound";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <Mainlayout />,
    element : <App />,
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
    element : <App />,
    errorElement: <NotFound />,
    children: [          
      {
        path: "dashboard",
        element: <AdminDashboard />
      },    
      {
        path: "create-admin",
        element: <CreateAdmin />
      },    
      {
        path: "create-faculty",
        element: <CreateFaculty />
      },    
      {
        path: "create-student",
        element: <CreateStudent />
      },    
    ]
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
