'use strict';
const load_data_pokemon = {
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        get_data_pokemon (state.selectedPokemon);
      },
      complete: function() {// Callback for Modal close
        reRender_data();
        state.selectedPokemon = null;
      }
    }
const reRender_data = () => {
  $(".modal-content .name h3").empty();
  $(".modal-content .photo").empty();
  $(".modal-content .description p").empty();
}
const show_data_pokemon = (current_pokemon) => {
  $(".modal-content .name h3").text(current_pokemon.species.name);
  $(".modal-content .photo").append(Item_pokemon(current_pokemon.data.entry_number - 1, current_pokemon.species.name));
  $(".modal-content .description p").text(current_pokemon.species.flavor_text_entries[1].flavor_text);
}
const get_data_pokemon = (order_pokemon) => {
  var current_pokemon = {
    data: state.pokemons[order_pokemon],
    species: null,
    details: null
  }
  getJSON('https://pokeapi.co/api/v2/pokemon-species/' + order_pokemon +'/', (err, json) => {
    if (err) { return alert(err.message);}
    current_pokemon.species = json;
    getJSON('https://pokeapi.co/api/v2/pokemon/' + order_pokemon +'/', (err, json) => {
      if (err) { return alert(err.message);}
      current_pokemon.details = json;
      // console.log(current_pokemon.details.abilities[0].ability.name);
      show_data_pokemon (current_pokemon);
    });
    // console.log(current_pokemon.species.name);
  });
}
const Modal_boot = () => {
  const modal = $("<div id='modal1' class='modal grey lighten-3'></div>");
  const close_btn = $("<a href='#!' class='modal-action modal-close btn-flat grey-text text-darken-2'>&times;</a>");
  const content = $("<div class='modal-content'></div>");
  const row_1 = $("<div class='row'></div>");
  const name = $("<div class='col l12 name'></div>");
  const h3 = $("<h3 class='center-align grey-text text-darken-2'></h3>");
  const row_2 = $("<div class='row'></div>");
  const photo = $("<div class='col l4 photo'></div>");
  const information = $("<div class='col l8 information'></div>");
  const description = $("<div class='description'></div>");
  const text = $("<p class='grey-text text-darken-2'></p>");
  const details = $("<div class='details light-blue white-text'></div>");
  const type = $("<div class='type white-text'></div>");
  const debility = $("<div class='debility white-text'></div>");

  name.append(h3);
  row_1.append(name);

  row_2.append(photo);
  description.append(text);
  information.append(description);
  information.append(details);
  information.append(type);
  information.append(debility);
  row_2.append(information);

  content.append(row_1);
  content.append(row_2);

  modal.append(close_btn);
  modal.append(content);

  return modal;
}
