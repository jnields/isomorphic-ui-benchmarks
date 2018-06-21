import app from './app.marko.js'

export default (colors) => () => app.renderToString({ colors });
