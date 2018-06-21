import colors from './colors.json';
import inferno from './inferno/server';
import marko from './marko/server';
import preact from './preact/server';
import react from './react/server';
import vue from './vue/server';

export default {
  inferno: inferno(colors),
  marko: marko(colors),
  preact: preact(colors),
  react: react(colors),
  vue: vue(colors),
};
