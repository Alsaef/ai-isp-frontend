import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase.init';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {

        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((res) => {
                navigate('/')
                console.log(res.user);
            })
            .catch((error) => {
                alert(error.message);
            });


    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="card w-full max-w-md bg-white shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold mb-6 justify-center">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                        {/* Email Field */}
                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className={`input input-bordered w-full ${errors.email ? 'input-error' : ''}`}
                                {...register("email", { required: "Email is required" })}
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
                                {...register("password", { required: "Password is required" })}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="card-actions justify-center pt-4">
                            <button type="submit" className="btn btn-success w-full">
                                Log In
                            </button>
                        </div>
                    </form>

                    <p className="text-center text-sm mt-4">
                        Don't have an account? <Link to="/register" className="text-primary hover:underline">Register here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;