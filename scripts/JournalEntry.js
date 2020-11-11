/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <div id="entry--${entry.id}" class="entryCard">
            <h3>${entry.concept}</h3>
            <p>${entry.date}</p>
            <p>${entry.mood.label}</p>
            <p>${entry.entry}</p>
            <button id="deleteEntry--${entry.id}">Delete</button>
        </div>
    `
}