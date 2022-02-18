let politicianLegislations = []

export const getPoliticianLegislations = () => {
    return fetch("http://localhost:8088/politicianLegislations")
        .then(response => response.json())
        .then((politicianLegislationData) => {
            politicianLegislations = politicianLegislationData
        })
}

export const usePoliticianLegislations = () => {
    return politicianLegislations.slice()
}
