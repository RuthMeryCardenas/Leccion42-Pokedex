'use strict';

const Search = () => {
  const search = $("<section id='search'></section>");
  const row = $("<div class='row valign-wrapper'></div>");
  const col_1 = $("<div class='col s7 offset-s1 searcher'></div>");
  const input_field = $("<div class='input-field'></div>");
  const icon = $("<i class='material-icons prefix grey-text text-darken-2'>search</i>");
  const input = $("<input id='icon_prefix' class='validate' type='text'>");
  const label = $("<label for='icon_prefix'>Buscar pokemon</label>");
  const col_2 = $("<div class='col s3 right-align'></div>");
  const link = $("<a class='waves-effect waves-light btn light-green darken-2'>A-Z</a>");

  input_field.append(icon);
  input_field.append(input);
  input_field.append(label);
  col_1.append(input_field);
  col_2.append(link);
  row.append(col_1);
  row.append(col_2);
  search.append(row);
  // input.on("keypress", (e) => {
  //   if (e.which === 13) {
  //     if (input.val() != "") {
  //       filterByDistrict ($(".list-stations"), input.val());
  //     }else {
  //       reRender ($(".list-stations"));
  //     }
  //   }
  // });
  return search;
}
