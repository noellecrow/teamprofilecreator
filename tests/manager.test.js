const Manager = require('../lib/Manager');
const manager = new Manager('Noelle', '567890', 'crownoelle@gmail.com', '808');

test('test if we can retrieve constructor values for manager object', () => {
    expect(manager.name).toBe('Noelle');
    expect(manager.id).toBe('567890');
    expect(manager.email).toBe('crownoelle@gmail.com');
    expect(manager.officeNumber).toBe('808');
});

test('test if we can retrieve name from getName() method', () => {
    expect(manager.getName()).toBe('Noelle');
});

test('test if we can retrieve id from getId() method', () => {
    expect(manager.getId()).toBe('567890');
});

test('test if we can retrieve email from getEmail() method', () => {
    expect(manager.getEmail()).toBe('crownoelle@gmail.com');
});

test('test if we can retrieve office number from getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('808');
});

test('test if we can retrieve role from getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});
