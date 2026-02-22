const coffee = {
    state: {
        coffee: [],
        searchValue: '',
        sortValue:''
    },
    mutations: {
        setCoffeData(state, data){
            state.coffee = data
        },
        setSearchValue(state, value){
            state.searchValue = value
        },
        setSortValue(state, value){
            console.log(value)
            state.sortValue = value
        }
    },
    actions: {
        setCoffeData ({commit}, data) {
           commit('setCoffeData', data)
        },
        setSearchValue({commit}, value) {
           commit('setSearchValue', value)
        },
        setSortValue({commit}, value) {
           commit('setSortValue', value)
        },
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
        getSearchValue(state) {
            return state.searchValue
        }
    }
}


export default coffee