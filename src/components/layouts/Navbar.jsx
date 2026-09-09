import { useEffect, useState } from "react";
import { Loader, Sun, Moon } from 'lucide-react';
const Navbar = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");

        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    return (

        <div className='w-full h-14 flex fixed z-50 bg-background/60 backdrop-blur-md border-b border-border'>

            <div className=" w-1/2 px-6 flex items-center justify-start ">
                <h1 className='text-text text-2xl font-bold'>Watch</h1>
                <h1 className=' text-primary text-2xl font-bold'>Folio</h1>
            </div>

            <div className=" w-1/2  px-6 flex items-center justify-end gap-2 ">
                <button className='rounded-full px-2 py-1 bg-secondary text-text hover:bg-secondary-hover cursor-pointer'><Loader /></button>
                <button className='rounded-full px-2 py-1 bg-secondary text-text hover:bg-secondary-hover cursor-pointer'><Loader /></button>
                <button
                    onClick={toggleTheme}
                    className="rounded-full px-1 py-1 h-8 w-16 bg-secondary text-text hover:bg-secondary-hover cursor-pointer"
                >
                    {theme === "light" ? <Sun className="float-left bg-text text-background border-2 border-text rounded-full " strokeWidth={1.5} />
                        : <Moon className="float-right bg-text text-background border-2 border-text rounded-full " strokeWidth={1.5} />}
                </button>


            </div>
        </div>

    );
};

export default Navbar;