import Inferno from 'inferno';
import { renderToString } from 'inferno-server';
import App from './App';

export default (colors) => () => renderToString(<App colors={colors}/>);
