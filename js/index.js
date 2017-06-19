'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header());
  wrapper.append(Search());
  wrapper.append(Results());
  root.append(wrapper);
}

const state = {
  pokemons: null,
  selectedPokemon: null
};

$( _ => {
  getJSON('https://pokeapi.co/api/v2/pokedex/1/', (err, json) => {
    if (err) { return alert(err.message);}
    state.pokemons = json.pokemon_entries;
    // console.log(state.pokemons);
    const root = $('.root');
    render(root);
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
