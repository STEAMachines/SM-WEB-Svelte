import { FTC_API } from '$env/static/private';
import { onMount } from 'svelte';

let season = '2025';
let eventCode = 'IDCMP';

onMount(getData)

async function getData() {
  console.log('FTC_API:', FTC_API);
  
  const url = `http://ftc-api.firstinspires.org/v2.0/${season}/matches/${eventCode}`;
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${FTC_API}`,
        Accept: 'application/json'
      },
    });

    if (!response.ok) {
      console.error(`API Error: ${response.status}`);
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    const matches = result.matches;
    console.log(`Total matches: ${matches.length}`);
    
    return matches.map((match) => ({
      matchNumber: match.matchNumber,
      blueTeams: [match.teams.Blue1, match.teams.Blue2],
      redTeams: [match.teams.Red1, match.teams.Red2],
      blueTotalScore: match.scoreBlue + match.penaltyBlue,
      redTotalScore: match.scoreRed + match.penaltyRed,
      winner: (match.scoreBlue + match.penaltyBlue) > (match.scoreRed + match.penaltyRed) ? 'Blue' : 'Red'
    }));
  } catch (error) {
    console.error('Error fetching matches:', error);
    return [];
  }
}

export async function load() {
  return {
    matches: await getData()
  };
}