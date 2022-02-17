let pacDonations = []

export const getPacDonations = () => {
    return fetch("http://localhost:8088/pacDonations")
        .then(response => response.json())
        .then((pacDonationData) => {
            pacDonations = pacDonationData
        })
}

export const usePacDonations = () => {
    return pacDonations.slice()
}
