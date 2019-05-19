import axios from 'axios';

const METHODS = {
    GET: 'GET',
    POST: 'POST'
}

const BASE_URL = process.env.REACT_APP_BASE_URL;

const CONFIG = {
    'cars': {
        method: METHODS.GET,
        url: `${BASE_URL}/api/v1/`
    },
    'purchase': {
        method: METHODS.POST,
        url: `${BASE_URL}/api/v1/`
    }
}

const makeRequest = (httpCall, payload = {}) => {
    return new Promise(async (resolve, reject) => {
        const requestData = CONFIG[httpCall];

        if (!requestData) {
            return reject('No config');
        }

        try {
            const response = await axios({
                method: requestData.method,
                url: httpCall === 'getImage' ? payload : requestData.url,
                ...payload,
            })

            return resolve(response.data.result || response.data);
        } catch (err) {
            return reject(err.response.data.error || "Something went wrong please refresh");
        }
    })

}

export default makeRequest;