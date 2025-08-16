import jwt from "jsonwebtoken"
const gentoken=async (userId)=>{
    try {
        // const token=await jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"10d"})
        // return token
        return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
    } catch (error) {
        console.log(error)
    }
}

export default gentoken;
// backend/config/token.js
// import jwt from "jsonwebtoken";

// export default function gentoken(userId) {
//     return jwt.sign(
//         { userId }, // payload
//         process.env.JWT_SECRET, // secret key
//         { expiresIn: "7d" } // token validity
//     );
// }
