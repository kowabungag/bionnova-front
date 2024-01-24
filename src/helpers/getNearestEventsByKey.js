import moment from "moment";

/**
 * This function adds two numbers.
 * @param {array} data - Data array
 * @param {string} key - The key to sort
 * @param {number} numberOfEvents - number of elements to be returned
 * @returns {array}  - The sum of a and b.
 */



const sortByKeyAfterToday = (data, key) => {
    const today = moment().startOf('day');
    return [...data]  // create a shallow copy
        .filter(event => moment(event[key]).isSameOrAfter(today))
        .sort((a, b) => moment(a[key]).diff(moment(b[key])));
}

export const removeDuplicates = (data) => {
    return  data.filter((obj, index, self) =>
            index === self.findIndex((el) => (
                el.id === obj.id
            ))
    );
}

const sortByKey = (data, key) => {
    return [...data]  // create a shallow copy
        .sort((a, b) => moment(a[key]).diff(moment(b[key])));
}

export const getNearestEventsByKey = (data, key, numberOfEvents = 2) =>
    sortByKeyAfterToday(data, key).slice(0, numberOfEvents);

export const sortProgramWebinars = (programs,webinars, key,withAttributes) => {

    let arr = [];
    webinars.forEach(webinar => arr.push(webinar))

    programs.forEach((program) => {
        program.webbinarrs.data.forEach(webinar => {


            if (withAttributes){
                const id = webinar.id
                arr.push({id,isAcquired:true,...webinar.attributes})
            }else{
                arr.push({...webinar, isAcquired: true})
            }
        })


    })


    const arrWithoutDuplicates = removeDuplicates(arr, 'id')
return sortByKey(arrWithoutDuplicates,'date')
}

export const getAllNearestEvents = sortByKeyAfterToday;

export const getAllEventsWithSort = sortByKey;