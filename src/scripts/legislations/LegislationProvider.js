let legislations = []

export const getLegislations = () => {
    return fetch("http://localhost:8088/legislations")
        .then(response => response.json())
        .then((legislationData) => {
            legislations = legislationData
        })
}

export const useLegislations = () => {
    return legislations.slice()
}
