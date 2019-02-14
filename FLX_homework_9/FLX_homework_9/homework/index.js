// task 1
function findTypes(...rest) {
    let typevalue = [];
    for (let i = 0; i < rest.length; i++) {
        typevalue[i] = typeof (rest[i]);
    }
    return typevalue;
}

// findTypes('number');
// findTypes(null, 5, 'hello');

// task 2
function executeforEach(array, fun) {
    for (let i = 0; i < array.length; i++) {
        array[i] = fun(array[i]);
    }
    return array;
}

// executeforEach([1, 2, 3], function (el) {
//     console.log(el)
// })

//task 3
function mapArray(arr, fun) {
    return executeforEach(arr, fun);
}

// mapArray([2, 5, 8], function (el) {
//     return el + 3
// })

//task 4
function filterArray(arr, fun) {
    let newArray = [];
    let returnarr = [];
    for (let i = 0; i < arr.length; i++) {
        newArray[i] = arr[i];
    }
    executeforEach(arr, fun);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            returnarr.push(newArray[i])
        }
    }
    return returnarr;
}

// filterArray([2, 5, 8], function (el) {
//     return el > 3
// })

//task 5
function getAmountOfAdultPeople(data) {
    let copydata = [];

    for (let i = 0; i < data.length; i++) {
        copydata[i] = data[i].age;
    }

    copydata = filterArray(copydata, function (el) {
        return el > 18
    })

    return copydata.length;
}

// getAmountOfAdultPeople(data);

// //task 6
// Write function, which returns array of names of people, 
// who are over 18, their favorite fruit is banana 
// and their eye color is green.Reuse functions from task 3 and 4.

// // getGreenAdultBananaLovers(data) returns [‘George]
// function getGreenAdultBananaLovers(data) {
//     let userage = [];

//     for (let i = 0; i < data.length; i++) {
//         userage[i] = data[i].age;
//     }

//     userage = filterArray(userage, function (el) {
//         return el > 18
//     })

// }


// data for task 5 and 6
let data = [
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
]


//task 7
function keys(object) {
    let keys = [];
    let integer = 0;

    for (const key in object) {
        keys[integer] = key;
        integer++;
    }
    return keys;
}

//task 8 
function values(object) {
    let values = [];
    let integer = 0;
    for (const key in object) {
        values[integer] = object[key];
        integer++;
    }
    return values;
}

//task 9
function showFormattedDate(date) {

    let month = new Array();
    
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    let n = month[date.getMonth()];

    console.log('Date: ' + date.getDate() + ' of ' + n + ', ' + date.getFullYear())
}