'use strict';
const reRender = (element,filter,update) => {
  element.empty();
  const filteredPokemons = filterByName(state.pokemons,filter);
  if (filteredPokemons.length > 0) {
    $.each(filteredPokemons,(index,pokemon) => {
      element.append(Item_pokemon(pokemon,update));
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
  const list_pokemon = $("<div class='list-pokemon'></div>");
  var aux = 1;
  var aux_col = [];
  pokemons.forEach ((pokemon, index) => {
    aux_col.push(Item_pokemon(pokemon));
    if (aux % 5 == 0) {
      const row = $("<div class='row'></div>");
      const col = $("<div class='col s10 offset-s1'></div>");
      for (var i = 0; i < aux_col.length; i++) {
        col.append($(aux_col[i]));
      }
      aux_col = [];
      row.append(col);
      list_pokemon.append(row);
    }
    aux ++
  });
  return list_pokemon;
}
const Item_pokemon = (pokemon) => {
  const item_pokemon = $("<div class='item-pokemon grey lighten-2'></div>");
  const container_img = $("<div class='img-pokemon'></div>");
  const img_pokemon = $("<img src='http://serebii.net/art/th/" + (pokemon.entry_number) + ".png' alt='' class='responsive-img'></img>");
  const trapeze = $("<div class='trapeze'></div>");

  container_img.append(img_pokemon);
  item_pokemon.append(container_img);
  item_pokemon.append(trapeze);
  item_pokemon.append(User_action(pokemon.pokemon_species.name));
  return item_pokemon;
}
const User_action = (name_pokemon, update) => {
  const user_action = $("<div class='user-action'></div>");
  const container_icons = $("<div class='container-icons center-align'></div>");
  const link_1 = $("<a href='#'></a>");
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

  return user_action;
}
