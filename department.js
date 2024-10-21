var employee = [
    { Empl: 1, Name: "John Doe", Age: 30, salary: 75000, department: "Engineering" },
    { Empl: 2, Name: "Jane Smith", Age: 28, salary: 65000, department: "Development" },
    { Empl: 3, Name: "Alice Johnson", Age: 35, salary: 85000, department: "Engineering" },
];
function getEmployeesByDepartment(department) {
    var filteredEmployees = employee.filter(function (emp) { return emp.department === department; });
    var totalSalary = filteredEmployees.reduce(function (sum, emp) { return sum + emp.salary; }, 0);
    return { employee: filteredEmployees, totalSalary: totalSalary };
}
var departmentToSearch = "Engineering";
var result = getEmployeesByDepartment(departmentToSearch);
console.log("Employees in ".concat(departmentToSearch, ":"));
result.employee.forEach(function (emp) {
    console.log("".concat(emp.Name, " (ID: ").concat(emp.Empl, ", Age: ").concat(emp.Age, ", Salary: $").concat(emp.salary, ")"));
});
console.log("Total Salary in ".concat(departmentToSearch, ": $").concat(result.totalSalary));
