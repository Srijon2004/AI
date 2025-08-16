// import axios from 'axios';
// import React, { createContext, useEffect, useState } from 'react';
// export const userDataContext=createContext()
// function UserContext  ({children}) {
//     const serverUrl="http://localhost:8000"
//     const [userData,setuserdata]=useState(null)
//     const [loading, setLoading] = useState(true); // ✅ Track loading state
//     const handlecurreentuser=async ()=>{
//         try {
//             const result = await axios.get(`${serverul}/api/user/current`, { withCredentials: true });//jfh
//             console.log("✅ Current user:", result.data);
//             setuserdata(result.data)
//             console.log(result.data)
//             const res = await axios.get("http://localhost:5000/api/auth/current-user", {
//             withCredentials: true
//             });
//             localStorage.setItem('userData', JSON.stringify(result.data)); // save for reload
//         } catch (error) {
//             console.log(error);
//             console.error("❌ Current user error:", error.response?.status, error.response?.data);
//             setuserdata(null);//hdh
//         }
//         finally {
//             setLoading(false);
//         }
//     }
//     useEffect(()=>{
//         handlecurreentuser()
//     },[])
//     const value={
//         serverUrl,userData,setuserdata
//     }
    
//     return (
//         <div>
//             <userDataContext.Provider value={value}>
//                 {children}
//             </userDataContext.Provider>
            
//         </div>
//     );
// };

// export default UserContext;















// import axios from 'axios';
// import React, { createContext, useEffect, useState } from 'react';

// export const userDataContext = createContext();

// function UserContext({ children }) {
//     const serverUrl = "http://localhost:8000";
//     const [userData, setUserData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [frontendImage, setFrontendImage] = useState(null);
//     const [backendImage, setBackendImage] = useState(null);
//     const [selectedImage,setSelectedImage]=useState(null)
    
    
//     const handleCurrentUser = async () => {
//         try {
//             const result = await axios.get(`${serverUrl}/api/user/current`, { withCredentials: true });
//             console.log("✅ Current user:", result.data);
//             setUserData(result.data);
//             localStorage.setItem('userData', JSON.stringify(result.data)); // save for reload
//         } catch (error) {
//             if (error.response) {
//             console.error(
//                 "❌ Current user error:",
//                 error.response.status,
//                 error.response.data
//             );
//             } else if (error.request) {
//                 console.error("❌ No response from server:", error.request);
//             } else {
//                 console.error("❌ Request setup error:", error.message);
//             }
//             setUserData(null);
//         } finally {
//             setLoading(false);
//         }
//     };


//     useEffect(() => {
//         handleCurrentUser();
//     }, []);

//     const value = {
//         serverUrl,
//         userData,
//         setUserData,
//         loading,
//         backendImage, 
//         setBackendImage,
//         frontendImage, 
//         setFrontendImage,
//         selectedImage,
//         setSelectedImage
//     };

//     return (
//         <userDataContext.Provider value={value}>
//             {children}
//         </userDataContext.Provider>
//     );
// }

// export default UserContext;







// import axios from 'axios';
// import React, { createContext, useEffect, useState } from 'react';

// export const userDataContext = createContext();

// function UserContext({ children }) {
//     const serverUrl = "http://localhost:8000";
//     const [userData, setUserData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [frontendImage, setFrontendImage] = useState(null);
//     const [backendImage, setBackendImage] = useState(null);
//     const [selectedImage, setSelectedImage] = useState(null);

//     const handleCurrentUser = async () => {
//         try {
//             // const result = await axios.get(`${serverUrl}/api/user/current`, {
//             //     withCredentials: true, // ✅ important
//             // });
//             const result = await axios.get(`${serverul}/api/user/current`, { withCredentials: true })
//             console.log("✅ Current user:", result.data);
//             setUserData(result.data);
//             localStorage.setItem('userData', JSON.stringify(result.data));
//         } catch (error) {
//             if (error.response) {
//                 console.error("❌ Current user error:", error.response.status, error.response.data);
//             } else if (error.request) {
//                 console.error("❌ No response from server:", error.request);
//             } else {
//                 console.error("❌ Request setup error:", error.message);
//             }
//             setUserData(null);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         handleCurrentUser();
//     }, []);

//     return (
//         <userDataContext.Provider value={{
//             serverUrl,
//             userData,
//             setUserData,
//             loading,
//             frontendImage,
//             setFrontendImage,
//             backendImage,
//             setBackendImage,
//             selectedImage,
//             setSelectedImage
//         }}>
//             {children}
//         </userDataContext.Provider>
//     );
// }

// export default UserContext;







// import axios from 'axios';
// import React, { createContext, useEffect, useState } from 'react';

// export const userDataContext = createContext();

// function UserContext({ children }) {
//     // const serverUrl = "http://localhost:8000"; // ✅ Correct variable name
//      const serverUrl = "http://localhost:8000"; // ✅ must be inside the component
//     const [userData, setUserData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [frontendImage, setFrontendImage] = useState(null);
//     const [backendImage, setBackendImage] = useState(null);
//     const [selectedImage, setSelectedImage] = useState(null);

//     //const token = localStorage.getItem("authToken"); // or wherever you store it

//     // const handleCurrentUser = async () => {
//     //     try {
//     //         // const result = await axios.get(`${serverUrl}/api/user/current`, { withCredentials: true });
//     //         //  const result = await axios.get("http://localhost:8000/api/auth/current", {
//     //         //     withCredentials: true
//     //         // });
//     //          const result = await axios.get(`${serverUrl}/api/user/current`, { withCredentials: true });
//     //         // const result=axios.get("http://localhost:8000/api/user/current", { withCredentials: true })
//     //         // axios.get(`${serverUrl}/api/user/current`, { withCredentials: true })
//     //         // .then(res => setUserData(res.data))
//     //         // .catch(err => console.error("❌ Current user error:", err.response?.data || err));

//     //         console.log("✅ Current user:", result.data);
//     //         setUserData(result.data);
//     //         localStorage.setItem('userData', JSON.stringify(result.data));
//     //     } catch (error) {
//     //         if (error.response) {
//     //             console.error("❌ Current user error:", error.response.status, error.response.data);
//     //         } else if (error.request) {
//     //             console.error("❌ No response from server:", error.request);
//     //         } else {
//     //             console.error("❌ Request setup error:", error.message);
//     //         }
//     //         setUserData(null);
//     //     } finally {
//     //         setLoading(false);
//     //     }
//     // };
//     const handleCurrentUser = async () => {
//         try {
//             const res = await axios.get("http://localhost:8000/api/user/current", { withCredentials: true });
//             setUserData(res.data);
//         } catch (err) {
//             console.error("❌ Current user error:", err.response?.data || err);
//             setUserData(null);
//             navigate("/signin"); // redirect to signin
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//     handleCurrentUser();
//     }, []);
    
//     return (
//         <userDataContext.Provider value={{
//             serverUrl,
//             userData,
//             setUserData,
//             loading,
//             frontendImage,
//             setFrontendImage,
//             backendImage,
//             setBackendImage,
//             selectedImage,
//             setSelectedImage
//         }}>
//             {children}
//         </userDataContext.Provider>
//     );
// }

// export default UserContext;





import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ import useNavigate

export const userDataContext = createContext();

function UserContext({ children }) {
    const serverUrl = "http://localhost:8000"
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [frontendImage, setFrontendImage] = useState(null);
    const [backendImage, setBackendImage] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const navigate = useNavigate(); // ✅ must be inside the component



    const handleCurrentUser = async () => {
         console.log("Token:", document.cookie); // <-- Check if token exists
    try {
         const res = await axios.get(`${serverUrl}/api/user/current`, { withCredentials: true });
       
    setUserData(res.data);
    console.log(res.data)
  } catch (err) {
    //console.error("❌ Current user error:", err.response?.data || err);
    console.log(err)
    setUserData(null);
  } 
};



    useEffect(() => {
        handleCurrentUser();
    }, []);

    return (
        <userDataContext.Provider value={{
            serverUrl,
            userData,
            setUserData,
            loading,
            frontendImage,
            setFrontendImage,
            backendImage,
            setBackendImage,
            selectedImage,
            setSelectedImage
        }}>
            {children}
        </userDataContext.Provider>
    );
}

export default UserContext;
