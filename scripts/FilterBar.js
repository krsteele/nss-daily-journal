import { useMoods } from "./MoodProvider.js"
import { MoodFilter } from "./MoodFilter.js"

const contentTarget = document.querySelector(".entries__filters")

export const FilterBar = () => {
    const moods = useMoods()
    render(moods)
        
    }

const render = moodArray => {
    contentTarget.innerHTML = `
        ${MoodFilter(moodArray)}
        `
}
