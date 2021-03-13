import axios from 'axios';

const instance = axios.create({
	baseURL: '/api'
});

instance.defaults.method = 'POST';
instance.defaults.withCredentials = true;
instance.defaults.responseType = 'json';

export default instance;