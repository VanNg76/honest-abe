let pacs = []

export const getPacs = () => {
    return fetch("http://localhost:8088/pacs")
        .then(response => response.json())
        .then((pacData) => {
            pacs = pacData
        })
}

export const usePacs = () => {
    return pacs.slice()
}
