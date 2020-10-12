/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "10/7/2020",
        concept: "follow the bouncing ball",
        entry: "Jisie walked us through sorting the fish we created in the Martin's Aquarium excercise using a data provider module and functions to sort and then create html for our fish.",
        mood: "completely confused"
    },
    {
        id: 2,
        date: "10/8/2020",
        concept: "testing our code",
        entry: "Madi did a great walkthrough of how to test our code using bebugger, console.log(), and breakpoint.",
        mood: "happy as a hippo"
    },
    {
        id: 3,
        date: "10/9/2020",
        concept: "git, importing functions in JS, remainder operators",
        entry: "Worked on creating a data provider array module and the functions to sort that array into new arrays and create html representations of the objects in those arrays.",
        mood: "excited as a dog"
    },
    {
        id: 4,
        date: "10/12/2020",
        concept: "dependency graph, testing, pseudo coding",
        entry: "Madi walked us through making a dependency graph and building single-responsibility modules. It was super helpful. I still feel behind, though.",
        mood: "sad as a chicken"
    }

]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
            )
            return sortedByDate
}