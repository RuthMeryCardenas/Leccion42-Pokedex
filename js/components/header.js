'use strict';

const Header = () => {
  const header = $("<header></header>");
  const heading = $("<h2 class='center-align red-text'>Pokédex</h2>");

  header.append(heading);

  return header;
}
