class employee {
    constructor(firstName, lastName, years) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.years = years;
    }
    employeeInfo() {
      return `${this.firstName} ${this.lastName} has worked at the company ${this.years} years.`;
    }
  }

  //Creating and adding the two employees
  const employee1 = new employee("Avery", "Ingram", 7);
  const employee2 = new employee("Vinny", "Meehan", 23);
  const employees = [employee1, employee2];
  
//puts array results into console
  employees.forEach((employee) => {
    console.log(employee.employeeInfo());
  });