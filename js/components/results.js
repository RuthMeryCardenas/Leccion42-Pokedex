'use strict';

const Results = (update) => {
  const results = $("<section id='results'></section>");

  results.append(List_pokemon());
  return results;
}
const List_pokemon = (update) => {
  const list_pokemon = $("<div class='list-pokemon'></div>");
  const item_by_row = 5;
  var total_items = 13;
  const total_rows = Math.ceil(total_items / item_by_row);
  for (var i = 0; i < total_rows; i++) {
    const row = $("<div class='row'></div>");
    const col = $("<div class='col s10 offset-s1'></div>");
    if (total_items > item_by_row) {
      for (var j = 0; j < item_by_row; j++) {
        col.append(Item_pokemon());
      }
    }else {
      for (var j = 0; j < total_items; j++) {
        col.append(Item_pokemon());
      }
    }
    total_items = total_items - item_by_row;
    row.append(col);
    list_pokemon.append(row);
  }
  return list_pokemon;
}
const Item_pokemon = (update) => {
  const item_pokemon = $("<div class='item-pokemon grey lighten-3'></div>");
  const container_img = $("<div class='img-pokemon'></div>");
  const img_pokemon = $("<img src='assets/img/024.png' alt='' class='responsive-img'></img>");
  const trapeze = $("<div class='trapeze'></div>");

  container_img.append(img_pokemon);
  item_pokemon.append(container_img);
  item_pokemon.append(trapeze);
  item_pokemon.append(User_action());
  return item_pokemon;
}
const User_action = (update) => {
  const user_action = $("<div class='user-action'></div>");
  const container_icons = $("<div class='container-icons center-align'></div>");
  const link_1 = $("<a href='#'></a>");
  const icon_1 = $("<img src='assets/icon/pokeball_gray.png' alt=''></img>");
  const link_2 = $("<a href='#'></a>");
  const icon_2 = $("<img src='assets/icon/valentines-heart.png' alt=''></img>");
  const link_3= $("<a href='#'></a>");
  const icon_3 = $("<img src='assets/icon/data.png' alt=''></img>");
  const name_pokemon = $("<div class='name-pokemon center-align grey-text text-darken-2'></div>");
  const span = $("<span>Pokemon</span>");

  link_1.append(icon_1);
  link_2.append(icon_2);
  link_3.append(icon_3);
  container_icons.append(link_1);
  container_icons.append(link_2);
  container_icons.append(link_3);
  name_pokemon.append(span);
  user_action.append(container_icons);
  user_action.append(name_pokemon);

  return user_action;
}
