//  1. Select the element with the class output.
const output = document.querySelector('.output');

/*  2. Create another JavaScript object called mainList and select only the ul tag that is within 
    the output element. Update the ID of that ul tag to mainList.
*/
const mainList = output.querySelector('ul');
mainList.id = 'mainList';

//  3. Search for the tagName of each div, and output them into the console as an array.
const divTags = output.getElementsByTagName('div');
const tagNameArray = [];
for (let i = 0; i < divTags.length; i++) {
    tagNameArray.push(divTags[i].tagName);
}
console.log(tagNameArray);

/*
    4. Using a for loop, set the ID of each of the div tags to id with a numeric value of the order 
    they appear within output. Still within the loop, alternate the color of the contents of 
    each element in output to be red or blue.
*/
for (let i = 0; i < divTags.length; i++) {
    divTags[i].id = `id${i+1}`;
    if (i % 2 === 0) {
        divTags[i].style.color = 'red';
    } else {
        divTags[i].style.color = 'blue';
    }
}
