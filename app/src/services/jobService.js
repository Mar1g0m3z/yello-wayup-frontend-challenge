import axios from 'axios';

const API_URL = 'https://62bc8d086b1401736cfcd8fb.mockapi.io/jobs';

export const fetchJobs = async () => {
	try {
		const response = await axios.get(API_URL);
		return response.data;
	} catch (error) {
		console.error('Error fetching jobs:', error);
		return [];
	}
};
