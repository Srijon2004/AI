import React, { useContext, useState } from 'react'
import { userDataContext } from '../contextapi/UserContext'
import axios from 'axios'


function Customize2() {
    const {userData,backendImage,selectedImage,serverUrl,setUserData}=useContext(userDataContext)
    const [Assistantname,setAssistantname]=useState(userData?.Assistantname || "")
    // const handleupdateAssistance=async()=>{
    //     try {
    //         let formdata=new FormData()
    //         formdata.append("assistantName",Assistantname)
    //         if(backendImage)
    //         {
    //             formdata.append("assistantImage",backendImage)
    //         }
    //         else{
    //             formdata.append("imageUrl",selectedImage)
    //         }
            
    //         // const result=await axios.post(`${serverUrl}/api/user/update`,formdata,{withCredentials:true})
    //         // console.log(result.data)
    //         // setUserData(result.data)

    //         try {
    //             const res = await axios.post(`${serverUrl}/api/user/update`, updatedData, {
    //             withCredentials: true
    //             });

    //             setUserData(res.data); // ✅ update React state
    //             localStorage.setItem('userData', JSON.stringify(res.data)); // save updated user
    //             console.log("Updated user:", res.data);
    //         } catch (error) {
    //             console.error("Update error:", error);
    //         }


    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const handleupdateAssistance = async () => {
    try {
        let formdata = new FormData();
        formdata.append("assistantName", Assistantname);
        if (backendImage) {
            formdata.append("assistantImage", backendImage);
        } else {
            formdata.append("imageUrl", selectedImage);
        }

        const res = await axios.post(`${serverUrl}/api/user/update`, formdata, {
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        setUserData(res.data); // update React state
        localStorage.setItem('userData', JSON.stringify(res.data)); // save updated user
        console.log("Updated user:", res.data);

    } catch (error) {
        console.error("Update error:", error);
    }
};


  return (
    <div className="w-full h-[100vh] bg-gradient-to-t from-black to-[#020236] flex justify-center items-center flex-col p-[20px] ">
    <h1 className="text-white mb-[40px] text-[30px] text-center">Enter Your <span className="text-blue-200">Assistant Name</span></h1>
    <input
          type="text"
          placeholder="Mr.X"
          className="w-full max-w-[600px] h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px]"
          required
          onChange={(e)=>setAssistantname(e.target.value)}
          value={Assistantname}
    />
    {Assistantname && <button className="cursor-pointer min-w-[300px] h-[60px] mt-[30px] text-black font-semibold text-[19px] bg-white rounded-full cursor-pointer" 
        onClick={()=>{
            handleupdateAssistance()
        }}>
          {" "}
          Finally Create Your Assistant
    </button>}
    


    </div>
  )
}

export default Customize2