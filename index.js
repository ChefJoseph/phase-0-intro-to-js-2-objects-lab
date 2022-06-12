// Write your solution in this file!
const employee = {
    name: "Joe",
    streetAddress: "33 Bond Street",
};

function updateEmployeeWithKeyAndValue(employee,key,value) {
    const employees = {...employee}
    employees[key] = value
    return employees;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
    employee[key] = value
    return employee;
}
function deleteFromEmployeeByKey(employee,key,value) {
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee,key,value) {
    delete employee[key]
    return employee;
}