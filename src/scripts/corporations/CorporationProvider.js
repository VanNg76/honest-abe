let corporations = []

export const getCorporations = () => {
    return fetch("http://localhost:8088/corporations")
        .then(response => response.json())
        .then((corporationData) => {
            corporations = corporationData
        })
}

export const useCorporations = () => {
    return corporations.slice()
}
