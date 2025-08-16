// import React, { useContext, useState } from "react";
// import bg from "../assets/authBg.png";
// import { IoIosEyeOff } from "react-icons/io";
// import { IoIosEye } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import { userDataContext } from "../contextapi/userContext";
// import axios from "axios";
// function SignUp() {
//   const [showp, setshowp] = useState(false);
//   const navi = useNavigate();
//   const {serverul}=useContext(userDataContext)
//   const [name, setname] = useState("");
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");
//   const handleSignup=async (e)=>{
//     e.preventDefalt(); 
//     try {
//       let result=await axios.post(`${serverul}/api/auth/signup`,{
//         name,email,password
//       },{withCredentials:true})
//       console.log(result)
//      } catch (error) {
//       console.log(error)
//      }
//   }
  
//   return (
//     <div
//       className="w-full h-[100vh] bg-cover flex justify-center items-center"
//       style={{ backgroundImage: `url(${bg})` }}
//     >
//       <form className="w-[90%] h-[600px] max-w-[500px] bg-[#00000069] backdrop-blur shadow-lg shadow-blue flex flex-col items-center justify-center gap-[20px] px-[20px]" onSubmit={handleSignup}>
//         <h1 className="text-white text-[30px] font-semibold mb-[30px]">
//           Register to <span className="text-blue-400">Virtual Assistant</span>
//         </h1>
//         <input
//           type="text"
//           placeholder="Enter your Name"
//           className="w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px] "
//           required
//           onChange={(e) => setname(e.target.value)}
//           value={name}
//         ></input>
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px]"
//           required
//           onChange={(e) => setemail(e.target.value)}
//           value={email}
//         ></input>
//         <div className="w-full h-[60px] border-2 border-white bg-transparent text-white rounded-full text-[18px] relative">
//           <input
//             type={showp ? "text" : "password"}
//             placeholder="password"
//             className="w-full h-full rounded-full outline-none bg-transparent placeholder-gray-300 px-[20px] py-[10px]"
//             required
//             onChange={(e) => setpassword(e.target.value)}
//             value={password}
//           ></input>
//           {!showp && (
//             <IoIosEye
//               className="absolute top-[18px] right-[20px] w-[20px] h-[25px] text-[white] cursor-pointer"
//               onClick={() => setshowp(true)}
//             />
//           )}
//           {showp && (
//             <IoIosEyeOff
//               className="absolute top-[18px] right-[20px] w-[20px] h-[25px] text-[white] cursor-pointer"
//               onClick={() => setshowp(false)}
//             />
//           )}
//         </div>

//         <button className="min-w-[150px] h-[60px] mt-[30px] text-black font-semibold text-[19px] bg-white rounded-full cursor-pointer">
//           Sign up
//         </button>
//         <p
//           className="text-[white] text-[18px] cursor-pointer"
//           onClick={() => navi("/signin")}
//         >
//           Already hava an account ?{" "}
//           <span className="text-blue-400">Sign In</span>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default SignUp;




// import React, { useContext, useState } from "react";
// import bg from "../assets/authBg.png";
// import { IoIosEyeOff, IoIosEye } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import { userDataContext } from "../contextapi/UserContext";
// import axios from "axios";

// function SignUp() {
//   const [showp, setShowp] = useState(false);
//   const navi = useNavigate();
//   const { serverul,userData,setuserdata } = useContext(userDataContext);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [err,setErr]=useState("")
//   const [loding,setloding]=useState(false)
//   const handleSignup = async (e) => {
//     e.preventDefault(); // ✅ fixed typo
//     console.log("Server URL:", serverul); // Add this line to check
//     setErr("")
//     setloding(true)
//      try {
//       const result = await axios.post(
//         // `${serverul}/api/auth/signup`,
//         `${serverul}/api/auth/signup`, 
//         { name, email, password },
//         { withCredentials: true }
//       );
//       //onsole.log(result.data);
//       setuserdata(result.data)
//       // Optionally navigate to signin after signup
      
//       setloding(false)
//       navi("/customize");
//     } catch (error) {
//       console.error("Signup error:", error);
//       setErr(error.response.data.message)
//       setloding(false)
//       setuserdata(null)
//     }
//   };

//   return (
//     <div
//       className="w-full h-[100vh] bg-cover flex justify-center items-center"
//       style={{ backgroundImage: `url(${bg})` }}
//     >
//       <form
//         className="w-[90%] h-[600px] max-w-[500px] bg-[#00000069] backdrop-blur shadow-lg shadow-blue flex flex-col items-center justify-center gap-[20px] px-[20px]"
//         onSubmit={handleSignup}
//       >
//         <h1 className="text-white text-[30px] font-semibold mb-[30px]">
//           Register to <span className="text-blue-400">Virtual Assistant</span>
//         </h1>

//         <input
//           type="text"
//           placeholder="Enter your Name"
//           className="w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px]"
//           required
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px]"
//           required
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//         />

//         <div className="w-full h-[60px] border-2 border-white bg-transparent text-white rounded-full text-[18px] relative">
//           <input
//             type={showp ? "text" : "password"}
//             placeholder="Password"
//             className="w-full h-full rounded-full outline-none bg-transparent placeholder-gray-300 px-[20px] py-[10px]"
//             required
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//           />
//           {showp ? (
//             <IoIosEyeOff
//               className="absolute top-[18px] right-[20px] w-[20px] h-[25px] text-white cursor-pointer"
//               onClick={() => setShowp(false)}
//             />
//           ) : (
//             <IoIosEye
//               className="absolute top-[18px] right-[20px] w-[20px] h-[25px] text-white cursor-pointer"
//               onClick={() => setShowp(true)}
//             />
//           )}
//         </div>
//           {err.length>0 && <p className="text-red-500 text-[17px]">
//             *{err}
//             </p>}
//         <button
//           type="submit"
//           className="min-w-[150px] h-[60px] mt-[30px] text-black font-semibold text-[19px] bg-white rounded-full cursor-pointer"
//           disabled={loding}
//         >
//           {loding?"Loding...":"Sign Up"}
//         </button>

//         <p
//           className="text-white text-[18px] cursor-pointer"
//           onClick={() => navi("/signin")}
//         >
//           Already have an account?{" "}
//           <span className="text-blue-400">Sign In</span>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default SignUp;

















import React, { useContext, useState } from "react";
import bg from "../assets/authBg.png";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../contextapi/UserContext";
import axios from "axios";

function SignUp() {
  const [showp, setShowp] = useState(false);
  const navi = useNavigate();
  const { serverUrl,userData,setUserData,} = useContext(userDataContext); // ✅ correct context keys
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);

    try {
      let result = await axios.post(
        `${serverUrl}/api/auth/signup`,
        { name, email, password },
        { withCredentials: true } // ✅ important to send cookies
      );

      setUserData(result.data); // ✅ update context
      setLoading(false);
      navi("/customize"); // navigate after successful signup
    } catch (error) {
      console.error("Signup error:", error);
      setErr(error.response?.data?.message || "Signup failed");
      setLoading(false);
      setUserData(null);
    }
  };

  return (
    <div
      className="w-full h-[100vh] bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <form
        className="w-[90%] h-[600px] max-w-[500px] bg-[#00000069] backdrop-blur shadow-lg shadow-blue flex flex-col items-center justify-center gap-[20px] px-[20px]"
        onSubmit={handleSignup}
      >
        <h1 className="text-white text-[30px] font-semibold mb-[30px]">
          Register to <span className="text-blue-400">Virtual Assistant</span>
        </h1>

        <input
          type="text"
          placeholder="Enter your Name"
          className="w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px]"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

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

        {err.length>0 && 
          <p className="text-red-500 text-[17px]">
            *{err}
          </p>
        }

        <button
          type="submit"
          className="min-w-[150px] h-[60px] mt-[30px] text-black font-semibold text-[19px] bg-white rounded-full cursor-pointer"
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign Ip"}
        </button>

        <p
          className="text-white text-[18px] cursor-pointer"
          onClick={() => navi("/signin")}
        >
          Already have an account?{" "}
          <span className="text-blue-400">Sign In</span>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
