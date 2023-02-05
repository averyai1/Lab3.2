const referenceNum = 7;

let userIn = prompt("Please enter a number.");

/*
Function to check if user has entered a valid integer
If not creates new prompt for another input
*/
function checkInput(input) {
    return !isNaN(parseInt(input));
}
while (!checkInput(userIn)) {
    userIn = prompt("Please enter a valid number.");
}

//checks if the user input is greater than the Dynamic number
if (userIn > referenceNum) {
    console.log(userIn + " is greater than " + referenceNum);
} 
else if (userIn == referenceNum) {
    console.log(userIn + " is equal to " + referenceNum);
} 
else {
     console.log(userIn + " is less than " + referenceNum);
}

