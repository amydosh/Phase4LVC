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

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getSalary() {
        return this.salary;
    }

    setSalary(salary) {
        this.salary = salary;
    }

    getDept() {
        return this.dept;
    }

    setDept(dept) {
        this.dept = dept;
    }

};

let empObj = new Employee();
console.log(empObj);

// Set values:
empObj.setDept('Engineering');
empObj.setId(1);
empObj.setName('Andie Mydosh');
empObj.setSalary(100000);
console.log(empObj);

// Get values:
console.log(empObj.getDept());
console.log(empObj.getId());
console.log(empObj.getName());
console.log(empObj.getSalary());

empObj.fetchEmployee();