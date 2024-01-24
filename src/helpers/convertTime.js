export const convertExactTime = (time) => {
    // Split the time by colon
    const parts = time.split(':');
    // Return the first two parts (hours and minutes) joined by a colon
    return parts.slice(0, 2).join(':');
}

export const convertDateFormat = (inputDate) => {
    if (typeof inputDate !== 'string') {
        return null; // Non-string input
    }
    const parts = inputDate.split('-');
    if (parts.length !== 3) {
        return null; // Invalid input
    }
    return `${parts[2]}.${parts[1]}.${parts[0]}`;
};