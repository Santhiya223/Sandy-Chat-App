import User from '../models/user_model.js';
export const getUsersforSidebar = async (req, res) => {
    try{
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id :{ $ne: loggedInUserId}}).select("-password");
        res.status(200).json(filteredUsers);
    } catch(e) {
        console.error("error in user controller",e.message);
        res.status(500).json({error:"Internal server error"});
    }  
};