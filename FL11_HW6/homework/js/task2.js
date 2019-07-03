let lenght_a = Number(prompt('Enter first side lenght:'));
let lenght_b = Number(prompt('Enter second side lenght:'));
let lenght_c = Number(prompt('Enter third side lenght:'));

if(lenght_a + lenght_b <= lenght_c || lenght_a + lenght_c <= lenght_b || lenght_c + lenght_b <= lenght_a) {
    console.log('Triangle doesn’t exist');
} else {
        if (lenght_a===lenght_b && lenght_a===lenght_c && lenght_b===lenght_c){
            console.log('Eequivalent triangle');
        } else {
            if (lenght_a===lenght_b || lenght_a===lenght_c || lenght_b===lenght_c) {
                console.log('Isosceles triangle');
            } else{
                console.log('Normal triangle');
            }

        }
    }