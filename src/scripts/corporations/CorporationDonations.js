import { useCorporationDonations } from "./CorporationDonationProvider.js";
import { usePacs } from "../pacs/PacProvider.js";
import { useCorporations } from "./CorporationProvider.js";


export const CorporationDonations = () => {
    const corporationDonations = useCorporationDonations()
    const pacs = usePacs()
    const corporations = useCorporations()

    // filter or find target object(s)
    const findCorporationDonationObjects = (pacId) => {
        return corporationDonations.filter(corporationDonation => corporationDonation.pacId === pacId)
    }
    const findCorporationObject = (corporationId) => {
        return corporations.find(corporation => corporation.id === corporationId)
    }

    let html = '<article class="corporationDonations">'

    for (const pac of pacs) {
        const foundCorporationDonationObjects = findCorporationDonationObjects(pac.id)
        html += `
        <section class="corporationDonation">
            <header class="pac__name">
                <h2>${pac.registeredName}</h2>
            </header>
            <div class="pac__info">
                <div>${pac.address}</div>
            </div>
            <div class="pac__donors">
                <h3>Donors:</h3>
                <ul>
                    ${
                    foundCorporationDonationObjects.map(obj => {
                        const foundCorporation = findCorporationObject(obj.corporationId)
                        
                        return `
                            <li>${foundCorporation.company} (${obj.amount})</li>
                        `
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



