/*
EXCERCISES
*/

// 1)  
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

// 2)

// Create a new array called all
console.log("2: ------------------------------------");
var all = boys.concat(girls);
console.log(all);


// 3)

// Create a comma-separated string
console.log("3: ------------------------------------");
var comma = all.join(',');
console.log(comma);
// Create a hyphen (-) separated string
var hyphen = all.join('-');
console.log(hyphen);

// 4)

// Add the names Lone and Gitte
console.log("4: ------------------------------------");
// all.push('Lone', 'Gitte');
all = [...all, 'Lone', 'Gitte'];
console.log(all);

// 5)

// Add the names, Hans and Kurt
console.log("5: ------------------------------------");
//all.unshift('Hans', 'Kurt');
all = ['Hans', 'Kurt', ...all];
console.log(all);

// 6)

// Remove the first name
console.log("6: ------------------------------------");
var shift = all.shift()
console.log(shift);
console.log(all);

// 7)

// Remove the last name
console.log("7: ------------------------------------");
var pop = all.pop();
console.log(pop);
console.log(all);

// 8)

// Remove Ole and Janne from the middle of the array
console.log("8: ------------------------------------");
deletedItems = all.splice(3,2)
console.log(all);
console.log(deletedItems);

// 9)

// Reverse the all array, so that the girls comes first
console.log("9: ------------------------------------");
all = all.reverse();
console.log(all);

// 10)

// Sort the array
console.log("10: ------------------------------------");
all = all.sort();
console.log(all);

// 11)
console.log("11: ------------------------------------");
// Write a user-defined sort method
var userSort = all.sort( (a,b) => {
    var nameA = a.toUpperCase();
    var nameB = b.toUpperCase();
    if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
})
console.log(userSort);

// 12)
console.log("12: ------------------------------------");
// Convert names to uppercase
var upperCaseArray = all.map( el => el.toUpperCase())
console.log(upperCaseArray);

// 13)
console.log("13: ------------------------------------");
// new array with names that starts with l or L
var filteredArray = all.filter( el => el.charAt(0) == 'l' || el.charAt(0) == 'L')
console.log(filteredArray);