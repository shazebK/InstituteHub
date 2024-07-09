import Image from "next/image";

export default function Login({login}){
    return (
        <div className="w-full h-[90vh] flex justify-center items-center bg-blue-200">
            <div className="w-5/6 h-[80vh] p-2 flex justify-center items-center shadow-lg bg-white">
                <div className="w-2/3 flex flex-col items-center justify-center">
                    <div className="text-center w-[30rem] my-8">
                        <h1 className="text-4xl font-medium my-4">Welcome to Institute Hub</h1>
                        <p className="text-sm text-gray-600">A centralized platform that facilitates efficient communication and management of all your institute activities</p>
                    </div>
                    <form className="w-1/2 h-[40vh] flex flex-col justify-around">
                        <input type = "text" placeholder = "Email@xyz.com" className="py-2 px-4 rounded-full border-2 border-gray-600"/>
                        <input type = "password" placeholder = "Password" className="py-2 px-4 rounded-full border-2 border-gray-600"/>
                        {!login && <input type = "password" placeholder = "Confirm Password" className="py-2 px-4 rounded-full border-2 border-gray-600"/>}
                        <button className="bg-black text-white rounded-full h-12">{login ? "Login" : "Signup"}</button>
                    </form>
                </div>
                <div className="w-1/3 h-5/6 flex justify-center items-center relative">
                    <Image src = "/images/login.png" alt = "login image" className="object-cover" fill priority/>
                </div>
            </div>
        </div>
    )
}