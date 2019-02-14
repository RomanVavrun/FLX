// task 1
function findTypes(...rest) {
    let typevalue = [];
    for (let i = 0; i < rest.length; i++) {
        typevalue[i] = typeof (rest[i]);
    }
    return typevalue;
}

findTypes('number');
findTypes(null, 5, 'hello');

// task 2
function executeforEach(array, fun) {
    for (let i = 0; i < array.length; i++) {
        array[i] = fun(array[i]);
    }
    return array;
}

executeforEach([1, 2, 3], function (el) {
    console.log(el)
})

//task 3
function mapArray(arr, fun) {
    return executeforEach(arr, fun);
}

mapArray([2, 5, 8], function (el) {
    return el + 3
})

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

filterArray([2, 5, 8], function (el) {
    return el > 3
})

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

getAmountOfAdultPeople(data);

//task 6
function getGreenAdultBananaLovers(data) {
    let name = [];
    filterArray(data, function (el) {
        if (el.age > 18 && el.favoriteFruit === 'banana' && el.eyeColor === 'green') {
            name.push(el.name);
        }
    });
    return name;
}

getGreenAdultBananaLovers(data)

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

keys({ keyOne: 1, keyTwo: 2, keyThree: 3 })

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

values({ keyOne: 1, keyTwo: 2, keyThree: 3 })

//task 9
function showFormattedDate(date) {
    let month = ['Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'];

    console.log('Date: ' + date.getDate() + ' of ' + month[date.getMonth()] + ', ' + date.getFullYear())
}

showFormattedDate(new Date('2019-01-27T01:10:00'))

//task 10
function isEvenYear(date) {
    let year = date.getFullYear();
    return year % 2 === 0;
}

isEvenYear(new Date('2019-01-27T01:10:00'))

//task 11
function isEvenMonth(date) {
    let month = date.getMonth() + 1;
    return month % 2 === 0;
}

isEvenMonth(new Date('2019-02-27T01:10:00'))

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
