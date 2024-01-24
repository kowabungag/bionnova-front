import {findObjectById} from "./findObjectById";
import {checkBuying} from "./checkBuying";

export const createProgramElement = (globalPrograms, userPrograms, search) => {
    let currentObj = findObjectById(globalPrograms, search)
    let isAcquired = checkBuying(userPrograms, search)
    if(currentObj){
        return {...currentObj, isAcquired}
    }
}