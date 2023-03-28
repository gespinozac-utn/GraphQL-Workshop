import { teamModel } from "../models/team.model.js";


export const getTeams = async function(){
  //get all teams
  try {
    const teams = await teamModel.find();
    if (teams) {
      return teams;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

export const filterTeamByName = async function(name, limit = 5){
  //get teams by name
  try {
    const team = await teamModel.find({name: { $regex: '.*' + name + '.*' }}).limit(limit).sort({name:1});
    if (team) {
      return team;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}