
let Play = confirm('Do you want to play a game?');

let money = 0;
let range = 5;
let attem1win = 10;
let attem2win = 5;
let attem3win = 2;
let step = 0;

if (!Play) {
    alert('You did not become a millionaire, but can.');
} else {

    for (; ;) {

        if (step > 0) {
            range *= 2;
            attem1win *= 3;
            attem2win *= 3;
            attem3win *= 3;
        }

        step++;

        let randomNumber = Math.floor(Math.random() * range + 1);
        let UserWin = false;

        for (let attempts = 3; attempts > 0; attempts--) {

            let userNumber = +prompt('Enter number from 0 to ' + range + '\n' +
            'Attempts left: ' + attempts + '\n' +
            'Total prize: ' + money + '\n' + 
            'Possible prize on current attempt: ' + attem1win, '');

            if (userNumber === randomNumber && attempts === 3) {
                money += attem1win;
                UserWin = true;
                break;
            } else if (userNumber === randomNumber && attempts === 2) {
                money += attem2win;
                UserWin = true;
                break;
            } else if (userNumber === randomNumber && attempts === 1) {
                money += attem3win;
                UserWin = true;
                break;
            }

        }

        if (UserWin) {
            alert('Congratulation! Your prize is: ' + money);
            Play = confirm('Do you want to continue?');
        } else {
            alert('Thank you for a game. Your prize is: ' + money);
            money = 0;
            range = 5;
            attem1win = 10;
            attem2win = 5;
            attem3win = 2;
            step = 0;
            Play = confirm('Do you wants to play again?');
        }

        if (!Play) {
            alert('Thank you for a game. Your prize is: ' + money);
            money = 0;
            range = 5;
            attem1win = 10;
            attem2win = 5;
            attem3win = 2;
            step = 0;

            Play = confirm('Do you wants to play again?');
        } else {
            continue;
        }

        if (Play) {
            continue;
        } else {
            break;
        }

    }

}

