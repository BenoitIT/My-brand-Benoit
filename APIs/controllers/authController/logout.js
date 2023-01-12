const User = require("../../models/users");
require("dotenv").config();
const { asyncWrapper } = require("../../middlewares/asyncWrapper");
const logout = asyncWrapper(async (req, res) => {
    const cookie=req.cookie
    if(cookie?.refreshToken){
      const refreshToken=cookie.refreshToken
      let user = await User.findOne({ refreshToken }).exec();
      //delete refresh token in databse
        user.refreshToken=''
        await user.save()
       //send access token in header
         res.json({ message: "you logged out" });
    }
     });
  module.exports = {logout };
