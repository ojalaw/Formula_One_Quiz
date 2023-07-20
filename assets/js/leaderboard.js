document.addEventListener("DOMContentLoaded", () => {
    const leaderboardData = JSON.parse(localStorage.getItem("leaderboard")) || [];
  
    leaderboardData.sort((a, b) => b.score - a.score);
  
    let currentRank = 1;
    leaderboardData.forEach((data, index) => {
      if (index > 0 && data.score < leaderboardData[index - 1].score) {
        currentRank++;
      }
      data.rank = currentRank;
    });
  
    const leaderboardTableBody = document.querySelector("#leaderboard-table tbody");
  
    let leaderboardRows = "";
    leaderboardData.forEach((data) => {
      const row = `
        <tr>
          <td>${data.rank}</td>
          <td>${data.name}</td>
          <td>${data.score}</td>
        </tr>
      `;
      leaderboardRows += row;
    });
  
    leaderboardTableBody.innerHTML = leaderboardRows;
  });