import Vue from 'vue';
import { createRenderer } from 'vue-server-renderer';
import App from './App';

const { renderToString } = createRenderer({ runInNewContext: false });

export default (colors) => (done) => renderToString(new Vue({
  render(h) {
    return <App colors={colors}/>
  }
})).then(done);
