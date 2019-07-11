function reverseNumber (n) {
    n=n + '';
    let nReversed = '';
    console.log(n);

    if (n[0] === '-') {
        nReversed = '-';
        for (var i = n.length - 1; i > 0; i--) { 
            nReversed += n[i];
        }
        return nReversed;
    } else {
        for (var j = n.length - 1; j >= 0; j--) { 
            nReversed += n[j];
        }
        return nReversed;
    }
}

reverseNumber(-34567);