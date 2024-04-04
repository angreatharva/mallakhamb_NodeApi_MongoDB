const db = require('../config/db');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({
    playerName: {
        type: String,
        required: true
    },
    DOB: {
        type: String,
        required: true
    }
});

const teamSchema = new Schema({
    teamName: {
        type: String,
        required: true,
        unique: true,
    },
    mobileNo: {
        type: String,
        required: true,
    },
    under12: {
        type: [playerSchema], // Define an array of objects based on playerSchema
        required: true
    }
});

const TeamModel = db.model('teams', teamSchema);
module.exports = TeamModel;

// Assuming you are saving the data like this
const saveData = async () => {
    const data = {
        teamName: "MLDC 1.0",
        mobileNo: "9167449720",
        under12: [
            {
                playerName: "Atharva",
                DOB: "08/09/2002"
            },
           
        ]
    };

    try {
        const newUser = new TeamModel(data);
        await newUser.save();
        console.log("Data saved successfully");
    } catch (error) {
        console.error("Error saving data:", error);
    }
};

 saveData();
