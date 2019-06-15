import axios from 'axios';

import { proxy } from './config';

export default axios.create({
	baseURL: `${proxy}http://food2fork.com/api`
});
