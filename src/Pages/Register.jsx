import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.init';
import axiosInstance from '../Hook/axiosSecure';

const RegisterPage = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const password = watch("password");

    const onSubmit = (data) => {

        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(async (res) => {
                const userInfo = {
                    name: data.name,
                    email: res.user.email,
                    role: "user"
                };

                await axiosInstance.post("/register", userInfo);


                navigate('/')
            })
            .catch((error) => {
                alert(error.message)
            })
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="card w-full max-w-md bg-white shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold mb-6 justify-center">Register</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                        {/* Username Field */}
                        <div>
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Choose a Username"
                                className={`input input-bordered w-full ${errors.username ? 'input-error' : ''}`}
                                {...register("username", { required: "Username is required" })}
                            />
                            {errors.username && (
                                <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className={`input input-bordered w-full ${errors.email ? 'input-error' : ''}`}
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: "Invalid email format"
                                    }
                                })}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className={`input input-bordered w-full ${errors.password ? 'input-error' : ''}`}
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters"
                                    }
                                })}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                            )}
                        </div>



                        {/* Submit Button */}
                        <div className="card-actions justify-center pt-4">
                            <button type="submit" className="btn btn-success w-full">
                                Register
                            </button>
                        </div>
                    </form>

                    <p className="text-center text-sm mt-4">
                        Already have an account? <Link to="/login" className="text-primary hover:underline">Login here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;