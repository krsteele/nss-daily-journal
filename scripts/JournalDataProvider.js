/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
let journal = []

const eventHub = document.querySelector("#container")

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getEntries = () => {
    return fetch("http://localhost:8088/entries?_expand=mood")
        .then(response => response.json())
        .then(entries => {
            // console.log(entries)
            journal = entries
        })
}

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
            )
            return sortedByDate
}

export const saveEntry = (object) => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify(object)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}

export const deleteEntry = entryId => {
    return fetch(`http://localhost:8088/entries/${entryId}`, {
        method: "DELETE"
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}

const dispatchStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("entryStateChanged")
    eventHub.dispatchEvent(entryStateChangedEvent)
}
