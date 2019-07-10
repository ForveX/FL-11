function addOne(x) {
    return x + 1;
}

function pipe(x) {
    for (let i=1; i<arguments.length; i++) {
        if ( arguments[i]!= addOne) {
            continue;
        } else {
            x = addOne(x);
        }
    }
    return x;
}