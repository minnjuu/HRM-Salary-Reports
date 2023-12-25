// Create a chart for total salary and budget allocation
const ctxTotalSalary = document.getElementById('salaryChart').getContext('2d');
const totalSalaryChart = new Chart(ctxTotalSalary, {
    type: 'bar',
    data: {
        labels: [], // Empty initially, will be filled by fetch_data
        datasets: [
            {
                label: 'Department Total Salary',
                data: [], // Empty initially, will be filled by fetch_data
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Estimated Budget Allocation',
                data: [], // Empty initially, will be filled by fetch_data
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
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

// Create a chart for average salary
const ctxAvgSalary = document.getElementById('averageChart').getContext('2d');
const avgSalaryChart = new Chart(ctxAvgSalary, {
    type: 'bar',
    data: {
        labels: [], // Empty initially, will be filled by fetch_data
        datasets: [
            {
                label: 'Department Average Salary',
                data: [], // Empty initially, will be filled by fetch_data
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
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

// Fetch data and update the charts
function fetch_data() {
    fetch('retrieve.php')
    .then(response => response.json())
    .then(data => {
        
        console.log(data);
        
        updateTotalSalaryChart(data.total_salary);
        updateAvgSalaryChart(data.avg_salary);
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

document.addEventListener('DOMContentLoaded', function () {

    
    fetch_data();
    // Function to show the salary chart
    window.showSalaryChart = function () {
        console.log("Clicked: showSalaryChart");
        document.getElementById('h1').innerText = "HRM Report For Department Budget Allocation";
        document.getElementById('p1').innerText = "This chart shows the Total Salary of each Department and as well as the calculated Budget Allocation for each Department based on their total salary.";
        document.getElementById('salaryChart').style.display = 'block';
        document.getElementById('averageChart').style.display = 'none';
        totalSalaryChart.update(); // Call the function to update the salary chart
    };

    // Function to show the average salary chart
    window.showAverageSalaryChart = function () {
        console.log("Clicked: showAverageSalaryChart");
        document.getElementById('h1').innerText = "HRM Report for Department Average Salary";
        document.getElementById('p1').innerText = "This chart shows the Average Salary for each Department.";
        document.getElementById('salaryChart').style.display = 'none';
        document.getElementById('averageChart').style.display = 'block';
        avgSalaryChart.update(); // Call the function to update the average salary chart
    };

    
    showSalaryChart();
});
