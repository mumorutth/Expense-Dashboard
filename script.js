const ctxExpenses = document.getElementById('expensesChart').getContext('2d');
const expensesChart = new Chart(ctxExpenses, {
    type: 'bar',
    data: {
        labels: ['Tuition', 'Housing', 'Food', 'Transportation', 'Books', 'Entertainment'],
        datasets: [{
            label: 'Total Expenses',
            data: [12000, 8000, 3000, 1500, 500, 2000], // Example data
            backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#4bc0c0', '#ff9f40'],
        }]
    }
});
