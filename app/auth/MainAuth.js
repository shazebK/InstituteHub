"use client"; // Required for client-side interactivity in Next.js

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import Image from "next/image";

export default function MainAuth({ login: initialLogin }) {
    const [isLogin, setIsLogin] = useState(initialLogin);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const router = useRouter(); // Initialize the router


    const handleAuth = async (e) => {
        e.preventDefault();

        if (!isLogin && password !== confirmPassword) {
            setMessage("Passwords do not match!");
            return;
        }

        try {
            const endpoint = isLogin ? "/api/auth/login" : "/api/auth/signup";
            const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Authentication failed");
            }

            setMessage(isLogin ? "Login successful!" : "Signup successful!");

            // Store the email in localStorage after successful login/signup
            if (isLogin) {
                localStorage.setItem("userEmail", email); // Store email
            }

            // Redirect to homepage after successful login/signup
            router.push("/"); // Redirect to the homepage

        } catch (error) {
            setMessage(error.message);
        }
    };

    const toggleAuthMode = () => {
        setIsLogin((prev) => !prev);
        setMessage(""); // Clear any previous messages
    };

    return (
        <div className="w-full h-[90vh] flex justify-center items-center bg-blue-200">
            <div className="w-5/6 h-[80vh] p-2 flex justify-center items-center shadow-lg bg-white">
                <div className="w-2/3 flex flex-col items-center justify-center">
                    <div className="text-center w-[30rem] my-8">
                        <h1 className="text-4xl font-medium my-4">
                            Welcome to {isLogin ? "Login" : "Signup"}
                        </h1>
                        <p className="text-sm text-gray-600">
                            A centralized platform that facilitates efficient communication and management of all your institute activities
                        </p>
                    </div>
                    <form className="w-1/2 h-[40vh] flex flex-col justify-around" onSubmit={handleAuth}>
                        <input
                            type="email"
                            placeholder="Email@xyz.com"
                            className="py-2 px-4 rounded-full border-2 border-gray-600"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="py-2 px-4 rounded-full border-2 border-gray-600"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {!isLogin && (
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="py-2 px-4 rounded-full border-2 border-gray-600"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        )}
                        <button type="submit" className="bg-black text-white rounded-full h-12">
                            {isLogin ? "Login" : "Signup"}
                        </button>
                    </form>
                    {message && <p className="mt-4 text-red-600">{message}</p>}
                    <button onClick={toggleAuthMode} className="mt-2 text-blue-600 font-semibold">
                        {isLogin ? "New user? Signup" : "Login"}
                    </button>
                </div>
                <div className="w-1/3 h-5/6 flex justify-center items-center relative">
                    <Image
                        src="/images/login.png"
                        alt="auth illustration"
                        className="object-cover"
                        fill
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
