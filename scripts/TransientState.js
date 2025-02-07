const transientState = {
    entreeId: 0,
    vegetableId: 0,
    sideId: 0,
}

export const setEntreeID = (choice) => {
    transientState.entreeId = parseInt(choice)
}

export const setVegetableID = (choice) => {
    transientState.vegetableId = parseInt(choice)
}

export const setSideID = (choice) => {
    transientState.sideId = parseInt(choice)
}

const purchase = async () => {
    const unSelectedOptions = Object.values(transientState).every(value => value === 0)

    if (unSelectedOptions) {
        window.alert(`
            Oops! Seems you have forgotten to select an option.
            Please review the options and make sure you have
            selected something from each catagory`)
    } else {
        const postOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transientState)
        }
        const response = await fetch('http://localhost:8088/purchases', postOptions)
    
        const orderEvent = new CustomEvent('HummusPurchased')
        document.dispatchEvent(orderEvent)
    }
}


document.addEventListener(
    'click',
    (clickEvent) => {
        const clickedElement = clickEvent.target.id

        if (clickedElement === 'purchase') {
            purchase()
        }
    }
)