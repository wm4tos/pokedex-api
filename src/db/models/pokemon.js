import mongoose from 'mongoose';

const schema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  pokedexNumber: {
    type: String,
    unique: true,
    required: true,
  },
  imgName: String,
  generation: {
    type: String,
    unique: true,
    required: true,
  },
  evolutionStage: {
    type: String,
    unique: true,
  },
  evolved: String,
  familyID: String,
  crossGen: String,
  type1: String,
  type2: String,
  weather1: String,
  weather2: String,
  statTotal: String,
  ATK: String,
  DEF: String,
  STA: String,
  legendary: String,
  aquireable: String,
  spawns: String,
  regional: String,
  raidable: String,
  hatchable: String,
  shiny: String,
  nest: String,
  new: String,
  notGettable: String,
  futureEvolve: String,
}, { _id: false });

export default mongoose.model('pokemons', schema);
