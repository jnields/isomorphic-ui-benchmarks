import Benchmark from 'benchmark';
import serverBenchFns from './color-picker/server';

const suite = new Benchmark.Suite('server-side rendering')
Object.entries(serverBenchFns).forEach(([framework, fn]) => {
  suite.add(
    framework,
    fn,
    {
      minSamples: 200,
      onCycle(e) {
        global.gc();
      },
      onComplete(e) {
        console.log(String(e.target));
      }
    })
});

suite.run();
