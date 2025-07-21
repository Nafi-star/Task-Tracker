import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <h1 className="text-2xl font-bold">Task Tracker</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">Tasks</a></li>
                    <li><a href="#" className="hover:underline">About</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;