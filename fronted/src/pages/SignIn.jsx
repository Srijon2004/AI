
import React, { useContext, useState } from "react";
import bg from "../assets/authBg.png";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../contextapi/UserContext";
import axios from "axios";

function SignIn() {
  const [showp, setShowp] = useState(false);
  const navi = useNavigate();
  const { serverUrl,userData, setUserData } = useContext(userDataContext);
  const [email, setEmail] = useState("");
  const [loding,setloding]=useState(false)
  const [password, setPassword] = useState("");
  const [err,setErr]=useState("")
  const handleSignIn = async (e) => {
    e.preventDefault(); // ✅ fixed typo
    console.log("Server URL:", serverUrl); // Add this line to check
    setErr("")
    setloding(true)
    try {
      // const result = await axios.post(
      //   // `${serverul}/api/auth/signup`,
      //   `${serverUrl}/api/auth/signin`, 
      //   {  email, password },
      //   { withCredentials: true }
      // );
      let result=await axios.post(`${serverUrl}/api/auth/signin`, { email, password }, { withCredentials: true });
      console.log(result)
      setUserData(result.data)
      // Optionally navigate to signin after signup
      setUserData(result.data)
      setloding(false)
      navi("/");
    } catch (error) {
      console.error("Signup error:", error);
      //setErr(error.response.data.message)
      setloding(false)
      setUserData(null)
      setErr(error.response.data.message)
    }
  };

  return (
    <div
      className="w-full h-[100vh] bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <form
        className="w-[90%] h-[600px] max-w-[500px] bg-[#00000069] backdrop-blur shadow-lg shadow-blue flex flex-col items-center justify-center gap-[20px] px-[20px]"
        onSubmit={handleSignIn}
      >
        <h1 className="text-white text-[30px] font-semibold mb-[30px]">
          Sign In <span className="text-blue-400">Virtual Assistant</span>
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px]"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <div className="w-full h-[60px] border-2 border-white bg-transparent text-white rounded-full text-[18px] relative">
          <input
            type={showp ? "text" : "password"}
            placeholder="Password"
            className="w-full h-full rounded-full outline-none bg-transparent placeholder-gray-300 px-[20px] py-[10px]"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {showp ? (
            <IoIosEyeOff
              className="absolute top-[18px] right-[20px] w-[20px] h-[25px] text-white cursor-pointer"
              onClick={() => setShowp(false)}
            />
          ) : (
            <IoIosEye
              className="absolute top-[18px] right-[20px] w-[20px] h-[25px] text-white cursor-pointer"
              onClick={() => setShowp(true)}
            />
          )}
        </div>
          {err.length>0 && <p className="text-red-500 text-[17px]">
            *{err}
            </p>}
        <button
          type="submit"
          className="min-w-[150px] h-[60px] mt-[30px] text-black font-semibold text-[19px] bg-white rounded-full cursor-pointer"
            disabled={loding}
        >
          {loding?"Loding...":"Sign In"}
        </button>

        <p
          className="text-white text-[18px] cursor-pointer"
          onClick={() => navi("/signup")}
        >
          Want to create a new account ?{" "}
          <span className="text-blue-400">Sign Up</span>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
