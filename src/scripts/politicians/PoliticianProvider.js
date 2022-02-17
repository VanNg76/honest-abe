let politicians = []

export const getPoliticians = () => {
    return fetch("http://localhost:8088/politicians")
        .then(response => response.json())
        .then((politicianData) => {
            politicians = politicianData
        })
}

export const usePoliticians = () => {
    return politicians.slice()
}
