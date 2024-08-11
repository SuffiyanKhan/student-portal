import "bootstrap/dist/css/bootstrap.min.css";

// import Sharepdf from './Components/sharepdf/Sharepdf';
// import Savepdf from './Components/Savepdf/Savepdf';
// import Printpdf from '../Printpdf';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
// import StudentForm from "./pages/StudentForm";
import CertificatePage from "./pages/CertificatePage";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
// import Dashboard from "./Components/Dashboard/dashboard";
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
      //This will be protected route ( check with validating cnic and password on log in)
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
      //This will be protected route ( check with validating cnic and password on log in)
      path: "/course-modules",
      element: (
        <>
          <Modules />
        </>
      ),
    },
    {
      //This will be protected route ( check with validating cnic and password on log in)
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
