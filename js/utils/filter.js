'use strict';

const filterByName = (pokemons,query) => {
  return pokemons.filter((pokemon) => {
    return pokemon.pokemon_species.name.toLowerCase().indexOf(query.toLowerCase()) != -1;
  });
}
