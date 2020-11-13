import { useMoods } from "./MoodProvider.js"
import { MoodFilter } from "./MoodFilter.js"

const contentTarget = document.querySelector(".entries__filters")
const eventHub = document.querySelector("#container")

export const FilterBar = () => {
    const moods = useMoods()
    render(moods)
        
    }

const render = moodArray => {
    contentTarget.innerHTML = `
        ${MoodFilter(moodArray)}
        `
}

eventHub.addEventListener("change", event => {
    // console.log("I hear a thing")
    if (event.target.name === "moodFilter") {
        // console.log("you have chosen a mood")
        // console.log("mood chosen event:", event.target.value)
        const moodChosen = parseInt(event.target.value)
        const customEvent = new CustomEvent("moodFilterChosen", {
            detail: {
                mood: moodChosen
    }
})

console.log(customEvent)
eventHub.dispatchEvent(customEvent)
    }

})