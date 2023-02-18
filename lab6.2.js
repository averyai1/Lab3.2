//functions for writing values to console.
const funcOne = () => {
    console.log(1);
  }
  const funcTwo = () => {
    console.log(2);
  }
  const funcThree = () => {
    console.log(3);
    funcOne();
    funcTwo();
  }  
  const funcFour = () => {
    console.log('four'); //outputting word instead of number
    addingNumbers(() => {
      funcThree();
      funcOne();
    },0);
  }

funcFour(); //calling function to execute
  