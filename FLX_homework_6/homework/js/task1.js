let a = +prompt('Enter value a', '1');
let b = +prompt('Enter value b', '1');
let c = +prompt('Enter value c', '-6');


if (!isNaN(a) && a.length !== 0 && a !== 0 &&
    !isNaN(b) && b.length !== 0 && !isNaN(c) && c.length !== 0) {

    let d = Math.pow(b, 2) - 4 * a * c;

    if (d < 0) {
        alert('no solution');
    } else if (d === 0) {
        let x = -b / (2 * a);
        alert('x = ' + x);
    } else if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a)
        alert('x1 = ' + x1.toFixed(2) + '\n' + 'x2 = ' + x2.toFixed(2));
    }

} else {

    alert('Invalid input data');
}