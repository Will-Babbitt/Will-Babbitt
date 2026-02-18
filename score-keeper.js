async function loadBets() {
    try {
        const response = await fetch('bets.json');
        const bets = await response.json();

        let willScore = 0;
        let sharScore = 0;
        const tbody = document.getElementById('bet-history');

        bets.forEach(bet => {
            // Tally scores
            if (bet.winner === 'Will') willScore++;
            else if (bet.winner === 'Shar') sharScore++;

            // Build table row
            const tr = document.createElement('tr');

            const tdDate = document.createElement('td');
            tdDate.textContent = bet.date;

            const tdDesc = document.createElement('td');
            tdDesc.textContent = bet.description;

            const tdWinner = document.createElement('td');
            tdWinner.textContent = bet.winner;
            tdWinner.classList.add('winner');

            tr.appendChild(tdDate);
            tr.appendChild(tdDesc);
            tr.appendChild(tdWinner);
            tbody.appendChild(tr);
        });

        // Update scores
        document.getElementById('score-will').textContent = willScore;
        document.getElementById('score-shar').textContent = sharScore;
    } catch (err) {
        console.error('Failed to load bets:', err);
    }
}

loadBets();
