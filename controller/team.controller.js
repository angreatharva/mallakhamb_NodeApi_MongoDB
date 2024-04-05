const TeamModel = require('../model/team.model');
const TeamService = require('../services/team.services');

exports.registerTeam = async(req,res,next)=>{
    try{
    
        // console.log(req.body);

        const successRes = await TeamService.registerTeam(req.body);
        console.log(successRes);

        res.json({status:true,message:"Registered Team Successfully.!"});

    }
    catch(e){
        throw e;
    }
}