const Intern = require('../lib/Intern');
const intern = new Intern('Noelle', '567890', 'crownoelle@gmail.com', 'UCLA Coding Bootcamp');

test('test if we can retrieve constructor values for intern object', () => {
    expect(intern.name).toBe('Noelle');
    expect(intern.id).toBe('567890');
    expect(intern.email).toBe('crownoelle@gmail.com');
    expect(intern.school).toBe('UCLA Coding Bootcamp');
});

test('test if we can retrieve name from getName() method', () => {
    expect(intern.getName()).toBe('Noelle');
});

test('test if we can retrieve id from getId() method', () => {
    expect(intern.getId()).toBe('567890');
});

test('test if we can retrieve email from getEmail() method', () => {
    expect(intern.getEmail()).toBe('crownoelle@gmail.com');
});

test('test if we can retrieve school from getSchool() method', () => {
    expect(intern.getSchool()).toBe('UCLA Coding Bootcamp');
});

test('test if we can retrieve role from getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});
