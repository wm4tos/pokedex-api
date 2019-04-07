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
  const { name } = obj;
  delete obj.name;
  const regexName = new RegExp(name, 'i');
  try {
    const pokemon = await pokemonModel.findOne({ name: regexName, ...obj });

    return pokemon;
  } catch (err) {
    throw new Error(err);
  }
};
