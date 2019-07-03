const divider = 2;

let x1 = Number(prompt('Enter x coordinate value for point "A"'));
let y1 = Number(prompt('Enter y coordinate value for point "A"'));

let x2 = Number(prompt('Enter x coordinate value for point "B"'));
let y2 = Number(prompt('Enter x coordinate value for point "B"'));

let x3 = Number(prompt('Enter x coordinate value for point "C"'));
let y3 = Number(prompt('Enter x coordinate value for point "C"'));

let middle_x = (x1 + x2)/divider;
let middle_y = (y1 + y2)/divider;

if (x3===middle_x && y3===middle_y) {
    console.log(true);
} else {
    console.log(false);
}