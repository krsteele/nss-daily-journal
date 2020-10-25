import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector(".entryContainer")

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
        <section class="entryList">
            <h2>Journal Entries</h2>
            ${journalHTMLRepresentations}
        </section>`
    }
}
