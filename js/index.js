'use strict';

const state = {
  pokemons: null,
  selectedPokemon: null
};

$( _ => {
  getJSON('http://pokeapi.co/api/v2/pokedex/1/', (err, json) => {
    if (err) { return alert(err.message);}
    state.pokemons = json;
    // console.log(state.pokemons);
    // console.log(state.pokemons.pokemon_entries);
    // console.log(state.pokemons.pokemon_entries.length);
    // TOTAL DE POKEMONES
    // console.log(state.pokemons.pokemon_entries[0]);
    // ALL OBJECT
    // console.log(state.pokemons.pokemon_entries[0].entry_number);
    // ID
    // console.log(state.pokemons.pokemon_entries[0].pokemon_species.name);
    // NOMBRE
    // console.log(state.pokemons.pokemon_entries[0].pokemon_species.url);
    // DETALLE DE ESPECIE
  });
});
