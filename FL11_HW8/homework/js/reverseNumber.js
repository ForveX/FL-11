function reverseNumber(n) {
    let res;

    if (n > 0) {
        res = '';
    } else if (n < 0) {
        res = '-';
    } else {
 return; 
}

    n = Math.abs(n);

    void function _(n) {
        if (n < 1) {
 return; 
}
        res += Math.floor (n % 10);
        _(n/10);
      }(n);
      return +res
}

reverseNumber(34567);