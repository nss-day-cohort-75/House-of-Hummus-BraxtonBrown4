import { setEntreeID } from "./TransientState.js"

export const getEntrees = async () => {
    const response = await fetch('http://localhost:8088/entrees')
    const entrees = await response.json()

    const HTML = entrees.map(entree => {
        return `<div><input type="radio" name="entree" id="${entree.id}" >${entree.name}</input></div>`
    }).join('')

    return HTML
}

document.addEventListener(
    'click',
    (clickEvent) => {
        const {name, id} = clickEvent.target

        if ( name === 'entree'){
            setEntreeID(id)
        }
    }
)