
const SERVER = 'http://44.202.161.6:8000/'

export const API = {
    query: async (query) => {
        return await fetch(`${SERVER}/?query=${query}`)
            .then(a => a.json())
    }
}