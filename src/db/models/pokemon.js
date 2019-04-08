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
  generation: {
    type: String,
    required: true,
  },
  evolutionStage: {
    type: String,
  },
  evolved: Boolean,
  familyID: String,
  crossGen: Boolean,
  type1: String,
  type2: String,
  weather1: String,
  weather2: String,
  statTotal: Number,
  ATK: Number,
  DEF: Number,
  STA: Number,
  legendary: Boolean,
  aquireable: Number,
  spawns: Boolean,
  regional: Boolean,
  rideable: Number,
  hatchable: Number,
  shiny: Boolean,
  nest: Boolean,
  new: Boolean,
  notGettable: Boolean,
  futureEvolve: Boolean,
  CPMax: Number,
  CPMin: Number,
});

export default mongoose.model('pokemons', schema);
