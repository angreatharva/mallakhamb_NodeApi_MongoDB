const teamModel = require('../model/team.model')

class TeamService{

    static async registerTeam(teamName,mobileNo){
        try{
            const createTeam = new teamModel({teamName,mobileNo});
            return await createTeam.save();
        }
        catch(e){
            throw e;
        }
    }
}

module.exports = TeamService;