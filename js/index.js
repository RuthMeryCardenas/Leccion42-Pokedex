'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header());
  wrapper.append(Search());
  wrapper.append(Results());
  wrapper.append(Modal_boot());
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
    const root = $('.root');
    render(root);
  });
});
