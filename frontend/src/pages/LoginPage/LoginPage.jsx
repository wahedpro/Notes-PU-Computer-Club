import { Link, useNavigate } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {login} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const userInfo = { email, password };

    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          login(data.user)
          navigate("/notes")
        } else {
          alert("fail");
        }
      });
  };

  return (
    <div className="py-10">
      <div className="text-center mb-10">
        <h3 className="text-4xl font-serif">Welcome Back!</h3>
        <p className="text-xl">We missed you! Please enter your details.</p>
      </div>
      <form
        onSubmit={handleLogin}
        className="w-[35%] mx-auto flex flex-col items-center gap-5 border py-8"
      >
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
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="pl-2 pr-23 py-2"
              required
            />
            <button
              type="button"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className="pr-2 text-xl"
            >
              {showPassword ? <IoIosEyeOff /> : <IoMdEye />}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="bg-black text-white px-5 py-2 rounded-4xl hover:bg-[#3b3ffb]"
        >
          Login
        </button>
        <p className="text-center">
          Don't have an account?{" "}
          <Link to="/registration" className="text-[#3b3ffb]">
            Registration
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
