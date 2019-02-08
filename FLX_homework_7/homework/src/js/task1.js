"use strict";

let UserLogin;
let UserPassword;
let Hours = new Date().getHours();

for (; ;) {

    UserLogin = prompt('Enter Login', '');

    if (UserLogin === '' || UserLogin === null) {
        alert('Canceled.')
        continue;
    } else if (UserLogin.length < 4) {
        alert('I don\'t know any users having name length less than 4 symbols');
        continue;
    }

    switch (UserLogin) {
        case 'User':
        case 'Admin':
            break;
        default:
            alert('I don’t know you');
            continue;
    }
    break;
}

for (; ;) {

    UserPassword = prompt('Enter password', '');

    if (UserPassword === '' || UserPassword === null) {
        alert('Canceled.')
        continue;
    }

    if (UserLogin === 'User' && UserPassword === 'UserPass') {
        if (Hours < 20) {
            alert('Good day, dear User!');
            break;
        } else if (Hours >= 20) {
            alert('Good evening, dear User!');
            break;
        }
    }

    if (UserLogin === 'Admin' && UserPassword === 'RootPass') {

        if (Hours < 20) {
            alert('Good day, dear Admin!');
            break;
        } else if (Hours >= 20) {
            alert('Good evening, dear Admin!');
            break;
        }
    }

    alert('Wrong password!');
    continue;
}