// import React, { useContext } from 'react'
// import { Navigate, Route,Routes } from 'react-router-dom'

// import SignIn from './pages/Signin'
// import SignUp from './pages/Signup'
// import Customize from './pages/Customize'
// import { userDataContext } from './contextapi/UserContext'
// import Home from './pages/Home'
// import Customize2 from './pages/Customize2'

// function App() {
//   const {userData,setuserdata}=useContext(userDataContext)
//   console.log(userData)
//   return (
//     <Routes>
//       <Route path='/' element={(userData?.assistantImage && userData?.assistantName)?<Home />:<Navigate to={"/customize"}/>} />
//       <Route path='/signup' element={!userData?<SignUp />:<Navigate to ={"/"}/> } />
//       <Route path='/signin' element={!userData?<SignIn />:<Navigate to ={"/"}/> } />
//       <Route path='/customize' element={userData?<Customize/>:<Navigate to ={"/signin"}/> } />
//       <Route path='/customize2' element={userData?<Customize2/>:<Navigate to ={"/signin"}/> } />
//     </Routes>
//   )
// }

// export default App






import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import Customize from "./pages/Customize";
import Customize2 from "./pages/Customize2";
import Home from "./pages/Home";
import { userDataContext } from "./contextapi/UserContext";

function App() {
  const { userData, loading } = useContext(userDataContext);

  const isLoggedIn = !!userData;
  const isCustomized = isLoggedIn && userData?.assistantImage && userData?.assistantName;

  // Wait for userData to load
  if (loading) return <div>Loading...</div>;

  return (
    <Routes>
      {/* Home route */}
      <Route
        path="/"
        element={
          isLoggedIn
            ? isCustomized
              ? <Home />
              : <Navigate to="/customize" replace />
            : <Navigate to="/signin" replace />
        }
      />

      {/* Auth routes */}
      <Route
        path="/signup"
        element={!isLoggedIn ? <SignUp /> : <Navigate to="/" replace />}
      />
      <Route
        path="/signin"
        element={!isLoggedIn ? <SignIn /> : <Navigate to="/" replace />}
      />

      {/* Customize routes */}
      <Route
        path="/customize"
        element={
          isLoggedIn
            ? isCustomized
              ? <Navigate to="/" replace />
              : <Customize />
            : <Navigate to="/signin" replace />
        }
      />
      <Route
        path="/customize2"
        element={
          isLoggedIn
            ? isCustomized
              ? <Navigate to="/" replace />
              : <Customize2 />
            : <Navigate to="/signin" replace />
        }
      />
    </Routes>
  );
}

export default App;















// import React, { useContext } from 'react';
// import { Navigate, Route, Routes } from 'react-router-dom';

// import SignIn from './pages/Signin';
// import SignUp from './pages/Signup';
// import Customize from './pages/Customize';
// import { userDataContext } from './contextapi/UserContext';
// import Home from './pages/Home';

// function App() {
//   const { userData } = useContext(userDataContext);

//   const isLoggedIn = !!userData && Object.keys(userData).length > 0;
//   const isCustomized =
//     isLoggedIn && userData?.assistantImage && userData?.assistantName;

//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={
//           isCustomized ? <Home /> : <Navigate to="/customize" replace />
//         }
//       />
//       <Route
//         path="/signup"
//         element={!isLoggedIn ? <SignUp /> : <Navigate to="/" replace />}
//       />
//       <Route
//         path="/signin"
//         element={!isLoggedIn ? <SignIn /> : <Navigate to="/" replace />}
//       />
//       <Route
//         path="/customize"
//         element={isLoggedIn ? <Customize /> : <Navigate to="/signin" replace />}
//       />
//     </Routes>
//   );
// }

// export default App;







// import React, { useContext } from 'react';
// import { Navigate, Route, Routes } from 'react-router-dom';

// import SignIn from './pages/Signin';
// import SignUp from './pages/Signup';
// import Customize from './pages/Customize';
// import { userDataContext } from './contextapi/UserContext';
// import Home from './pages/Home';

// function App() {
//   const { userData, loading } = useContext(userDataContext); // Add a loading flag in your context while fetching user data

//   const isLoggedIn = !!userData && Object.keys(userData).length > 0;
//   const isCustomized =
//     isLoggedIn && userData?.assistantImage && userData?.assistantName;

//   if (loading) {
//     return <div>Loading...</div>; // prevent redirect flicker
//   }

//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={
//           isCustomized ? <Home /> : isLoggedIn ? <Navigate to="/customize" /> : <Navigate to="/signin" />
//         }
//       />
//       <Route
//         path="/signup"
//         element={!isLoggedIn ? <SignUp /> : <Navigate to="/" />}
//       />
//       <Route
//         path="/signin"
//         element={!isLoggedIn ? <SignIn /> : <Navigate to="/" />}
//       />
//       <Route
//         path="/customize"
//         element={
//           isLoggedIn
//             ? isCustomized
//               ? <Navigate to="/" />
//               : <Customize />
//             : <Navigate to="/signin" />
//         }
//       />
//     </Routes>
//   );
// }

// export default App;




// import React, { useContext } from 'react';
// import { Navigate, Route, Routes } from 'react-router-dom';

// import SignIn from './pages/Signin';
// import SignUp from './pages/Signup';
// import Customize from './pages/Customize';
// import { userDataContext } from './contextapi/UserContext';
// import Home from './pages/Home';

// function App() {
//   const { userData, loading } = useContext(userDataContext); // Add loading in your context
//   console.log(userData);
  
//   const isLoggedIn = !!userData && Object.keys(userData).length > 0;
//   const isCustomized = userData?.assistantImage && userData?.assistantName;

//   // Prevent redirect flicker while loading
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Routes>
//       {/* Home route */}
//       <Route
//         path="/"
//         element={
//           isLoggedIn
//             ? isCustomized
//               ? <Home />
//               : <Navigate to="/customize" />
//             : <Navigate to="/signin" />
//         }
//       />

//       {/* Auth routes */}
//       <Route
//         path="/signup"
//         element={!isLoggedIn ? <SignUp /> : <Navigate to="/" />}
//       />
//       <Route
//         path="/signin"
//         element={!isLoggedIn ? <SignIn /> : <Navigate to="/" />}
//       />

//       {/* Customize route */}
//       <Route
//         path="/customize"
//         element={
//           isLoggedIn
//             ? isCustomized
//               ? <Navigate to="/" /> // if already customized, send home
//               : <Customize /> // if not customized, stay here
//             : <Navigate to="/signin" />
//         }
//       />
//     </Routes>
//   );
// }

// export default App;



// import React, { useContext } from 'react';
// import { Navigate, Route, Routes } from 'react-router-dom';

// import SignIn from './pages/Signin';
// import SignUp from './pages/Signup';
// import Customize from './pages/Customize';
// import { userDataContext } from './contextapi/UserContext';
// import Home from './pages/Home';

// function App() {
//   const { userData, loading } = useContext(userDataContext);

//   const isLoggedIn = !!userData;
//   const isCustomized = isLoggedIn && userData?.assistantImage && userData?.assistantName;

//   if (loading) {
//     return <div>Loading...</div>; // Prevent redirect until data is ready
//   }

//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={
//           isLoggedIn
//             ? isCustomized
//               ? <Home />
//               : <Navigate to="/customize" />
//             : <Navigate to="/signin" />
//         }
//       />
//       <Route
//         path="/signup"
//         element={!isLoggedIn ? <SignUp /> : <Navigate to="/" />}
//       />
//       <Route
//         path="/signin"
//         element={!isLoggedIn ? <SignIn /> : <Navigate to="/" />}
//       />
//       <Route
//         path="/customize"
//         element={
//           isLoggedIn
//             ? isCustomized
//               ? <Navigate to="/" />
//               : <Customize /> // stay here until customization is done
//             : <Navigate to="/signin" />
//         }
//       />
//     </Routes>
//   );
// }

// export default App;




// import React, { useContext } from 'react';
// import { Navigate, Route, Routes } from 'react-router-dom';

// import SignIn from './pages/Signin';
// import SignUp from './pages/Signup';
// import Customize from './pages/Customize';
// import { userDataContext } from './contextapi/UserContext';
// import Home from './pages/Home';

// function App() {
//   const { userData, loading } = useContext(userDataContext);

//   const isLoggedIn = !!userData;
//   const isCustomized = isLoggedIn && userData?.assistantImage && userData?.assistantName;

//   // Wait for userData to load before deciding
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Routes>
//       {/* Home route */}
//       <Route
//         path="/"
//         element={
//           isLoggedIn
//             ? isCustomized
//               ? <Home />
//               : <Navigate to="/customize" /> // stay in customize if not done
//             : <Navigate to="/signin" />
//         }
//       />

//       {/* Auth routes */}
//       <Route
//         path="/signup"
//         element={!isLoggedIn ? <SignUp /> : <Navigate to="/" />}
//       />
//       <Route
//         path="/signin"
//         element={!isLoggedIn ? <SignIn /> : <Navigate to="/" />}
//       />

//       {/* Customize route */}
//       <Route
//         path="/customize"
//         element={
//           isLoggedIn
//             ? isCustomized
//               ? <Navigate to="/" /> // if customized, go home
//               : <Customize /> // if not customized, STAY here
//             : <Navigate to="/signin" />
//         }
//       />
//     </Routes>
//   );
// }

// export default App;





// import React, { useContext } from 'react';
// import { Navigate, Route, Routes } from 'react-router-dom';

// import SignIn from './pages/Signin';
// import SignUp from './pages/Signup';
// import Customize from './pages/Customize';
// import { userDataContext } from './contextapi/UserContext';
// import Home from './pages/Home';

// function App() {
//   const { userData, loading } = useContext(userDataContext);

//   const isLoggedIn = !!userData;
//   const isCustomized = isLoggedIn && userData?.assistantImage && userData?.assistantName;

//   // ⏳ Wait until we know the user status
//   if (loading) return <div>Loading...</div>;

//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={
//           isLoggedIn
//             ? isCustomized
//               ? <Home />
//               : <Navigate to="/customize" />
//             : <Navigate to="/signin" />
//         }
//       />
//       <Route
//         path="/signup"
//         element={!isLoggedIn ? <SignUp /> : <Navigate to="/" />}
//       />
//       <Route
//         path="/signin"
//         element={!isLoggedIn ? <SignIn /> : <Navigate to="/" />}
//       />
//       <Route
//         path="/customize"
//         element={
//           isLoggedIn
//             ? isCustomized
//               ? <Navigate to="/" />
//               : <Customize /> // 🔹 stay here until customized
//             : <Navigate to="/signin" />
//         }
//       />
//     </Routes>
//   );
// }

// export default App;
