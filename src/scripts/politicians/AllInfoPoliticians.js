import { usePoliticians } from "./PoliticianProvider.js";
import { usePacDonations } from "./PacDonationProvider.js";
import { usePacs } from "../pacs/PacProvider.js";
import { useLegislations } from "../legislations/LegislationProvider.js"
import { usePoliticianLegislations } from "../legislations/PoliticianLegislationProvider.js"
import { useInterests } from "../corporations/InterestProvider.js"
import { useCorporationInterests } from "../corporations/CorporationInterestProvider.js"
import { useCorporations } from "../corporations/CorporationProvider.js";


export const AllInfoPoliticians = () => {
    const pacs = usePacs()
    const pacDonations = usePacDonations()
    const politicians = usePoliticians()
    const legislations = useLegislations()
    const politicianLegislations = usePoliticianLegislations()
    const interests = useInterests()
    const corporationInterests = useCorporationInterests()
    const corporations = useCorporations()

    const findPoliticianLegislations = (politicianId) => {
        return politicianLegislations.filter(obj => obj.politicianId === politicianId)
    }
    const findPacDonations = (politicianId) => {
        return pacDonations.filter(obj => obj.politicianId === politicianId)
    }
    const findCorporationInterests = (interestId) => {
        return corporationInterests.filter(obj => obj.interestId === interestId)
    }
    const findLegislation = (legislationId) => {
        return legislations.find(legislation => legislation.id === legislationId)
    }
    const findInterest = (interestId) => {
        return interests.find(interest => interest.id === interestId)
    }
    const findPac = (pacId) => {
        return pacs.find(pac => pac.id === pacId)
    }
    const findCorporation = (corporationId) => {
        return corporations.find(corporation => corporation.id === corporationId)
    }

    let html = '<article class="politicians--allInfo">'

    for (const politician of politicians) {
        const foundPoliticianLegislations = findPoliticianLegislations(politician.id)
        const foundPacDonations = findPacDonations(politician.id)

        html += `
        <section class="politician--allInfo">
            <header class="politician__name">
                <h2>${politician.name.first} ${politician.name.last}</h2>
            </header>
            <div class="politician__info">
                <div>Age: ${politician.age}</div>
                <div>Represents:${politician.district}</div>
            </div>
            <div class="politician__bills">
                <h3>Sponsored Bills:</h3>
                    ${
                        foundPoliticianLegislations.map(obj => {
                            const foundLegislation = findLegislation(obj.legislationId)
                            const foundInterest = findInterest(foundLegislation.interestId)

                            return `<div>${foundLegislation.name} (Interest: ${foundInterest.about})</div>`
                        }).join("")
                    }
            <div>
            <div class="politician__funders">
                <h3>Related PACs:</h3>
                <ul>
                    ${
                        foundPacDonations.map(obj => {
                            const foundPac = findPac(obj.pacId)
                            return `<li>${foundPac.registeredName}</li>`
                        }).join("")
                    }
                </ul>
            </div>
            <div class="politician__influencers">
                <h3>Influencing Corporations:</h3>
                <ul>
                    ${
                        foundPoliticianLegislations.map(obj => {
                            const foundLegislation = findLegislation(obj.legislationId)
                            const foundCorporationInterests = findCorporationInterests(foundLegislation.interestId)

                            return `
                                ${foundCorporationInterests.map(obj => {
                                    const foundCorporation = findCorporation(obj.corporationId)

                                    return `<li>${foundCorporation.company}</li>`
                                    }).join("")
                                }`
                        }).join("")
                    }
                
                </ul>
            </div>
        </section>

        `

    }

    html += '</article>'

    return html
}
