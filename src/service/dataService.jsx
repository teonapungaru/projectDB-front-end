import axios from 'axios';

const METHODS = {
    GET: 'GET',
    POST: 'POST'
}

const BASE_URL = 'http://localhost:8080';

const CONFIG = {
    'cars': {
        method: METHODS.GET,
        url: `${BASE_URL}/api/v1/cars`
    },
    'accessories': {
        method: METHODS.GET,
        url: `${BASE_URL}/api/v1/accessories`
    },
    'customers': {
        method: METHODS.GET,
        url: `${BASE_URL}/api/v1/customers`
    },
    'contactDetails': {
        method: METHODS.GET,
        url: `${BASE_URL}/api/v1/contacts`
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
                url: requestData.url,
                ...payload,
            })

            console.log(response.data.result);
            return resolve(response.data.result || response.data);
        } catch (err) {
            return reject(err.response.data.error || "Something went wrong please refresh");
        }
    })

}

export default makeRequest;