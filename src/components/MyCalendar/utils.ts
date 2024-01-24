export const formatPriceWithCurrency =  (price:number, currency: string = "USD") => {
    return new Intl.NumberFormat('de-DE', {
        minimumFractionDigits: 0, // Minimum number of decimal places
        maximumFractionDigits: 2,
        style: 'currency',
        currency: currency,
    }).format(price)
}