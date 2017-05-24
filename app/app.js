function getDescendingNumbers(start, stop)
{
    if (typeof start == 'number' || typeof stop !== 'string' || start <= stop) {
        return false;
    }
    var result = start;
    for (var i = stop - 2; i < stop; i--) {
        result = result + ' ' + i;
    }
    return result;
}

module.exports = {
    getDescendingNumbers: getDescendingNumbers
};
