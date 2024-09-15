import { Link } from 'react-router-dom';
import img from '../assets/login_promo_desktop.svg'
import logoG from '../assets/google-logo-icon-png-transparent-background-osteopathy-16.png'
import 'animate.css';
import '../App.css'

const Login = () => {

    return (
        <>
            <div className="bg-[var(--background-color)] pl-[100px] w-full relative">

                <div className="grid grid-cols-1 md:grid-cols-4">

                    <div className="col-span-1 mt-20 ">

                        <div className=''>
                            <h1 className="text-4xl font-bold text-center text-[var(--primary-color)] animate__animated   animate__flash">Sign In</h1>
                            <p className="text-center mt-3">Don't have an account? <Link className="text-[var(--primary-color)] underline font-semibold" to='/signUp'>Sign Up</Link></p>

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
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover font-medium text-[var(--primary-color)] hover:text-[var(--primary-color)] text-base">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6" >
                                    <button className="sclm-button"><Link to='/Home'>Student Login</Link></button>
                                </div>

                                <div className="form-control mt-6" >
                                    <button className="sclm-button"><Link to='/TeacherHome'>Teacher Login</Link></button>
                                </div>


                            </form>

                            <div className='space-y-3 mx-auto card-body '>
                                <button className="btn glass outline outline-1 w-full">
                                    <img className='h-4 w-4' src={logoG} alt="" />
                                    Continue With Google
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="col-span-3 hidden md:block">
                        <img className='h-[100vh] w-full absolute top-0 right-0' src={img} alt="login page" />
                    </div>
                </div>

            </div>
        </>
    );
};

export default Login;