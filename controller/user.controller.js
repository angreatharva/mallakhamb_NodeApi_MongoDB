

const UserService = require('../services/user.services');

exports.registerJudges = async(req,res,next)=>{
    try{
        const {email,password,isSuperior} = req.body ;

        const successRes = await UserService.registerJudges(email,password,isSuperior);

        res.json({status:true,message:"Registered Judge Successfully.!"});

    }
    catch(e){
        throw e;
    }
}

exports.login = async(req,res,next)=>{
    try{
        const {email,password,isSuperior} = req.body ;

        const user = await UserService.checkUser(email);
        if(!user){
            throw new Error("User does not Exists");
        }
        const isMatch = await user.comparePassword(password);

        if(isMatch == false){
            throw new Error('Password is Invalid');
        }

        let tokenData = {_id:user._id,email:user.email};

        const token = await UserService.generateToken(tokenData,"secretKey",'1h');

        res.status(200).json({status:true, token:token});

    }
    catch(e){
        throw e;
    }
}
