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

//task 6






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
  