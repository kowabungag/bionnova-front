export const findObjectById = (programs, search) => {

    return programs.find(program => program.id === search)
}