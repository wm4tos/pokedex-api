import { GetPokemons, GetOnePokemon } from '../services/pokemon.services';

export const GetPokemonList = async (obj) => {
  try {
    const pokemons = await GetPokemons(obj);

    return pokemons;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const GetPokemon = async (obj) => {
  try {
    const pokemon = await GetOnePokemon(obj);

    return pokemon;
  } catch (err) {
    console.error(err);
    return null;
  }
};
