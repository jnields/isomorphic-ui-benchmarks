isomorphic-ui-benchmarks
========================================

This is a rough update to change how the benchmarks are run to be more accurate.

At this time, only server-side rendering works, and it is only testing rendering a color picker.

The results are as follows:

```bash
npm run build-benchmark
npm run benchmark

inferno x 7,060 ops/sec ±0.50% (278 runs sampled)
marko x 8,382 ops/sec ±0.57% (277 runs sampled)
preact x 4,247 ops/sec ±0.40% (278 runs sampled)
react x 4,000 ops/sec ±1.07% (278 runs sampled)
vue x 920 ops/sec ±1.58% (206 runs sampled)
```
