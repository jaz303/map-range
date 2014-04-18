var test = require('tape');
var map = require('..');


test('+ve', function(t) {

	var fn = map(function(x) { return x; }, 10, 20, 100, 200);

	t.ok(fn(10) === 100);
	t.ok(fn(15) === 150);
	t.ok(fn(20) === 200);

	t.end();

});

test('-ve', function(t) {

	var fn = map(function(x) { return x; }, 10, 20, 200, 100);

	t.ok(fn(20) === 100);
	t.ok(fn(15) === 150);
	t.ok(fn(10) === 200);

	t.end();

});