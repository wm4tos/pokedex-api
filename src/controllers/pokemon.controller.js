import { GetPokemons } from '../services/pokemon.services';

// eslint-disable-next-line
export const GetPokemonList = async (obj) => {
  try {
    const pokemon = await GetPokemons(obj);

    return pokemon;
  } catch (err) {
    console.log(err);
    return [];
  }
};
