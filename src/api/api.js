
const SERVER = 'http://localhost:8000'

export const API = {
    query: async (query) => {
        return await fetch(`${SERVER}/?query=${query}`)
            .then(a => a.json())
    }
}