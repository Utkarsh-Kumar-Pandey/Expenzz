import { Separator } from '@/components/ui/separator';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react';

const WizardPage = async () => {
    const user = await currentUser();
    if (!user) {
        redirect("/sign-in");
    }
    // this line missed
    const firstName = user.firstName || "NULL";

    return (
        <div className='bg-[#0D1B2A] text-white h-screen flex justify-center items-center'>
            <div className='text-center'>
                <h1 className='text-4xl p-5 text-[#F0E3E3]'>Welcome, {firstName}!</h1>
                <Separator className='my-4' />
                <form action="/dashboard" method="GET" className='space-y-4'>
                    <div>
                        <label htmlFor="currency" className='block text-lg'>Choose a currency:</label>
                        <select id="currency" name="currencyChosen" className='text-black'>
                            <option value="$ USD">USD - United States Dollar</option>
                            <option value="₹ INR">INR - Indian Rupee</option>
                            <option value="€ EUR">EUR - Euro</option>
                            <option value="¥ JPY">JPY - Japanese Yen</option>
                            <option value="A$ AUD">AUD - Australian Dollar</option>
                            <option value="C$ CAD">CAD - Canadian Dollar</option>
                        </select>
                    </div>
                    <input type="hidden" name="name" value={firstName} />
                    <button type="submit" className='w-full text-lg bg-[#3d3b46] text-white hover:bg-[#9494a8] hover:text-black transition duration-300'>
                        Click To Continue...
                    </button>
                </form>
            </div>
        </div>
    );
}

export default WizardPage;
