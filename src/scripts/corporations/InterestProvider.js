let interests = []

export const getInterests = () => {
    return fetch("http://localhost:8088/interests")
        .then(response => response.json())
        .then((interestData) => {
            interests = interestData
        })
}

export const useInterests = () => {
    return interests.slice()
}
