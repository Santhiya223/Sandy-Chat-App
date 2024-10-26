import User  from '../models/user_model.js';
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/generateToken.js';
export const signup = async(req,res)=>{
    try{
        const {fullName,userName,password,confirmPassword,gender} = req.body;

        if(password !== confirmPassword) {
            return res.status(400).json({error: "Passwords don't match"});
        }
        const user =await User.findOne({userName});

        // const users = await User.find();
        // console.log(users);

        if(user) {
            return res.status(400).json({error: "Username already exists"});
        }

        //HASH PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

        const newUser = new User({
            fullName,
            userName,
            password: hashedPassword,
            gender,
            profilePic: gender ==="male" ? boyProfilePic : girlProfilePic
        })

        if(newUser) {
            if (!res) {
                console.error("Response object is undefined");
                return res.status(500).json({ error: "Internal Server Error" });
            }
            await generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();
            res.status(201).json({
            _id: newUser._id,
            fullName:newUser.fullName,
            userName:newUser.userName,
            profilePic: newUser.profilePic
            })
        } else {
            res.status(201).json({error:"Invalid user Data"});
        }
        
    } catch(e) {
        res.status(500).json({
            error: "Internal Server error"
        });
        console.log("Error in signup controller",e.message);
    }
};

export const login = async(req,res)=>{
   try{
        const {userName, password} = req.body;
        const user = await User.findOne({userName});
        const isPassword = await bcrypt.compare(password, user?.password || "");
        if(!user || !isPassword){
            return res.status(400).json({error:"Invalid User Credentials"});
        }
        await generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
        _id: user._id,
        fullName:user.fullName,
        userName:user.userName,
        profilePic: user.profilePic
        })
   } catch(e) {
    res.status(501).json({error:"Internal Server error"});
    console.log("Error in login controller", e.message);
   }
    console.log("login Page");
};

export const logout = (req,res)=>{
    try{
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({
            message: "Logged out successfully"
        });
    }  catch(e) {
        res.status(500).json({
            error: "Internal Server error"
        });
        console.log("Error in logout controller",e.message);
    }
};

