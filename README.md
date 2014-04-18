# map-range

Convert a function that has a domain and range of `0..1` to one with an arbitrary domain and range through application of a linear mapping.

That's a complicated way of saying this:

<table>
	<thead>
    <tr>
      <th><code>x</code></th>
      <th><code>fn(x)</code></th>
      <th><code>map(fn, 0, 1, 200, 300)(x)</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>0</td>
      <td>200</td>
    </tr>
    <tr>
      <td>0.25</td>
      <td>0.25</td>
      <td>225</td>
    </tr>
    <tr>
      <td>0.5</td>
      <td>0.5</td>
      <td>250</td>
    </tr>
    <tr>
      <td>0.75</td>
      <td>0.75</td>
      <td>275</td>
    </tr>
    <tr>
      <td>1</td>
      <td>1</td>
      <td>300</td>
    </tr>
  </tbody>
</table>

## Installation

    $ npm install map-range

## Usage

```javascript
var map = require('map-range');

function linear(x) {
  return x;
}

var mapped = map(linear, 0, 1, 1000, 1100);

mapped(0.5); // => 1050
```

## API

#### `map(fn, inStart, inEnd, outStart, outEnd)`

`fn` should be a single-arg function that expects values in the range 0..1 and returns a corresponding value in the same range. `map` will wrap this function to accept arguments in the domain `inStart..inEnd` and map, linearly, its output to the range `outStart..outEnd`.

#### `map(fn, outStart, outEnd)`

As above but with implied values of 0 and 1 for `inStart`, `inEnd`.