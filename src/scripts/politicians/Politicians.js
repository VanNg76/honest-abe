import { usePoliticians } from "./PoliticianProvider.js";

export const Politicians = () => {
    const politicians = usePoliticians()

    return `
        <article class="politicians">
            ${politicians.map(politician => {
                return `<section class="politician">
                            <header class="politician__name">
                                <h2>${politician.name.first} ${politician.name.last}</h2>
                            </header>
                            <div class="politician__info">
                                <div>Age: ${politician.age}</div>
                                <div>Represents: ${politician.district}</div>
                            </div>
                        </section>`
                }).join("")
            }
        </article>
    `
}