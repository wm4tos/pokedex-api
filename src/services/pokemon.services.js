import pokemon from '../db/models/pokemon';

// eslint-disable-next-line
export const GetPokemons = async (obj = {}) => {
  try {
    const pokemons = await pokemon.find(obj);

    return pokemons;
  } catch (err) {
    throw new Error(err);
  }
};
