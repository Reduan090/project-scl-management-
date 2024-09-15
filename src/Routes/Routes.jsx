import Root from '../Layout/Root';
import { createBrowserRouter } from "react-router-dom";
import Login from '../Pages/Login';
import Home from '../Pages/StudentDashboard';
import TeacherHome from '../Pages/TeacherDashboard';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: '/',
            element: <Login/>,
        },
        {
          path: '/Home',
          element: <Home/>
        },
        {
          path: '/TeacherHome',
          element: <TeacherHome/>
        }
      ]
    },
  ]);

export default router;