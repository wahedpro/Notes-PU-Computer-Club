import { useState } from "react";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

const RegistrationPage = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleRegister=(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const mail = e.target.email.value;
        const password = e.target.password.value;

        const userInfo = {name,mail,password};

        console.log(userInfo);
    }


  return (
    <div className='py-20 flex flex-col items-center gap-5 justify-center'>
        <h1>Register Our Website</h1>
        <form onSubmit={handleRegister} className='flex flex-col gap-5 items-center w-[500px]'>
            <input className="border px-10 py-2" type="text" name="name" placeholder='Enter Full Name' required/>
            <input className="border px-10 py-2" type="email" name="email" placeholder='Enter Email Address' required/>
            <div className="border px-3">
                <input className="px-10 py-2" type={showPassword ? "text" : "password"} name="password" placeholder='Enter Password' required />
                <button type="button" onClick={()=>setShowPassword(!showPassword)}> {showPassword ? <IoIosEyeOff /> :  <IoIosEye /> }</button>
            </div>
            <button className="border px-10 py-2" type="submit">register</button>
        </form>
    </div>
  )
}

export default RegistrationPage