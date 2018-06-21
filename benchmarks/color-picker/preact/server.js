/* @jsx h */
import { h } from 'preact';
import renderToString from 'preact-render-to-string';
import App from './App';

export default (colors) => () => renderToString(<App colors={colors}/>);
