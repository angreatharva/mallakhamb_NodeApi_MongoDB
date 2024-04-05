const teamModel = require('../model/team.model')

class TeamService{

    static async registerTeam(data){
        try{
            const createTeam = new teamModel(data);
            return await createTeam.save();
        }
        catch(e){
            throw e;
        }
    }
}

module.exports = TeamService;