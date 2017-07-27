import store from '../redux/store.js';
import axios from 'axios';

export function sendRequest(url, method, data = [])
{
	var accessToken = store.getState().AccessToken.accessToken;
	var headers = {
		'Content-Type': 'application/json'
	};
	if(accessToken !== null)
	{
		headers.Authorization = 'JWT '+accessToken;
	}
	
	var conf = {
			url: url,
			method: method,
			headers: headers
	};
	if(data !== null && data.length > 0)
	{
		conf.data = data;
	}
	return axios(conf);
}