function reverseNumber (n) {
	n = n + '';
    let nToArray = n.split('');

    if (nToArray[0] === '-') {
        nToArray.splice(0, 1);
       return Number('-' + nToArray.reverse().join(''));
    } else {
        return Number(nToArray.reverse().join(''));
    }
}

reverseNumber(-34567);