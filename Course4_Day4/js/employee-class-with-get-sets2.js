let Employee = class {
    constructor(id, name, salary, dept) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.dept = dept;
    }

    // Methods to get information:
    fetchEmployee() {
        console.log(`
        The Employee details are as follows:
        id: ${this.id},
        name: ${this.name},
        salary: ${this.salary},
        dept: ${this.dept}
    `);
    }

    get Id() {
        return this.id;
    }

    set Id(id) {
        this.id = id;
    }

    get Name() {
        return this.name;
    }

    set Name(name) {
        this.name = name;
    }

    get Salary() {
        return this.salary;
    }

    set Salary(salary) {
        this.salary = salary;
    }

    get Dept() {
        return this.dept;
    }

    set Dept(dept) {
        this.dept = dept;
    }

};

let empObj = new Employee();
// console.log(empObj);

// Set values:
empObj.Dept = 'Engineering';
empObj.Id =1;
empObj.Name = 'Andie Mydosh';
empObj.Salary = 100000;
console.log(empObj);

// Get values:
console.log(empObj.Dept);
console.log(empObj.Id);
console.log(empObj.Name);
console.log(empObj.Salary);

empObj.fetchEmployee();