const UserModel = require('../model/user.model');
const jwt = require('jsonwebtoken');

class UserService{

    static async registerJudges(email,password,isSuperior){
        try{
            const createJudge = new UserModel({email,password,isSuperior});
            return await createJudge.save();
        }
        catch(e){
            throw e;
        }
    }

    static async checkUser(email){
        try{
            return await UserModel.findOne({email});
        }
        catch(e){
            throw e;
        }
    }

    static async generateToken(tokenData,secretKey,jwt_expire){
        return jwt.sign(tokenData,secretKey,{expiresIn:jwt_expire});
    }

}

module.exports = UserService;