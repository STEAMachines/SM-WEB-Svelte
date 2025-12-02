import { FTC_API } from '$env/static/private';

let season = '2025';
let eventCode = 'IDCMP';

/**
 * @typedef {Object} Match
 * @property {number} matchNumber
 * @property {Object} teams
 * @property {number} teams.Blue1
 * @property {number} teams.Blue2
 * @property {number} teams.Red1
 * @property {number} teams.Red2
 * @property {number} scoreBlue
 * @property {number} scoreRed
 * @property {number} penaltyBlue
 * @property {number} penaltyRed
 */

async function getData() {
  const url = `http://ftc-api.firstinspires.org/v2.0/${season}/matches/${eventCode}`;
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${FTC_API}`,
        Accept: 'application/json'
      },
    });

console.log()

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    
    /** @type {Match[]} */
    const matches = result.matches;
    console.log(`Total matches: ${matches.length}`);
    
    const matchStats = matches.map((match) => {
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
    const err = error instanceof Error ? error : new Error(String(error));
    console.error(err.message);
  }
}

export async function load() {
  return {
    matches: await getData()
  };
}