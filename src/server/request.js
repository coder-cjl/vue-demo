import axios from "axios";

const config = {
    timeout: 60000,
}

const _axios = axios.create(config)

console.log(import.meta.env.VITE_BASE_URL)
// 请求之前的操作
_axios.interceptors.request.use(
    config => {
        return config
    },
    error => Promise.reject(error)
)

// 请求之后的操作
_axios.interceptors.response.use(
    (response) => {
        return response
    },
    error => Promise.reject(error)
)

const http = {

    get(url = '', params = {}) {
        return this._request(url, params, 'GET')
    },

    post(url = '', params = {}) {
        return this._request(url, params, 'POST')
    },

    _request(url = '', params = {}, method = '') {
        return new Promise((resolve, reject) => {
            _axios({url, params, data: method === 'POST' ? params : null, headers: {}, method: method})
                .then(response => {
                    resolve(response.data)
                    return response
                })
                .catch(error => {
                    alert(error.message)
                    reject(error)
                })
        })
    }
}

export default http