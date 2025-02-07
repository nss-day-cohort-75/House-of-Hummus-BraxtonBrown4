import { setVegetableID } from "./TransientState.js"

export const getVegetables = async () => {
    const response = await fetch('http://localhost:8088/vegetables')
    const vegetables = await response.json()

    const HTML = vegetables.map(vegetable => {
        return `<div><input type="radio" name="vegetable" id="${vegetable.id}" >${vegetable.type}</input></div>`
    }).join('')

    return HTML
}

document.addEventListener(
    'click',
    (clickEvent) => {
        const {name, id} = clickEvent.target

        if ( name === 'vegetable'){
            setVegetableID(id)
        }
    }
)
