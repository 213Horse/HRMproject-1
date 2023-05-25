import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { ForgotPassword } from "./pages/ForgotPassword/ForgotPassword";

// const Layout = () => {
//   return (
//     <div className="app-layout">
      
//     </div>
//   )
// }

function App() {

  const router = createBrowserRouter([
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
