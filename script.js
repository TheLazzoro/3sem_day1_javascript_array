/*
EXCERCISES
*/

// 1)  
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
console.log("");
console.log("---");
console.log("EXERCISE 1:");
console.log(boys);
console.log(girls);

// 2)

// TODO: Create a new array called all
var all = []
boys.forEach(element => all.push(element));
girls.forEach(element => all.push(element));
console.log("");
console.log("---");
console.log("EXERCISE 2:");
console.log(all);

// 3)

// TODO: Create a comma-separated string
// TODO: Create a hyphen (-) separated string
var str = all.join(",");
var str2 = all.join("-");
console.log("");
console.log("---");
console.log("EXERCISE 3:");
console.log(str);
console.log(str2);


// 4)

// TODO: Add the names Lone and Gitte
all.push("Lone");
all.push("Gitte");
console.log("");
console.log("---");
console.log("EXERCISE 4:");
console.log(all);

// 5)

// TODO: Add the names, Hans and Kurt
all.push("Hans");
all.push("Kurt");
console.log("");
console.log("---");
console.log("EXERCISE 5:");
console.log(all);

// 6)

// TODO: Remove the first name
all.shift();
console.log("");
console.log("---");
console.log("EXERCISE 6:");
console.log(all);

// 7)

// TODO: Remove the last name
all.pop();
console.log("");
console.log("---");
console.log("EXERCISE 7:");
console.log(all);

// 8)

// TODO: Remove Ole and Janne from the middle of the array
for (let i = 0; i < all.length; i++) {
    if(all[i] == "Ole" || all[i] == "Janne") {
        all.splice(i, 1);
    }
}
console.log("");
console.log("---");
console.log("EXERCISE 8:");
console.log(all);


// 9)

// TODO: Reverse the all array, so that the girls comes first
var lars = all.shift();
var Hans = all.pop();
all.reverse();
all.push(Hans);
all.push(lars);
console.log("");
console.log("---");
console.log("EXERCISE 9:");
console.log(all);

// 10)

// TODO: Sort the array
all.sort();
console.log("");
console.log("---");
console.log("EXERCISE 10:");
console.log(all);
// NOTE: Yes, this sorted the array. Names with lower case chars are placed after upper case.

// 11)

// TODO: Write a user-defined sort method



// 12)

// TODO: Convert names to uppercase
var upperCaseNames = [];
all.forEach(element => upperCaseNames.push(element.toUpperCase()));
console.log("");
console.log("---");
console.log("EXERCISE 12:");
console.log(upperCaseNames);
// NOTE: Yes, this sorted the array. Names with lower case chars are placed after upper case.

// 13)

// TODO: new array with names that starts with l or L
var arr = [];
all.forEach(element => {
    if(element[0] == 'l' || element[0] == 'L' ) {
        arr.push(element[0]);
    }
});
console.log("");
console.log("---");
console.log("EXERCISE 13:");
console.log(arr);



console.log("");
console.log("---");
console.log("EXERCISE X:");

// Returns a new array
const newAll = all.map( (element, index) => {
    console.log(index + ": " + element);
    if(element == "Sanne")
        return element;
    // return element == "Sanne";
});

console.log(newAll);

// Just loops through the array
all.forEach( (element, index) => {
    console.log(index + ": " + element);
    // console.log(element);
});