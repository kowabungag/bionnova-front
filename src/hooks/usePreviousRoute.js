import { useEffect, useState } from 'react';

export const usePreviousRoute = () => {
    const [currentPath, setCurrentPath] = useState(null);
    const [previousSearch, setPreviousSearch] = useState(null);
    const [previousPath, setPreviousPath] = useState(null);

    useEffect(() => {
        const newPathname = location.pathname;
        if (newPathname !== currentPath) {
            setPreviousSearch(location.search);
            setPreviousPath(currentPath);
            setCurrentPath(newPathname);
        }
    }, [currentPath]);

    return previousPath;
};