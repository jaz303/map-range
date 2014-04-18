module.exports = function(fn, inStart, inEnd, outStart, outEnd) {

    if (outStart === void 0) {
        outStart = inStart;
        outEnd = inEnd;
        inStart = 0;
        inEnd = 1;
    }

    var inRange = inEnd - inStart,
        outRange = outEnd - outStart;

    return function(val) {
        var original = fn((val - inStart) / inRange);
        return outStart + (outRange * original);
    }

}