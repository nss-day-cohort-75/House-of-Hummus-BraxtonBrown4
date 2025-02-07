export const Sales = async () => {
    const response = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side")
    const sales = await response.json()

    const salesHTML = await sales.map(sale => {

        const price = sale.entree.price + sale.vegetable.price + sale.side.price

        const formatedPrice = price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })

        return `<p>Reciept #${sale.id} = ${formatedPrice}</p>`
    }).join('')

    return salesHTML
}
