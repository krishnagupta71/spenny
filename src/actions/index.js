import { CHANGE_MONTH, FETCH_DATA } from './actionTypes'

export const changeMonth = (monthIndex) => ({
    type: CHANGE_MONTH,
    index: monthIndex
})
export const fetchData = () => ({
    type: FETCH_DATA
})
export const setData = (response) => ({
    type: SET_DATA,
    response: response
})

