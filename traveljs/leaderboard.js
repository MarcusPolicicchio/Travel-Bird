// script.js

// Sample leaderboard data
const leaderboardData = [
    { rank: 1, user: "Chanelle", miles: 12000, places: 45, reviews: 30, points: 200 },
    { rank: 2, user: "David", miles: 9500, places: 40, reviews: 25, points: 180 },
    { rank: 3, user: "Charlie", miles: 8900, places: 38, reviews: 20, points: 160 },
];

// Function to render the leaderboard
function renderLeaderboard() {
    const tbody = document.getElementById("leaderboard-body");
    tbody.innerHTML = ""; // Clear existing data

    leaderboardData.forEach(entry => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${entry.rank}</td>
            <td>${entry.user}</td>
            <td>${entry.miles}</td>
            <td>${entry.places}</td>
            <td>${entry.reviews}</td>
            <td>${entry.points}</td>
        `;
        tbody.appendChild(row);
    });
}

// Load leaderboard on page load
document.addEventListener("DOMContentLoaded", renderLeaderboard);
