import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { ForgotPassword } from "./pages/ForgotPassword/ForgotPassword";
import { Dashboard } from "./pages/Admin/Dashboard";

const LayoutAdmin = () => {
  return (
    <div className="app-layout">
      <Dashboard/>
    </div>
  )
}

function App() {

  const router = createBrowserRouter([
    {
      path: "/admin",
      element: <LayoutAdmin />,
      errorElement: <h1>404 Page not found</h1>,
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <h1>404 Page not found</h1>,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
      errorElement: <h1>404 Page not found</h1>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
