// Destructuring Object

const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18,
}

const {firstName, lastName, age} = profile;

console.log(firstName, lastName, age);

/* output:
John Doe 18
*/

const {lastName1} = profile;

// Destructuring Assignment

const profile1 = {
    fistName1: "John",
    lastName1: "Doe",
    age1: 18,
}

let firstName1 = "Dimas";
let age1 = 20;

// menginisialisasi nilai baru melalui destructuring object

({firstName1, age1} = profile1);

console.log(firstName1);
console.log(age1);

/* output:
John
18
*/

// tidak bisa karena JavaScript mengira kita membuat block statement
// block statement tidak bisa berada pada sisi kiri assignment
{firstName1, age1} = profile1;


({firstName1, age1} = profile1);

// Default Values

const profile2 = {
    firstName2 = "John",
    lasttName2 = "Doe",
    age2 = 18
}

const {firstName2, age2, isMale} = profile2;

console.log(firstName2);
console.log(age);
console.log(isMale);

/* output:
John
18
undefined
*/

// Alternatifnya

const profile3 = {
    firstName3: "John",
    lastName3: "Doe",
    age3: 18
}

const {firstName3, age3, isMale3 = false} = profile3;

console.log(firstName3);
console.log(age3);
console.log(isMale3);

/* output:
John
18
false
*/

// Assigning to Different Local Variable Names

const profile4 = {
    firstName4 = "John",
    lastName4 = "Doe",
    age4 = 18
}

const {firstname4: localFirstName, laststname4: localLastName, age4: localAge} = profile;

console.log(localFirstName4);
console.log(localLasttName4);
console.log(localage4);

/* output:
John
Doe
18
*/