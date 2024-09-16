import React from 'react';
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaTasks, FaUser, FaCog, FaUniversity } from "react-icons/fa";


const SideBar = () => {

    return (
        <div className="global-sidebar flex-grow-y w-20 flex flex-col items-center bg-[var(--primary-color)]">
          <div className="p-4">
            <ul className="menu space-y-6 flex flex-col items-center">
              {/* Profile Icon at the Top */}
              <li>
                <Link
                  to="/StudentDashboard"
                  className={({ isActive }) =>
                    isActive ? "p-2 rounded" : "p-2"
                  }
                >
                  <FaUniversity size={32} className="mt-2 text-white" /> {/* Profile Icon */}
                </Link>
              </li>

              <li>
                <Link
                  to="/StudentProfile"
                  className={({ isActive }) =>
                    isActive ? "p-2 rounded" : "p-2"
                  }
                >
                  <FaUser size={24} className="text-white" /> {/* Profile Icon */}
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? "p-2 rounded" : "p-2"
                  }
                >
                  <FaTachometerAlt size={24} className="text-white" /> {/* Dashboard Icon */}
                </Link>
              </li>
              <li>
                <Link
                  to="/assignments"
                  className={({ isActive }) =>
                    isActive ? "p-2 rounded" : "p-2"
                  }
                >
                  <FaTasks size={24} className="text-white" /> {/* Assignments Icon */}
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  className={({ isActive }) =>
                    isActive ? "p-2 rounded" : "p-2"
                  }
                >
                  <FaCog size={24} className="text-white" /> {/* Settings Icon */}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      );
    };

export default SideBar;