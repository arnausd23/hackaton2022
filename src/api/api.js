
const SERVER = 'http://44.204.189.53:8000'

export const API = {
    query: async (query) => {
        return await fetch(`${SERVER}/?query=${query}`)
            .then(a => a.json())
    }
}