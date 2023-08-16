import React from 'react';
import bgImg from '../assets/back-3.jpeg';
import { useForm } from 'react-hook-form';
import googlePNG from '../assets/google-signIN.jpg'

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section>
            <div className="register">
                <div className="col-2">
                    <img src={bgImg} alt=""/>
                </div>
                <div className="col-1">
                    <h3>Sign In</h3>
                    <span>Welcome To StarytoStay !</span>

                    <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("username")} placeholder='Username' />
                        <input type="password" {...register("password")} placeholder='Password' />
                        <input type="password" {...register("confirmpwd")} placeholder='Confirm Password' />
                        <div className='checkbox'>
                            <div className='remember'>
                                <input type="checkbox"/>
                                <label>Remember Me !</label>
                            </div>
                            <div>
                                <p>forgot Password ?</p>
                            </div>
                        </div>
                        
                        <button className='btn' style={{ padding: '.9em 1em' }}>Sign In</button>
                    </form>
                    <div>
                        <div>
                            <p className='or'>OR</p>
                        </div>
                        <div className='googleSign'>
                            <p>Sign In With Google</p>
                            <img src={googlePNG} alt="" height='30px' width='30px'/>
                        </div>
                    </div>
                </div>         
            </div>
        </section>
    );
}

