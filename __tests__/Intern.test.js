const Intern = require('../lib/Intern');

test('Creates Inter Class/Object', () => {
    const intern = new Intern(); 

    expect(typeof(intern)).toBe('object');
});

test('Check inheritance of name, id, and email properties from parent', () => {
    const intern = new Intern(); 

    intern.name = 'test';
    intern.id = 45;
    intern.email = 'mail';

    expect(intern.name).toBe('test');
    expect(intern.id).toBe(45);
    expect(intern.email).toBe('mail');
});

test('Checks inheritance of getName, getId, and getEmail methods', () => {
    const intern = new Intern('test', 1, "mail"); 

    expect(intern.getName()).toBe('test');
    expect(intern.getId()).toBe(1);
    expect(intern.getEmail()).toBe('mail');
});

test('Checks for new Intern method: getSchool()', () => {
    const intern = new Intern(); 
    
    intern.school = 'school'
    expect(intern.getSchool()).toBe('school');
});

test('Checks getRole() override of parent value, to read: Intern', () => {
    const intern = new Intern(); 

    expect(intern.getRole()).toBe('Intern');
});