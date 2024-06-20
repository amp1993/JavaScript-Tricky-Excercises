function curriedAdd(total = 0) {
    function add(nextValue) {
        if (nextValue === undefined) {
            return total;
        } else {
            return curriedAdd(total + nextValue);
        }
    }

    // If the initial call is made with no arguments, return 0 immediately.
    if (arguments.length === 0) {
        return total;
    }

    return add;
}

module.exports = { curriedAdd };
