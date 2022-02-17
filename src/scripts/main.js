import { getCorporations } from "./corporations/CorporationProvider.js";
import { Corporations } from "./corporations/Corporations.js";
import { getPoliticians } from "./politicians/PoliticianProvider.js";
import { Politicians } from "./politicians/Politicians.js";
import { CorporationDonations } from "./corporations/CorporationDonations.js"
import { getCorporationDonations } from "./corporations/CorporationDonationProvider.js";
import { getPacs } from "./pacs/PacProvider.js";

const render = () => {
    getPoliticians()
        .then(getPacs)
        .then(getCorporationDonations)
        .then(getCorporations)
        .then(() => {
            document.querySelector("#politicians").innerHTML += Politicians()
            document.querySelector("#corporations").innerHTML += Corporations()
            document.querySelector("#corporationDonations").innerHTML += CorporationDonations()            
        })
}

render()

