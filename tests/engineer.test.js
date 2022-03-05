const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Noelle', '567890', 'crownoelle@gmail.com', 'noellecrow');

test('test if we can retrieve constructor values for engineer object', () => {
    expect(engineer.name).toBe('Noelle');
    expect(engineer.id).toBe('567890');
    expect(engineer.email).toBe('crownoelle@gmail.com');
    expect(engineer.github).toBe('noellecrow');
});

test('test if we can retrieve name from getName() method', () => {
    expect(engineer.getName()).toBe('Noelle');
});

test('test if we can retrieve id from getId() method', () => {
    expect(engineer.getId()).toBe('567890');
});

test('test if we can retrieve email from getEmail() method', () => {
    expect(engineer.getEmail()).toBe('crownoelle@gmail.com');
});

test('test if we can retrieve Github username from getGithub() method', () => {
    expect(engineer.getGithub()).toBe('noellecrow');
});

test('test if we can retrieve role from getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});
