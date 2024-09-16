import React from 'react';
import StuProfTabs from '../SharedComponents/StudentProfileTabs';
import SideBar from '../SharedComponents/SideBar';

const StudentProfile = () => {
  return (
    <>
        <div className="student-profile-page">
            <div className="container mx-auto flex gap-6">
                <SideBar />
                <div className="studprof-contents shrink-0">
                    <StuProfTabs />
                </div>
            </div>
        </div>
    </>
  );
};

export default StudentProfile;
