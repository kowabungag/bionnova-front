export const checkLanguage = (language) => {
    try {
        const stringifiedLanguage = localStorage.getItem("language") || '""';
        return stringifiedLanguage === language;
    } catch (error) {
        console.error("Failed to check language:", error);
        return false; // Return false or some default value
    }
}