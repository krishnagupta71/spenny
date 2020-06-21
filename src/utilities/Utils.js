import moment from 'moment'

export const convertUnixTimeToDateString = (unixTime) => {
    return moment(unixTime / 1000).format("D dddd MMMM")
}

export const getIconBySpendingType = (category) => {

    switch (category.toLowerCase()) {
        case 'shopping':
            return 'shopping-cart'
        case 'bills':
            return 'receipt'
        case 'rent':
            return 'home'
        default:
            return 'shopping-cart'
    }
}