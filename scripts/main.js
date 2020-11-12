import { FilterBar } from "./FilterBar.js"
import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { EntryListComponent } from "./JournalEntryList.js"
import { JournalForm } from "./JournalForm.js"
import { getMoods } from "./MoodProvider.js"

console.log("Welcome to the main module")

// useJournalEntries()

EntryListComponent()
getEntries()

getMoods()
    .then(() => {
        JournalForm()
        FilterBar()
    }) 
   