import { setSideID } from "./TransientState.js"

export const getSides = async () => {
    const response = await fetch('http://localhost:8088/sides')
    const sides = await response.json()

    const HTML = sides.map(side => {
        return `<div><input type="radio" name="side" id="${side.id}" >${side.title}</input></div>`
    }).join('')

    return HTML
}
document.addEventListener(
    'click',
    (clickEvent) => {
        const {name, id} = clickEvent.target

        if ( name === 'side'){
            setSideID(id)
        }
    }
)
