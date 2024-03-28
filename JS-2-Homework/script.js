
//1 
let array = [1, 2, 3, 4]
console.log(Array.isArray(array))
// 2.      
console.log(array[0]);
// 3.   
console.log(array.at(-1));
console.log(array[array.length - 1]);
// 4.
 let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
 let o = ["th","st","nd","rd"]
//  "1st choice is Blue ."
console.log(`1${o[1]} choice is ${color[0]}` );
// "2nd choice is Green."
console.log(`2${o[2]} choice is ${color[1]}` );
// "3rd choice is Red."
console.log(`3${o[3]} choice is ${color[2]}` );

// 5.   
let user = {
    name: "Harry",
    surname: "potter",
    age: 11
}
console.log(user);

user.address = "Privet Drive"
console.log(user);

delete user.age 
console.log(user);

user.name = "The boy who lived"
console.log(user);