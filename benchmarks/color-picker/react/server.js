import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';

export default (colors) => () => ReactDOMServer.renderToString(<App colors={colors} />);
