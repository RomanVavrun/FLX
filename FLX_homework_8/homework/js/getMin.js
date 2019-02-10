function getMin(...arguments) {
    let min = arguments[0];
    for (let index = 0; index < arguments.length; index++) {
        if (min > arguments[index]) {
            min = arguments[index];
        }
    }
    return min;
}

getMin(3, 0, -3);