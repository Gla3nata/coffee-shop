const coffee = {
    state: {
        coffee: [
            {
                id: 0,
                name: 'Solimo Coffee Beans 2kg',
                price: 99.73,
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
                name: 'Presto Primo 0.5kg',
                price: 6.99,
                image: 'coffee-3.jpg'
            },
            {
                id: 3,
                name: 'Solimo Coffee Beans 2kg',
                price: 17.73,
                image: 'coffee-1.jpg'
            },
            {
                id: 4,
                name: 'Espresso Intenso Coffee Beans 1kg',
                price: 35.99,
                image: 'coffee-2.jpg'
            },
            {
                id: 5,
                name: 'Barista Espresso Coffee Beans 1kg',
                price: 8.12,
                image: 'coffee-3.jpg'
            }
        ]
    },
    getters: {
        getCoffee(state) {
            return state.coffee
        },
        getProductById(state) {
            return (id) => {
                return state.coffee.find((card) => card.id === +id)
            }

        },
    }
}


export default coffee