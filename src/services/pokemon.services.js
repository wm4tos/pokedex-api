import pokemon from '../db/models/pokemon';

export const GetPokemons = (obj = {}) => pokemon.find(obj); // eslint-disable-line
