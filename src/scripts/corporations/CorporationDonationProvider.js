let corporationDonations = []

export const getCorporationDonations = () => {
    return fetch("http://localhost:8088/corporationDonations")
        .then(response => response.json())
        .then((corporationDonationData) => {
            corporationDonations = corporationDonationData
        })
}

export const useCorporationDonations = () => {
    return corporationDonations.slice()
}
