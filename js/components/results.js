'use strict';
const reRender = (element,filter,update) => {
  element.empty();
  const filteredPokemons = filterByName(state.pokemons,filter);
  if (filteredPokemons.length > 0) {
    $.each(filteredPokemons,(index,pokemon) => {
      const col = $("<div class='col l2'></div>");
      col.append(Item_pokemon(pokemon.entry_number,pokemon.pokemon_species.name));
      element.append(col);
    });
  } else {
    element.append($('<p>Pokemon no encontrado</p>'));
  }
}
const Results = (update) => {
  const results = $("<section id='results'></section>");
  results.append(List_pokemon(state.pokemons));
  return results;
}
const List_pokemon = (pokemons, update) => {
  const list_pokemon = $("<div class='row list-pokemon'></div>");
  pokemons.forEach ((pokemon) => {
    const col = $("<div class='col l2'></div>");
    col.append(Item_pokemon(pokemon.entry_number,pokemon.pokemon_species.name));
    list_pokemon.append(col);
    });
  return list_pokemon;
}
const Item_pokemon = (id_pokemon,name_pokemon) => {
  const item_pokemon = $("<div class='item-pokemon grey lighten-2'></div>");
  const container_img = $("<div class='container-img'></div>");
  const img_pokemon = $("<img src='http://serebii.net/art/th/" + (id_pokemon) + ".png' alt=''></img>");
  const trapeze = $("<div class='trapeze'></div>");

  container_img.append(img_pokemon);
  item_pokemon.append(container_img);
  item_pokemon.append(trapeze);
  item_pokemon.append(User_action(id_pokemon, name_pokemon));
  return item_pokemon;
}
const User_action = (id_pokemon, name_pokemon, update) => {
  const user_action = $("<div class='user-action'></div>");
  const container_icons = $("<div class='container-icons center-align'></div>");
  const link_1 = $("<a href='#modal1' data-order=" + id_pokemon + "></a>");
  const icon_1 = $("<img src='assets/icon/pokeball_gray.png' alt=''></img>");
  const link_2 = $("<a href='#'></a>");
  const icon_2 = $("<img src='assets/icon/valentines-heart.png' alt=''></img>");
  const link_3= $("<a href='#'></a>");
  const icon_3 = $("<img src='assets/icon/data.png' alt=''></img>");
  const container_name = $("<div class='name-pokemon center-align grey-text text-darken-2'></div>");
  const span = $("<span>" + name_pokemon + "</span>");

  link_1.append(icon_1);
  link_2.append(icon_2);
  link_3.append(icon_3);
  container_icons.append(link_1);
  container_icons.append(link_2);
  container_icons.append(link_3);
  container_name.append(span);
  user_action.append(container_icons);
  user_action.append(container_name);

  link_1.on("click", function (event) {
    state.selectedPokemon = link_1.attr("data-order");
    $('.modal').modal(load_data_pokemon);
  });
  return user_action;
}
