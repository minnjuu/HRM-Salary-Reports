<?php

include 'db_conn.php';

// Query 1: Total salary by department
$sqlTotalSalary = "SELECT ROUND(SUM(service_records.monthly_salary)) AS total_salary, departments.dept_name 
                    FROM service_records
                    INNER JOIN employees ON employees.idemployees = service_records.employees_idemployees
                    INNER JOIN employees_unitassignments ON employees.idemployees = employees_unitassignments.employees_idemployees
                    INNER JOIN departments ON departments.iddepartments = employees_unitassignments.departments_iddepartments
                    GROUP BY departments.dept_name";

$resultTotalSalary = $conn->query($sqlTotalSalary);

$dataTotalSalary = array();

if ($resultTotalSalary->num_rows > 0) {
    while ($row = $resultTotalSalary->fetch_assoc()) {
        $dataTotalSalary[] = $row;
    }
}

// Query 2: Average salary by department
$sqlAvgSalary = "SELECT ROUND(AVG(service_records.monthly_salary)) AS avg_salary, departments.dept_name 
                 FROM service_records
                 INNER JOIN employees ON employees.idemployees = service_records.employees_idemployees
                 INNER JOIN employees_unitassignments ON employees.idemployees = employees_unitassignments.employees_idemployees
                 INNER JOIN departments ON departments.iddepartments = employees_unitassignments.departments_iddepartments
                 GROUP BY departments.dept_name";

$resultAvgSalary = $conn->query($sqlAvgSalary);

$dataAvgSalary = array();

if ($resultAvgSalary->num_rows > 0) {
    while ($row = $resultAvgSalary->fetch_assoc()) {
        $dataAvgSalary[] = $row;
    }
}

// Query 3: Number of employees per department
$sqlEmployeeCount = "SELECT COUNT(employees.idemployees) AS employee_count, departments.dept_name
                    FROM employees
                    INNER JOIN employees_unitassignments ON employees.idemployees = employees_unitassignments.employees_idemployees
                    INNER JOIN departments ON departments.iddepartments = employees_unitassignments.departments_iddepartments
                    GROUP BY departments.dept_name";

$resultEmployeeCount = $conn->query($sqlEmployeeCount);

$dataEmployeeCount = array();

if ($resultEmployeeCount->num_rows > 0) {
    while ($row = $resultEmployeeCount->fetch_assoc()) {
        $dataEmployeeCount[] = $row;
    }
}

// Combine the results into a single array
$responseData = array(
    'total_salary' => $dataTotalSalary,
    'avg_salary' => $dataAvgSalary,
    'employee_count' => $dataEmployeeCount
);

header('Content-Type: application/json');
echo json_encode($responseData);

$conn->close();
?>
