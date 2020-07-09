import axios from 'axios';

export default async function fetching(){
  let response = await axios.get('https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&size=2&dmaId=527&apikey=')
  console.log(response.data._embedded.events)
  return response.data._embedded.events
}
