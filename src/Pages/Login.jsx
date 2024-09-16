import { Link } from 'react-router-dom';
import img from '../assets/login_promo_desktop.png'
import logoG from '../assets/google-logo-icon-png-transparent-background-osteopathy-16.png'
import 'animate.css';
import '../App.css'

const Login = () => {

    return (
        <>
            <div className="login-page">

            <div className='relative w-[500px] z-10'>
                    <h1 className="text-4xl font-bold text-center text-[var(--primary-color)]  animate__animated   animate__flash">Sign In</h1>
                    <p className="text-center mt-3">Don't have an account? <Link className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] underline font-semibold" to='/signUp'>Sign Up</Link></p>

                    <form className="card-body ">


                        <div className="form-control animate__animated animate__fadeIn">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input bg-transparent input-bordered"
                            />
                        </div>
                        <div className="form-control
                        animate__animated animate__fadeIn
                        ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="input bg-transparent input-bordered"
                            />
                        </div>
                        <div className="form-control mt-6" >
                            <Link to='/StudentDashboard' className="sclm-button">Student Login</Link>
                        </div>

                        <div className="form-control mt-6" >
                            <Link to='/TeacherDashboard' className="sclm-button">Teacher Login</Link>
                            <label className="label">
                                <a href="#" className="label-text-alt font-medium text-[var(--primary-color)] hover:text-[var(--secondary-color)] text-base">Forgot password?</a>
                            </label>
                        </div>


                    </form>

                    <div className='space-y-3 mx-auto card-body '>
                        <button className="btn glass outline outline-1 w-full">
                            <img className='h-4 w-4' src={logoG} alt="" />
                            Continue With Google
                        </button>
                    </div>
                </div>

                <img className='h-[100%] w-auto absolute top-0 right-0 -z-1' src={img} alt="login page" />

            </div>
        </>
    );
};

export default Login;