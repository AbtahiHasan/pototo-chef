import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../provider/AuthProvider';
import {  updateProfile } from 'firebase/auth';
import image from "/login.svg"
import chef from "/chef.png"


const Register = () => {
    const {createUser} = useAuth()
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const hendleForm = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const profileUrl = form.profile.value;
        const confirmPassword = form.confirmPassword.value

        setError(null)
        setSuccess(null)

        if(!name || !profileUrl || !email || !password || !confirmPassword) {
            setError("Cannot leave any field empty")
            return
        } 
        
        if(password.length < 6) {
            setError("password at least 6 character")
            return
        }
        if(password !== confirmPassword) {
            setError("password not matched")
            return
        }
        

        createUser(email, password) 
        .then ((result) => {
            updateProfile(result.user, {
                displayName: name,
                photoURL: profileUrl
            })
           form.reset()

           setSuccess("Registration successfull")

        }) 
        .catch(error => {
            
        })
    }




    return (
        <main className='ui-container md:flex items-center w-full gap-5 h-[90vh]'>
                <div className='w-full md:w-1/2 h-[60vh] relative'>
                    <img className='absolute max-w-[150px] left-[45%] top-16 md:top-20 translate-x-[-50%]' src={chef} alt="chef" />
                    <img className='h-full w-full' src={image} alt="login image" />
                </div>
                <section className='border rounded-xl p-[17px] md:w-1/2 mt-1 shadow-3xl'>
                <h2 className='text-center text-2xl'>Sign Up</h2>
                <form onSubmit={hendleForm}>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" className='border rounded p-2 text-base' autoComplete='off' placeholder='Name' />
                    </div>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="profile">Profile pic url</label>
                        <input type="text" name="profile" id="profile" className='border rounded p-2 text-base' autoComplete='off' placeholder='Profile pic url' />
                    </div>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className='border rounded p-2 text-base' autoComplete='off' placeholder='email' required/>
                    </div>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="password" >Password</label>
                        <input type="password" name="password" id="password" className='border rounded p-2 text-base' autoComplete='off' placeholder='password' />
                    </div> 
                    <div className='flex flex-col my-3'>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" name="confirmPassword" id="confirm-password" className='border rounded p-2 text-base' autoComplete='off' placeholder='Confirm Password' />
                    </div>
                    <p className='text-[#da4747]'>{error && error}</p>
                    <p className='text-[#399d23]'>{success && success}</p>
                    <button type='submit' className='bg-[#289944] text-white w-full p-2 text-[21px] rounded mt-[10px]'>Sign Up</button>         
                    <p className='mt-[8px] text-center'>Already have an account? <Link to="/login" className='text-[#1f32dd]'>Login</Link></p>     
                    

                </form>
            </section>
        </main>
        
    );
};

export default Register;