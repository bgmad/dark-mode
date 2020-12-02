import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('isDarkMode', false);
    return [darkMode, setDarkMode];
}

export default useDarkMode;