// Simple Weather Dashboard Logic using Chart.js

document.addEventListener("DOMContentLoaded", () => {
    // 1. Define Static Weather Data
    // Array of days for the X-axis
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    // Array of temperatures for the Y-axis
    const temperatures = [28, 30, 32, 31, 29, 33, 34]; 
    
    // 2. Get the Canvas Context for the First Chart
    const ctx = document.getElementById('weatherChart').getContext('2d');
    
    // 3. Initialize and Create the Bar Chart
    const weatherChart = new Chart(ctx, {
        type: 'bar', // Specifies the chart type
        data: {
            labels: days, // The labels on the X-axis
            datasets: [{
                label: 'Temperature (°C)',
                data: temperatures, // The data points on the Y-axis
                backgroundColor: 'rgba(52, 152, 219, 0.6)', // Fill color for bars
                borderColor: 'rgba(41, 128, 185, 1)',      // Border color for bars
                borderWidth: 2,                            // Border thickness
                borderRadius: 5,                           // Rounded corners on bars
                hoverBackgroundColor: 'rgba(52, 152, 219, 0.9)' // Color on hover
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Temperature in °C'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Days of the Week'
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });

    // 4. Get the Canvas Context for the Doughnut Chart
    const conditionCtx = document.getElementById('conditionChart').getContext('2d');
    
    // 5. Initialize and Create the Doughnut Chart
    const conditionChart = new Chart(conditionCtx, {
        type: 'doughnut', // Doughnut chart for weather conditions
        data: {
            labels: ['Sunny', 'Cloudy', 'Rainy'], // Categories
            datasets: [{
                data: [18, 8, 4], // Data values for the month
                backgroundColor: [
                    '#f1c40f', // Yellow for Sunny
                    '#95a5a6', // Gray for Cloudy
                    '#3498db'  // Blue for Rainy
                ],
                borderWidth: 1,
                hoverOffset: 5 // Pop out effect on hover
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom' // Place legend at bottom
                }
            }
        }
    });
});
