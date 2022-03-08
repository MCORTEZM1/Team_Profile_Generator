const Engineer = require('../lib/Engineer');

test('Creates Engineer Class/Object', () => {
    const engineer = new Engineer(); 

    expect(typeof(engineer)).toBe('object');
});

test('Check inheritance of name, id, and email properties from parent', () => {
    const engineer = new Engineer(); 

    engineer.name = 'test';
    engineer.id = 45;
    engineer.email = 'mail';

    expect(engineer.name).toBe('test');
    expect(engineer.id).toBe(45);
    expect(engineer.email).toBe('mail');
});

test('Checks inheritance of getName, getId, and getEmail methods', () => {
    const engineer = new Engineer('test', 1, "mail"); 

    expect(engineer.getName()).toBe('test');
    expect(engineer.getId()).toBe(1);
    expect(engineer.getEmail()).toBe('mail');
});

test('Checks for new Engineer method: getGithub()', () => {
    const engineer = new Engineer(); 
    
    engineer.github = 'Testhub'
    expect(engineer.getGithub()).toBe('Testhub');
});

test('Checks getRole() override of parent value, to read: Engineer', () => {
    const engineer = new Engineer(); 

    expect(engineer.getRole()).toBe('Engineer');
});