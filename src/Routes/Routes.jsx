import Root from '../Layout/Root';
import { createBrowserRouter } from "react-router-dom";
import Login from '../Pages/Login';
import StudentDashboard from '../Pages/StudentDashboard'; // Import StudentDashboard
import TeacherDashboard from '../Pages/TeacherDashboard'; // Import TeacherDashboard

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/StudentDashboard',
        element: <StudentDashboard />,
      },
      {
        path: '/TeacherDashboard',
        element: <TeacherDashboard />,
      },
    ],
  },
]);

export default router;
