let corporationInterests = []

export const getCorporationInterests = () => {
    return fetch("http://localhost:8088/corporationInterests")
        .then(response => response.json())
        .then((corporationInterestData) => {
            corporationInterests = corporationInterestData
        })
}

export const useCorporationInterests = () => {
    return corporationInterests.slice()
}
