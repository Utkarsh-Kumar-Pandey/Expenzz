import React from 'react';
import { UserButton } from "@clerk/nextjs";
import Link from 'next/link';
import { ThemeSwitcherBtn } from './ThemeSwitcherBtn';

const Navbar = () => {
    return (
        <>
            <DesktopNavbar />
        </>
    );
};

const DesktopNavbar = () => {
    return (
        <div className='flex md:block'>
            <nav className='bg-gray-800 rounded w-full container mx-auto flex items-center justify-between p-4'>
                <div className="text-2xl font-bold text-white">
                    Expense Tracker
                </div>
                <div className='flex space-x-4 items-center'>
                    <Link href="/dashboard">
                        <button className='px-4 py-2 text-sm font-medium text-white bg-black rounded-lg shadow hover:bg-gray-100 hover:text-black transition'>
                            Dashboard
                        </button>
                    </Link>
                    <Link href="/Transaction">
                        <button className='px-4 py-2 text-sm font-medium text-white bg-black rounded-lg shadow hover:bg-gray-100 hover:text-black  hover:border-blue-200-blue-50 transition'>
                            Transactions
                        </button>
                    </Link>
                    <Link href="/Manage">
                        <button className='px-4 py-2 text-sm font-medium text-white bg-black rounded-lg shadow hover:bg-gray-100 hover:text-black transition'>
                            Manage
                        </button>
                    </Link>

                    <UserButton afterSignOutUrl='/sign-in' />

                    <ThemeSwitcherBtn />
                </div>
            </nav>
        </div>

    );
};

export default Navbar;

