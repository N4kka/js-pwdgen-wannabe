//Asking the user some infos to generate a password:

//Declaration
//Name
const userFirstName = prompt('First Name');
console.log(userFirstName, typeof(userFirstName));

//LastName
const userLastName = prompt('Last Name');
console.log(userLastName, typeof (userLastName));

//Favourite Colour 
const userColour = prompt('Colour');
console.log(userColour, typeof (userColour));

//Password Generator
const result = userFirstName + userLastName + userColour + 21;
console.log(result);

//OUTPUT
//Showing the password generated
document.getElementById('my-title').innerHTML = result;