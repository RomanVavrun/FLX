function pipe(num, ...arguments) {

    let customFunctions = [];

    for (let i = 0; i < arguments.length; i++) {
        customFunctions[i] = arguments[i];
    }

    for (let i = 0; i < customFunctions.length; i++) {
        num = customFunctions[i](num);
    }

    return num;
}

pipe(1);
