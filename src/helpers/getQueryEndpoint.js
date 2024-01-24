const queryString = window.location.pathname;
// const paymentID = queryString.replace(/[^0-9]/g, "");;
const endpoint = queryString.replace(/[^a-zA-Z0-9 ]/g, "");