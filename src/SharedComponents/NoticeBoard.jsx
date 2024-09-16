import Fees from '../assets/fee.svg'
import Notice from '../assets/notice.svg'
import Result from '../assets/result.svg'
import Attendance from '../assets/attend.svg'

const NoticeBoard = () => {
    return (
                <>
                    <div className="notice-board block col-span-4 custom-shadow bg-white p-6">
                        <div className="font-semibold text-xl">
                            <h4 className="text-4xl text-[var(--primary-color)] font-bold mb-4">Notice Board</h4>
                            <ul>
                                <li><a href="#" className="gap-2"><img src={Fees} alt="icon" className="h-5 w-5" />Fees Payment</a></li>
                                <li><a href="#" className="gap-2"><img src={Notice} alt="icon" className="h-5 w-5" />Notice Board</a></li>
                                <li><a href="#" className="gap-2"><img src={Result} alt="icon" className="h-5 w-5" />Results</a></li>
                                <li><a href="#" className="gap-2"><img src={Attendance} alt="icon" className="h-5 w-5" />Attendance</a></li>
                            </ul>
                        </div>
                    </div>
                </>
            )
    }

export default NoticeBoard;