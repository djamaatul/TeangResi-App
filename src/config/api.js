import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.binderbyte.com/v1/',
});
