import NavBar from './NavBar/NavBar'
import {useEffect, useState} from "react";
export default function Layout({children}) {
    const [darkMode, setDarkMode] = useState();

    useEffect(() => {
        setDarkMode(localStorage.getItem('isDarkMode') === 'true');
    }, []);

    console.log(darkMode);

    return (
        <>
            <NavBar
                darkMode={darkMode}
                setDarkMode={(isDarkMode) => {
                    setDarkMode(isDarkMode);
                    localStorage.setItem('isDarkMode', isDarkMode)
                }}
            />
            <main className={darkMode ? 'dark' : 'light'}>{children}</main>
       </>
    )
}