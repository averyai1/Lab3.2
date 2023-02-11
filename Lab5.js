let finalTable = []; //Blank Array for table
let rowsValue = 7; //Value for multiplication

for (let i = 1; i <= rowsValue; i++) 
{
  let tempArray = [];
  for (let j = 1; j <= rowsValue; j++) {
    tempArray.push(i * j);
  }

  finalTable.push(tempArray); //Putting all rows into final table
}

console.log(finalTable);
