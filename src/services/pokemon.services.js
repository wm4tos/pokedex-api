import pokemonModel from '../db/models/pokemon';

export const GetPokemons = async (obj = {}) => {
  try {
    const pokemons = await pokemonModel.find(obj);

    return pokemons;
  } catch (err) {
    throw new Error(err);
  }
};

export const GetOnePokemon = async (obj = {}) => {
  try {
    const pokemon = await pokemonModel.findOne(obj);

    return pokemon;
  } catch (err) {
    throw new Error(err);
  }
};
