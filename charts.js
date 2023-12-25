// Chart for total salary and budget allocation
const ctxTotalSalary = document.getElementById('salaryChart').getContext('2d');
const totalSalaryChart = new Chart(ctxTotalSalary, {
    type: 'bar',
    data: {
        labels: [], // Empty initially, will be filled by fetch_data
        datasets: [
            {
                label: 'Department Total Salary',
                data: [], // Empty initially, will be filled by fetch_data
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(94, 216, 97, 0.2)',
                    'rgba(207, 97, 94, 0.2)',
                    'rgba(113, 162, 255, 0.2)',
                    'rgba(232, 144, 84, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(94, 216, 97, 1)',
                    'rgba(207, 97, 94, 1)',
                    'rgba(113, 162, 255, 1)',
                    'rgba(232, 144, 84, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Estimated Budget Allocation',
                data: [], // Empty initially, will be filled by fetch_data
                backgroundColor: 'rgba(255, 30, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': $' + context.formattedValue;
                    }
                }
            },
            legend: {
                display: true,
                position: 'top'
            }
        },
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20
            }
        }
    }
});

// Chart for average salary
const ctxAvgSalary = document.getElementById('averageChart').getContext('2d');
const avgSalaryChart = new Chart(ctxAvgSalary, {
    type: 'bar',
    data: {
        labels: [], // Empty initially, will be filled by fetch_data
        datasets: [
            {
                label: 'Department Average Salary',
                data: [], // Empty initially, will be filled by fetch_data
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(94, 216, 97, 0.2)',
                    'rgba(207, 97, 94, 0.2)',
                    'rgba(113, 162, 255, 0.2)',
                    'rgba(232, 144, 84, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(94, 216, 97, 1)',
                    'rgba(207, 97, 94, 1)',
                    'rgba(113, 162, 255, 1)',
                    'rgba(232, 144, 84, 1)'
                ],
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': $' + context.formattedValue;
                    }
                }
            },
            legend: {
                display: true,
                position: 'top'
            }
        },
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20
            }
        }
    }
});

// Chart for employee distribution 
const ctxEmployeeDistribution = document.getElementById('employeedisChart').getContext('2d');
const employeeDistributionChart = new Chart(ctxEmployeeDistribution, {
    type: 'doughnut',
    data: {
        labels: [], // Empty initially, will be filled by fetch_data
        datasets: [
            {
                label: 'Employee Distribution',
                data: [], // Empty initially, will be filled by fetch_data
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(94, 216, 97, 0.2)',
                    'rgba(207, 97, 94, 0.2)',
                    'rgba(113, 162, 255, 0.2)',
                    'rgba(232, 144, 84, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(94, 216, 97, 1)',
                    'rgba(207, 97, 94, 1)',
                    'rgba(113, 162, 255, 1)',
                    'rgba(232, 144, 84, 1)'
                ],
                borderWidth: 1
            }
        ]
    },
    options: {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': ' + context.formattedValue + ' employees';
                    }
                }
            },
            legend: {
                display: true,
                position: 'top'
            }
        }
    }
});

function fetch_data() {
    fetch('retrieve.php')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        updateTotalSalaryChart(data.total_salary);
        updateAvgSalaryChart(data.avg_salary);
        updateEmployeeDistributionChart(data.employee_count);
    })
    .catch(error => console.error('Error fetching data:', error));
}

function updateTotalSalaryChart(data) {
    console.log(data);

    const labels = data.map(entry => entry.dept_name);
    const salaryValues = data.map(entry => entry.total_salary);

    // Calculate total salary for budget allocation
    const totalSalary = salaryValues.reduce((sum, salary) => sum + salary, 0);

    // Calculate budget allocation based on a fixed percentage
    const fixedPercentage = 1.15;
    const budgetValues = salaryValues.map(salary => salary * fixedPercentage);

    // Update chart data
    totalSalaryChart.data.labels = labels;
    totalSalaryChart.data.datasets[0].data = salaryValues;
    totalSalaryChart.data.datasets[1].data = budgetValues;

    // Update the chart
    totalSalaryChart.update();
}

function updateAvgSalaryChart(data) {

    console.log(data);
    const labels = data.map(entry => entry.dept_name);
    const avgSalaryValues = data.map(entry => entry.avg_salary);

    // Update chart data
    avgSalaryChart.data.labels = labels;
    avgSalaryChart.data.datasets[0].data = avgSalaryValues;

    // Update the chart
    avgSalaryChart.update();
}

function updateEmployeeDistributionChart(data) {
    const labels = data.map(entry => entry.dept_name);
    const employeeCountValues = data.map(entry => entry.employee_count);

    // Update chart data
    employeeDistributionChart.data.labels = labels;
    employeeDistributionChart.data.datasets[0].data = employeeCountValues;

    // Update the chart
    employeeDistributionChart.update();
}

document.addEventListener('DOMContentLoaded', function () {

    
    fetch_data();
    // Function to show the salary chart
    window.showSalaryChart = function () {
        console.log("Clicked: showSalaryChart");
        document.getElementById('h1').innerText = "HRM Report For Department Budget Allocation";
        document.getElementById('p1').innerText = "This chart shows the Total Salary of each Department and as well as the calculated Budget Allocation for each Department based on their total salary.";
        document.getElementById('salaryChart').style.display = 'block';
        document.getElementById('averageChart').style.display = 'none';
        document.getElementById('employeedisChart').style.display = 'none';
        totalSalaryChart.update(); // Call the function to update the salary chart
    };

    // Function to show the average salary chart
    window.showAverageSalaryChart = function () {
        console.log("Clicked: showAverageSalaryChart");
        document.getElementById('h1').innerText = "HRM Report for Department Average Salary";
        document.getElementById('p1').innerText = "This chart shows the Average Salary for each Department.";
        document.getElementById('salaryChart').style.display = 'none';
        document.getElementById('averageChart').style.display = 'block';
        document.getElementById('employeedisChart').style.display = 'none';
        avgSalaryChart.update(); // Call the function to update the average salary chart
    };

    window.showEmployeeCount = function () {
        console.log("Clicked: showEmployeeCount");
        document.getElementById('h1').innerText = "HRM Report for Department Employee Count";
        document.getElementById('p1').innerText = "This chart shows the number of Employees in each Department.";
        document.getElementById('salaryChart').style.display = 'none';
        document.getElementById('averageChart').style.display = 'none';
        document.getElementById('employeedisChart').style.display = 'block';
        avgSalaryChart.update(); // Call the function to update the average salary chart
    };

    
    showSalaryChart();
});
