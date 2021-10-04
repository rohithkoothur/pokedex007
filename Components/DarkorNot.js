import {useEffect, useState} from "react";



const DarkorNot = ()=>{

    const [darkMode, setDarkMode] = useState(false);
    return(
        <div className="darkornot">
            {darkMode? <span>🔆</span> :<span>🌙</span>}
            <label className="switch">
                <input type="checkbox"  onChange={() => {
                    setDarkMode(!darkMode);

                }
                }/>
                <span className="slider round"></span>
            </label></div>
    )
}
export default DarkorNot