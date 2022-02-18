import { usePoliticians } from "./PoliticianProvider.js";
import { usePacDonations } from "./PacDonationProvider.js";
import { usePacs } from "../pacs/PacProvider.js";

export const PacDonations = () => {
    const pacs = usePacs()
    const pacDonations = usePacDonations()
    const politicians = usePoliticians()

    const findPacDonationObjects = (politicianId) => {
        return pacDonations.filter(obj => obj.politicianId === politicianId)
    }
    const findPac = (pacId) => {
        return pacs.find(pac => pac.id === pacId)
    }

    let html = '<article class="pacDonations">'

    for (const politician of politicians) {
        const foundPacDonationObjects = findPacDonationObjects(politician.id)

        html += `
        <section class="pacDonation">
            <header class="politician__name">
                <h2>${politician.name.first} ${politician.name.last}</h2>
            </header>
            <div class="politician__info">
                <div>Age: ${politician.age}</div>
                <div>Represents: ${politician.district}</div>
            </div>
            <div class="pac__donations">
                <h3>PAC Donations:</h3>
                <ul>
                    ${
                    foundPacDonationObjects.map(obj => {
                        const foundPac = findPac(obj.pacId)
                        return `
                            <li>${foundPac.registeredName} (${obj.amount})</li>
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