import { playerModel } from "../models/player.model.js";


export const getPlayers = async function (sort) {
  //get all players
  try {
    const players = await playerModel.find({}).sort({ first_name: sort && sort.toLowerCase() == "desc" ? -1 : 1 });
    if (players) {
      return players;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

export const getPlayer = async function (id) {
  //get one specific player
  try {
    const player = await playerModel.findById(id);
    if (player) {
      return player;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

export const filterPlayerByName = async function (name, limit = 5) {
  //get players by name
  try {
    const player = await playerModel.find({ first_name: { $regex: '.*' + name + '.*' } }).limit(limit)
    if (player) {
      return player;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}