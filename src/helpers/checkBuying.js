export const checkBuying = (programs, search) => {
    return Boolean(programs?.find(program => program.id === search))
}