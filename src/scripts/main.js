import { getCorporations } from "./corporations/CorporationProvider.js";
import { Corporations } from "./corporations/Corporations.js";
import { getPoliticians } from "./politicians/PoliticianProvider.js";
import { Politicians } from "./politicians/Politicians.js";
import { CorporationDonations } from "./corporations/CorporationDonations.js"
import { getCorporationDonations } from "./corporations/CorporationDonationProvider.js";
import { getPacs } from "./pacs/PacProvider.js";
import { getPacDonations } from "./politicians/PacDonationProvider.js";
import { PacDonations } from "./politicians/PacDonations.js"
import { getLegislations } from "./legislations/LegislationProvider.js";
import { getPoliticianLegislations } from "./legislations/PoliticianLegislationProvider.js";
import { getInterests } from "./corporations/InterestProvider.js"
import { getCorporationInterests } from "./corporations/CorporationInterestProvider.js"
import { AllInfoPoliticians } from "./politicians/AllInfoPoliticians.js"


const render = () => {
    getPoliticians()
        .then(getPacs)
        .then(getCorporationDonations)
        .then(getCorporations)
        .then(getPacDonations)
        .then(getLegislations)
        .then(getPoliticianLegislations)
        .then(getInterests)
        .then(getCorporationInterests)
        .then(() => {
            document.querySelector("#politicians").innerHTML += Politicians()
            document.querySelector("#corporations").innerHTML += Corporations()
            document.querySelector("#corporationDonations").innerHTML += CorporationDonations()
            document.querySelector("#pacDonations").innerHTML += PacDonations()
            document.querySelector("#allInfo").innerHTML += AllInfoPoliticians()
        })
}

render()

