function countUp(start) {
    if (start <= 10) {
      console.log(start);
      countUp(start + 1);
    }
    else if (start >10){
        console.log('\n');//line break to seperate function inputs
    }
  }
  
//counting from 0
countUp(0);s

//counting from 8
countUp(8);

//counting from 3
countUp(3);
