const UserModel = require('../model/user.model')

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
}

module.exports = UserService;