import axios from 'axios'

export async function useApi(endpoint: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET') {
    switch (method) {
        case 'GET':
            return axios.get(endpoint)
        case 'POST':
            return axios.post(endpoint)
        case 'PUT':
            return axios.put(endpoint)
        case 'DELETE':
            return axios.delete(endpoint)
    }
}