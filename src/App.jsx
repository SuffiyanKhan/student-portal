import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import CertificatePage from "./pages/CertificatePage";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Modules from "./CourseModules/Modules";
import ModuleDetails from "./CourseModules/ModuleDetails";
import Dashboard from "./pages/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import { useGlobalState } from "./ContextApi/ContextApi";

const App = () => {

  const { token} = useGlobalState()


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {
            token ? <Navigate to="/dashboard" /> : <Login />
          }
        </>
      ),
    },
    {
      path: "/cp/:id",
      element: (
        <>
          <CertificatePage />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <Signup />
        </>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <>
          {
          token ? (
            <>
              <Navbar />
              <Dashboard />
            </>
          ) : (
            <Navigate to="/" />
          )
        }
        </>
      ),
    },
    {
      path: "/course-modules",
      element: (
        <>
          <Modules />
        </>
      ),
    },
    {
      path: "/module-details",
      element: (
        <>
          <ModuleDetails />
        </>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
