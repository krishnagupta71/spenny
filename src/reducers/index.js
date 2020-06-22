let initialState = {
    selectedMonth: 0,
    apiData: {
        month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
        spending: [
          {
            "Shopping": "279",
            "date": "1592227512050"
          },
          {
            "Bills": "122",
            "date": "1592227512050"
          },
          {
            "Rent": "1600",
            "date": "1592227512050"
          }
        ],
        cardBalance: 6837
      }
}

const reducer = (state = initialState, action) => {
    let newState
    switch(action.type){
        case 'CHANGE_MONTH':
            newState = Object.assign({}, state, { selectedMonth: action.index })
            return newState
        case 'SET_DATA':
            newState = Object.assign({}, state, { apiData: action.response })
            return newState
        default:
            return state
    }
}
export default reducer