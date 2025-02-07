import { Sales } from "./Sales.js"
import { getEntrees } from "./Entrees.js"
import { getVegetables } from "./Vegetables.js"
import { getSides } from "./SideDishes.js"

export const FoodTruck = async () => {
    const entrees = await getEntrees()
    const salesHTML = await Sales()
    const vegetablesHTML = await getVegetables()
    const sidesHTML = await getSides()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <section id="choices">
            <article class="options">
                <h2>Base Dish</h2>
                ${entrees}
            </article>

            <article class="options">
                <h2>Vegetable</h2>
                ${vegetablesHTML}
            </article>

            <article class="options">
                <h2>Sides</h2>
                ${sidesHTML}
            </article>
        </section>

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
