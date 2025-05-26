/* eslint-disable jsx-a11y/anchor-is-valid */

import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleLinkClick = () => {
        setToggleMenu(false);
    };

    return (
        <header className="flex justify-between px-5 py-5 bg-primary">
            <a className="font-bold text-black" href="#">SE Jayavandhana</a>

            <nav className="hidden md:block">
                <ul className="flex text-white">
                    <li><a href="/">Home</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#resume">Resume</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
            </nav>

            {toggleMenu && (
                <nav className="block md:hidden absolute top-16 left-0 w-full bg-gray-700">
                    <ul className="flex flex-col text-white mobile-nav divide-y divide-white">
                        <li><a href="/" onClick={handleLinkClick}>Home</a></li>
                        <li><a href="/#about" onClick={handleLinkClick}>About</a></li>
                        <li><a href="/#resume" onClick={handleLinkClick}>Resume</a></li>
                        <li><a href="/#contact" onClick={handleLinkClick}>Contact</a></li>
                    </ul>
                </nav>
            )}

            <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden z-10'>
                <Bars3Icon className='text-white h-5' />
            </button>
        </header>
    )
}
