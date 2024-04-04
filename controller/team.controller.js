const TeamService = require('../services/team.services');

exports.registerTeam = async(req,res,next)=>{
    try{
        const {teamName,mobileNo} = req.body ;

        const successRes = await TeamService.registerTeam(teamName,mobileNo);

        res.json({status:true,message:"Registered Team Successfully.!"});

    }
    catch(e){
        throw e;
    }
}