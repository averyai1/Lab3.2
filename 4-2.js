const nameEntry = prompt("Please enter your name: ");

switch (nameEntry) {
        case "Bob":
        case "jacob":
        case "Henry":
        case "Ben":
        case "Noah":
        case "Alex":
            console.log(nameEntry + " is a friend!");
            break;
        default:
        console.log(nameEntry + "is not a friend.");
}
