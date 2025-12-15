<script>
    let home = "Home Team Stats";
    let away = "Away Team Stats";
    let awayTeam = "Opponent";
    export let data;
</script>

<div class="flex flex-row rounded-xl max-w-2xl static self-center mx-auto my-auto gap-4 bg-b dark:bg-c">
  <h1>Match Stats</h1>
  {#if data.matches}
    {#each data.matches as match}
      <div>
        <h3>Match {match.matchNumber}</h3>
        <p>Blue: {match.blueTeams.join(', ')} - {match.blueTotalScore}</p>
        <p>Red: {match.redTeams.join(', ')} - {match.redTotalScore}</p>
        <p><strong>Winner: {match.winner}</strong></p>
      </div>
    {/each}
  {:else}
    <p>Loading matches...</p>
  {/if}
</div>