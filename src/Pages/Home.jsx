import Navbar from "../SharedComponents/Navbar";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center">Homescreen</h2>
            <div className="flex gap-10 justify-between">
            <div>
            <h3 className="text-3xl font-bold">Welcome, User!</h3>
            <p className="font-bold">Welcome to School Management App</p>
            </div>
            <div>
                <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                 <svg
                 xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="h-4 w-4 opacity-70">
                <path
                fill-rule="evenodd"
                 d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clip-rule="evenodd" />
                </svg>
                </label>
            </div>
            </div>
            <div className="grid grid-cols-2 gap-5 ">
            <div className="border-2 rounded-lg bg-gray-300 p-5">calender</div>
            <div className="border-2 rounded-lg bg-gray-300 p-5">
                <h1 className="font-bold text-3xl">Quick Actions</h1>
                <div className="grid grid-cols-2 ">
                    <h1 className="font-bold">Attendance</h1>
                    <h1 className="font-bold">Report Generation</h1>
                    <h1 className="font-bold">Results</h1>
                    <h1 className="font-bold">Marks Entry</h1>
                    <h1 className="font-bold">Progress</h1>
                    <h1 className="font-bold">Bus Monitoring</h1>
                </div>
            </div>
            <div className="border-2 rounded-lg bg-gray-300 p-5">
            <h1 className="font-bold text-3xl">General</h1>
            <div>
                <h1 className="font-bold">Fees Payment</h1>
                <h1 className="font-bold">Notice Board</h1>
                <h1 className="font-bold">Result</h1>
                <h1 className="font-bold">Attendance Tracking</h1>
            </div>
            </div>
            <div className="border-2 rounded-lg bg-gray-300 p-5">
                <h1>Task on Your Hand</h1>
                <div>
                    
                </div>
                <div></div>
            </div>
            <div className="border-2 rounded-lg bg-gray-300 p-5">box</div>
            </div>
        </div>
    );
};

export default Home;