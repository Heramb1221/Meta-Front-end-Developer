var fruits = [];
fruits.push("apple"); //['apple']
fruits.push("pear"); //['apple', 'pear']

fruits.pop();
console.log(fruits);

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}

var simpleArr = arrayBuilder('apple', 'pear', 'plum'); //['apple', 'pear', 'plum']

/*
if return used in function arrayBuilder then,
console.log(simpleArr);
*/