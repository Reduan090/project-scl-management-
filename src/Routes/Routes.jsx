import Root from '../Layout/Root';
import { createBrowserRouter } from "react-router-dom";
import Login from '../Pages/Login';
import StudentDashboard from '../Pages/StudentDashboard'; // Import StudentDashboard
import TeacherDashboard from '../Pages/TeacherDashboard'; // Import TeacherDashboard
import StudentProfile from '../Pages/StudentProfile';

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
      {
        path: '/StudentProfile',
        element: <StudentProfile />,
      },
    ],
  },
]);

export default router;
