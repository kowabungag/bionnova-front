export const checkWindowExist = () => {
    if (typeof window === 'undefined') {
        return {}; // Return default value during server-side rendering
    }
}