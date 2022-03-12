const Manager = require('../lib/Manager');

test('Creates Manager Class/Object', () => {
    const manager = new Manager(); 

    expect(typeof(manager)).toBe('object');
});

test('Check inheritance of name, id, and email properties from parent', () => {
    const manager = new Manager(); 

    manager.name = 'test';
    manager.id = 45;
    manager.email = 'mail';

    expect(manager.name).toBe('test');
    expect(manager.id).toBe(45);
    expect(manager.email).toBe('mail');
});

test('Checks inheritance of name, id, and email methods', () => {
    const manager = new Manager('test', 1, "mail"); 

    expect(manager.getName()).toBe('test');
    expect(manager.getId()).toBe(1);
    expect(manager.getEmail()).toBe('mail');
});

test('Checks for new method: getOfficeNumber()', () => {
    const manager = new Manager('test', 1, "mail", 455); 

    expect(manager.getOfficeNumber()).toBe(455);
});

test('Checks getRole() override of parent value, to read: Manager', () => {
    const manager = new Manager(); 

    expect(manager.getRole()).toBe('Manager');
});