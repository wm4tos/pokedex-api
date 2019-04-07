import mongoose from 'mongoose';

export const schema = mongoose.Schema({
  _id: {
    type: Number,
  },
  name: {
    type: String,
    unique: true,
    required: true,
  },
  pokedexNumber: {
    type: String,
    required: true,
  },
  imgName: String,
  generation: {
    type: String,
    required: true,
  },
  evolutionStage: {
    type: String,
  },
  evolved: String,
  familyID: String,
  crossGen: Number,
  type1: String,
  type2: String,
  weather1: String,
  weather2: String,
  statTotal: Number,
  ATK: Number,
  DEF: Number,
  STA: Number,
  legendary: String,
  aquireable: Number,
  spawns: Number,
  regional: Number,
  raidable: Number,
  hatchable: Number,
  shiny: Number,
  nest: Number,
  new: Number,
  notGettable: Number,
  futureEvolve: Number,
  CPMax: Number,
  CPMin: Number,
});

export default mongoose.model('pokemons', schema);
