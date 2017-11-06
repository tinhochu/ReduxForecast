import axios from 'axios';

const API_KEY = '1ae44021726610cd688d3d9262a2821b';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather( city ) {

	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get( url );
	
	console.log('Request: ', request);

	return {
		type   : FETCH_WEATHER,
		payload: request
	};
}