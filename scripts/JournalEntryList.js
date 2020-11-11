import { deleteEntry, getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector(".entryContainer")

// reference to eventHub
const eventHub = document.querySelector("#container")

// listen for state change event, then refresh entry list
eventHub.addEventListener("entryStateChanged", () => EntryListComponent())

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEntry--")) {
        // console.log("I hear you want to delete an entry?")
        const [prefix, id] = clickEvent.target.id.split("--")
        // console.log("prefix:", prefix, "id:", id)
        deleteEntry(id)
    }
})

export const EntryListComponent = () => {
    // use journal entry data from the data provider component
    getEntries()
    .then(() => {
        const entries = useJournalEntries()
        renderEntries(entries) 
    })
}
    
const renderEntries = (array) => {
    let journalHTMLRepresentations = ""

    for (const obj of array) {
        journalHTMLRepresentations += JournalEntryComponent(obj)
        // console.log(journalHTMLRepresentations)
        
        contentTarget.innerHTML = `
        <h2>Journal Entries</h2>
        <section class="entryList">
            ${journalHTMLRepresentations}
        </section>`
    }
}
