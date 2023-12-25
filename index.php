<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HR Salary and Budget Reports</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
   <main>
        <div id="sidebar">
            <h2>Salary Reports</h2>
            <hr>
            <br>
            <ul>
                <li><a id="total" href="#" onclick="showSalaryChart()">Budget Allocation</a></li>
                <br>
                <li><a id="average" href="#" onclick="showAverageSalaryChart()">Average Salary</a></li>
            </ul>
        </div>
        <br>
        <br>
        <div id="content">
            <h1 id="h1"></h1>
            <p id="p1"></p>
            

            <canvas id="salaryChart" width="1000" height="600"></canvas>
            <canvas id="averageChart" width="1000" height="600"></canvas>
            <canvas id="employeeDistributionChart" width="1000" height="600"></canvas>


           
        </div>
        
   </main>
   <!-- <script src="navigation.js"></script> -->
   <script src="charts.js"></script>
   
</body>
</html>
