import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import image from "/login.svg"
import chef from "/chef.png"


import { useAuth } from '../provider/AuthProvider';
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'
    const {signIn, signInWithGoogle, signInWithGithub} = useAuth()
    const [error, setError] = useState(null)

    const hendleForm = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value
        setError(null)

        if(!email || !password) {
            setError("Cannot leave any field empty")
            return
        } 
        signIn(email, password) 
        .then (() => {
            navigate(from, { replace: true })
            form.reset()
        })
        .catch(error => {
            setError(error.message)  
        })
       
        }

        
        
        

        const handelGoogle = () => {
            signInWithGoogle()
                .then((result) => {

                    navigate(from)
                })
                .catch((error) => {
                    console.log(error.message)
                })
        }
    
        const handelGitHub = () => {
            signInWithGithub()
            .then((result) => {
                const gitHub = result.user;

                navigate(from)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }
    return (
        <section className='ui-container md:flex items-center w-full gap-5'>        

        <div className='w-full md:w-1/2 h-[60vh] relative'>
                <img className='absolute max-w-[150px] left-[45%] top-16 md:top-20 translate-x-[-50%]' src={chef} alt="chef" />
                <img className='h-full w-full' src={image} alt="login image" />
        </div>
        <section className='border rounded-xl p-[25px] mt-10 shadow-3xl md:w-1/2'>
        <h2 className='text-center text-3xl'>Login</h2>
        <form onSubmit={hendleForm}>
            <div className='flex flex-col my-4'>
                <label htmlFor="email" className='text-[17px]'>Email</label>
                <input type="email" name="email" id="email" className='border rounded p-2 text-base' autoComplete='off' placeholder='email' required/>
            </div>
            <div className='flex flex-col my-4'>
                <label htmlFor="password" className='text-[17px]'>Password</label>
                <input type="password" name="password" id="password" className='border rounded p-2 text-base' autoComplete='off' placeholder='password' />
            </div>
            <p className='text-[#da4747]'>{error && error}</p> 
            <button type='submit' className='bg-[#289944] text-white w-full p-2 text-[21px] rounded mt-[10px]'>Login</button>         
            <p className='mt-[8px] text-center'>New to Pototo Chef? <Link to="/register" className='text-[#1f32dd]'>Create New Account</Link></p> 

             <div className='flex items-center justify-between mt-[25px] '>
                <hr className='w-[45%] bg-[#95A0A7]'/>
                <p className='text-[#95A0A7]'>Or</p>
                <hr className='w-[45%] bg-[#95A0A7]'/>
            </div>   
            <button onClick={handelGoogle} className='p-[10px] border rounded w-full flex justify-center items-center gap-[6px] mt-[33px]'><FcGoogle className='text-[32px]'/><span>Continue with Google</span></button>  
            <button onClick={handelGitHub} className='p-[10px] border rounded w-full flex justify-center items-center gap-[6px] mt-[10px]'><AiFillGithub className='text-[32px]'/><span>Continue with Github</span></button>      
        </form>
    </section>
        </section>
        
    );
};

export default Login;