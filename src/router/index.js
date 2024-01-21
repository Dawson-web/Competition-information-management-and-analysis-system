import { createBrowserRouter } from "react-router-dom";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Student from "../pages/Student";
import Transcripts from "../pages/Student/components/Transcripts";
import Teacher from "../pages/Teacher";

const router = createBrowserRouter([
  {
    path: "/student",
    element: <Student />,
    children: [
      {
        path: "/student/",
        element: <Transcripts />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/teacher",
    element: <Teacher />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
