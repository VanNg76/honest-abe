import { useCorporations } from "../corporations/CorporationProvider.js";

export const Corporations = () => {
    const corporations = useCorporations()

    return `
        <article class="corporations">
        ${corporations.map(corporation => {
            return `<section class="corporation">
                        <header class="corporation__name">
                            <h2>${corporation.company}</h2>
                        </header>
                        <div class="corporation__info">
                            <div>Address: ${corporation.address}</div>
                        </div>
                    </section>`
            }).join("")
        }
        </article>
    `
}