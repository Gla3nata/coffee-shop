const coffee = {
    state: {
        coffee: [
        ]
    },
    mutations: {
        setCoffeData(state, data){
            state.coffee = data
        }
    },
    actions: {
        setCoffeData ({commit}, data) {
           commit('setCoffeData', data)
        }
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