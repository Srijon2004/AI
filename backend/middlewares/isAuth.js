 import jwt from "jsonwebtoken"

// const isAuth=async(req,res,next)=>{
//     try {
//         const token=req.cookies.token
//         if(!token)
//         {
//             return res.status(400).json({message:"Token not found"})
//         }
//         const verifyToken=await jwt.verify(token,process.env.JWT_SECRET)
//         req.userId=verifyToken.userId;
//         next()
//     } catch (error) {
//         console.log(error)
//     }
// }

// export default isAuth


// import jwt from "jsonwebtoken";

// const isAuth = async (req, res, next) => {
//     try {
//         const token = req.cookies.token;
//         console.log("Token from cookie:", token);
//         console.log("Type of token:", typeof token);

//         if (!token || typeof token !== "string") {
//             return res.status(400).json({ message: "Token not found or invalid" });
//         }

//         const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
//         req.userId = verifyToken.userId;
//         next();
//     } catch (error) {
//         console.error("JWT verification error:", error);
//         return res.status(401).json({ message: "Invalid token" });
//     }
// };

// export default isAuth;



// import jwt from "jsonwebtoken";

// const isAuth = (req, res, next) => {
//     try {
//         const token = req.cookies.token;

//         if (!token || typeof token !== "string") {
//             return res.status(401).json({ message: "No token provided" });
//         }

//         const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
//         req.userId = verifyToken.userId;
//         next();
//     } catch (error) {
//         console.error("JWT verification error:", error.message);
//         return res.status(401).json({ message: "Invalid token" });
//     }
// };

// export default isAuth;


// import jwt from "jsonwebtoken";

// const isAuth = (req, res, next) => {
//   try {
//     const token = req.cookies.token;

//     if (!token || typeof token !== "string") {
//       return res.status(401).json({ message: "No token provided" });
//     }

//     const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = verifyToken.id; // match the key used in sign()
//     next();
//   } catch (error) {
//     console.error("JWT verification error:", error.message);
//     return res.status(401).json({ message: "Invalid token" });
//   }
// };

// export default isAuth;


// import jwt from "jsonwebtoken";

// const isAuth = (req, res, next) => {
//   try {
//     const token = req.cookies.token; // read token from cookie
//     if (!token) return res.status(401).json({ message: "No token provided" });

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // attach user info
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }
// };
// export default isAuth;

// middlewares/auth.js
// import jwt from "jsonwebtoken";

// const isAuth = (req, res, next) => {
//   try {
//     const token = req.cookies.token;
//     if (!token) return res.status(401).json({ message: "No token provided" });

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = { id: decoded.id }; // make sure payload has `id`
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }
// };




// import jwt from "jsonwebtoken";

// const isAuth = (req, res, next) => {
//   const token = req.cookies.token; // read httpOnly cookie
//   if (!token) return res.status(401).json({ message: "No token provided" });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = { id: decoded.id };
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }
// };

// import jwt from "jsonwebtoken";

// const isAuth =async (req, res, next) => {

//   try {
//     const token = req.cookies.token;  // ✅ read from cookie
//     if (!token) return res.status(401).json({ message: "Unauthorized — user must log in" });

//     // const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     // req.user = { id: decoded.id };

//      const verifyToken= jwt.verify(token,process.env.JWT_SECRET)
//      req.userId = verifyToken.userId;

    
//     next();
//   } catch (err) {
//     //return res.status(401).json({ message: "Unauthorized — user must log in" });
//     console.log(err)
//   }
// };

// export default isAuth;






const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
if (!token) return res.status(401).json({ message: "Unauthorized — user must log in" });

    console.log("Middleware token:", token);
    if (!token) return res.status(401).json({ message: "Unauthorized — user must log in" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded JWT:", decoded);

    req.userId = decoded.id || decoded.userId;  // pick whichever exists
    next();
  } catch (err) {
    console.log("JWT Error:", err.message);
    return res.status(401).json({ message: "Unauthorized — invalid token" });
  }
};
export default isAuth;