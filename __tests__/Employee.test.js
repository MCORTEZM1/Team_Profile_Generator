const Employee = require('../lib/Employee');

test('Creates Employee object', () => {
    const employee = new Employee(); 

    expect(typeof(employee)).toBe("object")
});


test('getName using this.getName() method', () => {
    const employee = new Employee("Alice", 1, "@email.com"); 

    expect(employee.getName()).toBe("Alice")
});


test('getName usind name property', () => {
    const employee = new Employee("Alice", 1, "@email.com"); 

    expect(employee.name).toBe("Alice")
});

test('getId using this.getId() method', () => {
    const employee = new Employee("Alice", 1, "@email.com"); 

    expect(employee.getId()).toBe(1);
});

test('getEmail using this.getEmail() method', () => {
    const employee = new Employee("Alice", 1, "@email.com"); 

    expect(employee.getEmail()).toBe('@email.com');
});

test('getRole using this.getRole() method', () => {
    const employee = new Employee("Alice", 1, "@email.com"); 

    expect(employee.getRole()).toBe('Employee');
});

