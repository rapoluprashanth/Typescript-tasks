interface Employees {
    Empl: number;          
    Name: string;          
    Age: number;            
    salary: number;         
    department: string;     
}


const employee: Employees[] = [
    { Empl: 1, Name: "John Doe", Age: 30, salary: 75000, department: "Engineering" },
    { Empl: 2, Name: "Jane Smith", Age: 28, salary: 65000, department: "Development" },
    { Empl: 3, Name: "Alice Johnson", Age: 35, salary: 85000, department: "Engineering" },

];


function getEmployeesByDepartment(department: string): { employee: Employees[], totalSalary: number } {
    const filteredEmployees = employee.filter(emp => emp.department === department);
    const totalSalary = filteredEmployees.reduce((sum, emp) => sum + emp.salary, 0);

    return { employee: filteredEmployees, totalSalary };
}

const departmentToSearch = "Engineering";
const result = getEmployeesByDepartment(departmentToSearch);

console.log(`Employees in ${departmentToSearch}:`);
result.employee.forEach(emp => {
    console.log(`${emp.Name} (ID: ${emp.Empl}, Age: ${emp.Age}, Salary: $${emp.salary})`);
});
console.log(`Total Salary in ${departmentToSearch}: $${result.totalSalary}`);
