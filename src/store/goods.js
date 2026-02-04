const goods = {
    state: {
        goods: [
            {
                id: 0,
                name: 'Solimo Coffee Beans 2kg',
                price: 10.73,
                image: 'coffee-1.jpg'
            },
            {
                id: 1,
                name: 'Presto Coffee Beans 1kg',
                price: 15.99,
                image: 'coffee-2.jpg'
            },
            {
                id: 2,
                name: 'AROMISTICO Coffee 1kg',
                price: 6.99,
                image: 'coffee-3.jpg'
            },
            {
                id: 3,
                name: 'Espresso Intenso Instant Coffee 0,5kg',
                price: 17.73,
                image: 'coffee-1.jpg'
            },
            {
                id: 4,
                name: 'House Espresso 2kg',
                price: 35.99,
                image: 'coffee-2.jpg'
            },
            {
                id: 5,
                name: 'Espresso Intenso 3kg',
                price: 8.12,
                image: 'coffee-3.jpg'
            }
        ]
    },
    getters: {
        getGoods(state) {
            return state.goods
        },
    }
}


export default goods