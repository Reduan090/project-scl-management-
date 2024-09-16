import '../App.css'
import userIMG from '../assets/user.png'
import searchIcon from '../assets/magnifying-glass-solid.svg'
import Calendar from '../SharedComponents/Calendar';
import QuickActions from '../SharedComponents/QuickActions';
import NoticeBoard from '../SharedComponents/NoticeBoard';
import Tasks from '../SharedComponents/Tasks';
import TasksFlow from '../SharedComponents/TasksFlow';

const StudentDashboard = () => {
    return (
        <>
            <section className="dashboardSection">
                <div className="container mx-auto">
                    <div className="flex justify-between">
                        <div className="DBUsername">
                            <h2 className="font-bold text-4xl">Hello, Student</h2>
                            <h4 className="text-2xl">Welcome to school management app</h4>
                        </div>
                        <div className="topSearch">
                            <form action="#" className="flex justify-between">
                                <input className="w-full h-full" type="search" name="studentDboardSearch" id="SDBSearch" placeholder="Search..." />
                                <button type="submit" className="hover:bg-[var(--secondary-color)]">
                                    <img src={searchIcon} alt="search" />
                                </button>
                            </form>
                        </div>
                        <div className="DBuserImage">
                            <img src={userIMG} alt="user image" />
                        </div>
                    </div>
                    <div className="dashboardContent grid grid-cols-12 gap-12 mt-10">
                        <Calendar />
                        <QuickActions />
                        <div className="DBCbottom col-span-12 grid grid-cols-12 gap-12">
                            <NoticeBoard />
                            <div className="DBCBinside col-span-4 grid grid-cols-8 grid-rows-3 gap-12">
                                <Tasks />
                                <TasksFlow />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default StudentDashboard;