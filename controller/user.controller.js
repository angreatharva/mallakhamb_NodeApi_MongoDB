

const UserService = require('../services/user.services');

exports.registerJudges = async(req,res,next)=>{
    try{
        const {email,password,isSuperior} = req.body ;

        const successRes = await UserService.registerJudges(email,password,isSuperior);

        res.json({status:true,message:"Registered Successfully.!"});

    }
    catch(e){
        throw e;
    }
}