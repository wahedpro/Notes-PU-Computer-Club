import { Link } from "react-router-dom";
import { IoIosEyeOff } from "react-icons/io";
import { useState } from "react";
import { IoMdEye } from "react-icons/io";


const RegistrationPage = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const userInfo = {name,email,password};
        console.log(userInfo);
    }

  return (
    <div className="py-5">
      <div className="text-center mb-10">
        <h3 className="text-4xl font-serif">Welcome Here!</h3>
        <p className="text-xl">Join for free and keep your notes safe in the cloud.</p>
      </div>
      <form onSubmit={handleRegister} className="w-[35%] mx-auto flex flex-col items-center gap-4 border py-8" >
        <div className="flex flex-col">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            className="border pl-2 pr-30 py-2"
            required
          />
        </div>
        <div className="flex flex-col">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            className="border pl-2 pr-30 py-2"
            required
          />
        </div>
        <div className="flex flex-col">
          <label>Password</label>
          <div className="flex border">
            <input type={showPassword ? "text": "password"} name="password" placeholder="Enter your password" className="pl-2 pr-23 py-2" required />
            <button onClick={()=>{setShowPassword(!showPassword)}} className="pr-2 text-xl">{showPassword ? <IoIosEyeOff />:<IoMdEye/> }</button>
          </div>
        </div>
        <button type="submit" className="bg-black text-white px-5 py-2 rounded-4xl hover:bg-[#3b3ffb]" > Create Account  </button>
        <p className="text-center">Don't have an account? <Link to="/login" className="text-[#3b3ffb]">Login here</Link></p>
      </form>
    </div>
  );
};

export default RegistrationPage;
