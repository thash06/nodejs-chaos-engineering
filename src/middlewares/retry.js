import axios from 'axios';
import axiosRetry from 'axios-retry';

const URL = 'http://localhost:9090/data-service';
const retry = axios.create({ baseURL: URL });

axiosRetry(axios, {
    retries: 3,
    shouldResetTimeout: true,
    retryCondition : [[100, 199], [429, 429], [500, 599]],
    // retryDelay: (retryCount) => {
    //     return retryCount * 2;
    // }
    retryDelay: retry.exponentialDelay
    });

export default retry;
