const Employee = require('./Employee');
const employee = new Employee('Noelle', '567890', 'crownoelle@gmail.com');

test('test if we can retrieve constructor values for employee object', () => {
    expect(employee.name).toBe('Noelle');
    expect(employee.id).toBe('567890');
    expect(employee.email).toBe('crownoelle@gmail.com');
});

test('test if we can retrieve name from getName() method', () => {
    expect(employee.getName()).toBe('Noelle');
});

test('test if we can retrieve id from getId() method', () => {
    expect(employee.getId()).toBe('567890');
});

test('test if we can retrieve email from getEmail() method', () => {
    expect(employee.getEmail()).toBe('crownoelle@gmail.com');
});

test('test if we can retrieve role from getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});
