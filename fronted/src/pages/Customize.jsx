import React, { useContext, useRef, useState } from "react";
import { LuImagePlus } from "react-icons/lu";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image4.png";
import image4 from "../assets/image5.png";
import image5 from "../assets/image6.jpeg";
import image6 from "../assets/image7.jpeg";
import image7 from "../assets/authBg.png";
//import Card from '../components/Card'
function Customize() {
  const {serverUrl,userData,setUserData,loading,
        backendImage, 
        setBackendImage,
        frontendImage, 
        setFrontendImage,
        selectedImage,
        setSelectedImage}=useContext(userDataContext)
  const navigate=useNavigate()
  
  
   const inputImage = useRef();
  const handleImage = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      console.error("No file selected");
      return;
    }
    const file = e.target.files[0];
    setBackendImage(file);
    setFrontendImage(URL.createObjectURL(file));
    console.log("Selected file:", file);
  };

  return (
    <div className="w-full h-[100vh] bg-gradient-to-t from-black to-[#020236] flex justify-center items-center flex-col p-[20px] ">
      <h1 className="text-white mb-[40px] text-[30px] text-center">
        Select your <span className="text-blue-200">Assistant Image</span>
      </h1>
      <div className="w-full max-w-[900px] flex justify-center items-center flex-wrap gap-[15px]">
        <Card image={image1} />
        <Card image={image2} />
        <Card image={image3} />
        <Card image={image4} />
        <Card image={image5} />
        <Card image={image6} />
        <Card image={image7} />
        {/* <div className="w-[70px] h-[140px] lg:w-[150px] lg:h-[250px] bg-[#020220] border-2 border-[#0000ff66] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-950 cursor-pointer hover:border-4 hover:border-white flex items-center justify-center"onClick={()=>inputImage.current.click()}>
          {!frontendImage && <LuImagePlus className="text-white w-[25px] h-[25px] "/>}
          {frontendImage && <img src="frontendImage" className="h-full object cover"></img>}
        </div> */}
        <div
          className={`w-[70px] h-[140px] lg:w-[150px] lg:h-[250px] bg-[#020220] border-2 border-[#0000ff66] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-950 cursor-pointer hover:border-4 hover:border-white flex items-center justify-center ${selectedImage=="input"?"border-4 border-white shadow-2xl shadow-blue-950":null}`}
          onClick={() => {inputImage.current.click() 
            setSelectedImage("input")
          }}
        >
          {!frontendImage && (
            <LuImagePlus className="text-white w-[25px] h-[25px]" />
          )}
          {frontendImage && (
            <img
              src={frontendImage}
              className="h-full object-cover"
              alt="Selected"
            />
          )}
        </div>

        <input
          type="file"
          accept="image/*"
          ref={inputImage}
          hidden
          onChange={handleImage}
        ></input>
      </div>
          {selectedImage &&  <button className="cursor-pointer min-w-[150px] h-[60px] mt-[30px] text-black font-semibold text-[19px] bg-white rounded-full cursor-pointer" onClick={()=>navigate("/customize2")}>
          {" "}
          Next
        </button>}
       
    </div>
  );
}
import Card from "../components/Card";
import { userDataContext } from "../contextapi/UserContext";
import { useNavigate } from "react-router-dom";

export default Customize;
