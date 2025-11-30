import { FTC_API } from '$env/static/private';

let season = '2025';
let eventCode = 'IDCMP';
    
async function getData() {
  const url = `http://ftc-api.firstinspires.org/v2.0/${season}/matches/${eventCode}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    
    // Access matches array
    const matches = result.matches;
    console.log(`Total matches: ${matches.length}`);
    
    // Process each match
    const matchStats = matches.map(match => {
      const blueTeams = [match.teams.Blue1, match.teams.Blue2];
      const redTeams = [match.teams.Red1, match.teams.Red2];
      
      const blueTotalScore = match.scoreBlue + match.penaltyBlue;
      const redTotalScore = match.scoreRed + match.penaltyRed;
      
      return {
        matchNumber: match.matchNumber,
        blueTeams,
        redTeams,
        blueTotalScore,
        redTotalScore,
        winner: blueTotalScore > redTotalScore ? 'Blue' : 'Red'
      };
    });
    
    return matchStats;
  } catch (error) {
    console.error(error.message);
  }
}

export async function load() {
  return {
    matches: await getData()
  };
}