// import gentoken from "../config/token.js";
// import User from "../models/user.model.js";
// import bcrypt from "bcryptjs"
// export const signUp=async (req,res)=>{
//     try {
//         const {name,email,password}=req.body;
//         const d=await User.findOne({email})
//         if(d){
//             return res.status(400).json({message:"email alredy exists!"})
//         }
//         if(password.length<6)
//         {
//             return res.status(400).json({message:"password must be atleast 6 charater"})
//         }

//         const hash=await bcrypt.hash(password,10)

//         const user=await User.create({
//             name,password:hash,email
//         })
//         const token=await gentoken(User._id)
//         res.cookie("token",token,{
//             httpOnly:true,
//             maxAge:7*24*60*60*1000,
//             sameSite:"strict",
//             secure:false
//         } )
//         return res.status(201).json(user)

//     } catch (error) {
//         return res.status(500).json({message:"Signup erroe"})
//     }
// }




// export const Login=async (req,res)=>{
//     try {
//         const {email,password}=req.body;
//         const u=await User.findOne({email})
//         if(!u){
//             return res.status(400).json({message:"email does not exists!"})
//         }
//         const ismatch=await bcrypt.compare(password,u.password)

//         if(!ismatch)
//         {
//             return res.status(400).json({message:"password!"})
//         }

//         const hash=await bcrypt.hash(password,10)

//         const token=await gentoken(User._id)
//         res.cookie("token",token,{
//             httpOnly:true,
//             maxAge:7*24*60*60*1000,
//             sameSite:"strict",
//             secure:false
//         } )
//         return res.status(200).json(u)

//     } catch (error) {
//         return res.status(500).json({message:"Login erroe"})
//     }
// }


// export const LogOut=async (req,res)=>{
//     try {
//         res.clearCookie("token")
//         return res.status(200).json({message:"Logout"})
//     } catch (error) {
//         return res.status(500).json({message:"Logout erroe"})
//     }
// }









import gentoken from "../config/token.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists!" });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }

        const hash = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            password: hash,
            email
        });

        // ✅ Use user._id (the newly created user's ID)
        const token =await gentoken(user._id);

        // res.cookie("token", token, {
        //     httpOnly: true,
        //     maxAge: 7 * 24 * 60 * 60 * 1000,
        //     sameSite: "lax",  // important for local dev
        //     secure: false     // true if using https
        // });
        //const token = gentoken(user._id);
        res.cookie("token", token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 ,secure: false,sameSite: "none", path: "/"   });

        return res.status(201).json(user);

    } catch (error) {
        return res.status(500).json({ message: "Signup error" });
    }
};



export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Email does not exist!" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password!" });

    const token =await gentoken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,        // true in production with https
      sameSite: "none",
      path: "/",         // add this
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    const { password: pwd, ...userData } = user.toObject();
    return res.status(200).json(userData);

  } catch (error) {
    return res.status(500).json({ message: "Login error" });
  }
};


export const LogOut = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        return res.status(500).json({ message: "Logout error" });
    }
};
