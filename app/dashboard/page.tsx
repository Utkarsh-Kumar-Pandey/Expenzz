"use client";
import { Button } from '@/components/ui/button';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
interface Entry {
    type: string;
    item: string;
    category: string;
    amount: number;
    nowtot: number;
}

const Dashboard = () => {
    const searchParams = useSearchParams();
    const currencyChosen = searchParams.get('currencyChosen');
    const [IncomeFormVisible, setIncomeFormVisible] = useState(false);
    const [ExpenseFormVisible, setExpenseFormVisible] = useState(false);
    const [CurrentTotal, setCurrentTotal] = useState(0);
    const [incomeAmount, setIncomeAmount] = useState('');
    const [incomeItem, setIncomeItem] = useState('');
    const [incomeCategory, setIncomeCategory] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');
    const [expenseItem, setExpenseItem] = useState('');
    const [expenseCategory, setExpenseCategory] = useState('');
    const [entries, setEntries] = useState<Entry[]>([]);

    const handleIncomeToggle = () => {
        setIncomeFormVisible(true);
        setExpenseFormVisible(false);
    };

    const handleExpenseToggle = () => {
        setExpenseFormVisible(true);
        setIncomeFormVisible(false);
    };

    const handleIncomeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const inc_amount = parseFloat(incomeAmount);
        if (!isNaN(inc_amount)) {
            const newTotal = CurrentTotal + inc_amount;
            setCurrentTotal(newTotal);
            const newEntry: Entry = {
                type: 'income',
                item: incomeItem,
                category: incomeCategory,
                amount: inc_amount,
                nowtot: newTotal,
            };
            setEntries((prevEntries) => [...prevEntries, newEntry]);
            resetIncomeForm();
        }
    };

    const handleExpenseSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const exp_amount = parseFloat(expenseAmount);
        const newTotal = CurrentTotal - exp_amount;
        if (!isNaN(exp_amount) && newTotal >= 0) {
            setCurrentTotal(newTotal);
            const newEntry: Entry = {
                type: 'expense',
                item: expenseItem,
                category: expenseCategory,
                amount: exp_amount,
                nowtot: newTotal,
            };
            setEntries((prevEntries) => [...prevEntries, newEntry]);
            resetExpenseForm();
        } else {
            alert("Expense can't exceed total available amount");
        }
    };

    const resetIncomeForm = () => {
        setIncomeAmount('');
        setIncomeItem('');
        setIncomeCategory('');
        setIncomeFormVisible(false);
    };

    const resetExpenseForm = () => {
        setExpenseAmount('');
        setExpenseItem('');
        setExpenseCategory('');
        setExpenseFormVisible(false);
    };

    return (
        <>
            <div className='text-black w-full flex justify-between items-start'>
                <div className='text-center p-4 bg-slate-50'>
                    <p className='text-2xl'>Currency selected is: {currencyChosen}</p>
                </div>
                <div className='h-full p-2 text-center gap-2'>
                    <Button type="button" onClick={handleIncomeToggle} className='bg-[#3a6636] mx-3 text-xl'>
                        Add new income
                    </Button>
                    <Button type="button" onClick={handleExpenseToggle} className='bg-[#d35737] text-xl'>
                        Add new expense
                    </Button>
                </div>
            </div>

            <div className='w-screen bg-[#d8e8ec]'>
                <div className='text-3xl p-[4rem] text-center'>
                    <p>Current balance is {currencyChosen}{CurrentTotal.toFixed(2)}</p>
                </div>
            </div>

            <div className=''>
                <table className='w-full border-collapse text-center bg-black text-cyan-200'>
                    <thead>
                        <tr>
                            <th className='border-b p-2'>Item</th>
                            <th className='border-b p-2'>Category</th>
                            <th className='border-b p-2'>Price</th>
                            <th className='border-b p-2'>Total Amount</th>
                        </tr>
                    </thead>
                    <tbody className='text-black text-center'>
                        {entries.slice().reverse().map((entry, index) => (
                            <tr key={index} className={entry.type === 'income' ? 'bg-green-100' : 'bg-red-100'}>
                                <td className='border-b p-2'>{entry.item}</td>
                                <td className='border-b p-2'>{entry.category}</td>
                                <td className='border-b p-2'>{currencyChosen}{entry.amount.toFixed(2)}</td>
                                <td className='border-b p-2'>{currencyChosen}{entry.nowtot.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* For income */}
            {IncomeFormVisible && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
                    <div className='bg-white p-6 rounded shadow-lg w-96'>
                        <form onSubmit={handleIncomeSubmit}>
                            <label>Item</label>
                            <input
                                type='text'
                                value={incomeItem}
                                onChange={(e) => setIncomeItem(e.target.value)}
                                className='mb-2 w-full border border-gray-300 rounded p-2'
                                required
                            />
                            <label>Category</label>
                            <input
                                type='text'
                                value={incomeCategory}
                                onChange={(e) => setIncomeCategory(e.target.value)}
                                className='mb-2 w-full border border-gray-300 rounded p-2'
                                required
                            />
                            <label>Enter the income amount</label>
                            <input
                                type='number'
                                value={incomeAmount}
                                onChange={(e) => setIncomeAmount(e.target.value)}
                                className='mb-2 w-full border border-gray-300 rounded p-2'
                                required
                            />
                            <button type='submit' className='bg-green-500 text-white rounded p-2 mx-2'>Submit</button>
                            <Button type="button" onClick={resetIncomeForm} className='bg-gray-300 text-black rounded p-2'>Cancel</Button>
                        </form>
                    </div>
                </div>
            )}

            {/* For expense */}
            {ExpenseFormVisible && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
                    <div className='bg-white p-6 rounded shadow-lg w-96'>
                        <form onSubmit={handleExpenseSubmit}>
                            <label>Item</label>
                            <input
                                type='text'
                                value={expenseItem}
                                onChange={(e) => setExpenseItem(e.target.value)}
                                className='mb-2 w-full border border-gray-300 rounded p-2'
                                required
                            />
                            <label>Category</label>
                            <input
                                type='text'
                                value={expenseCategory}
                                onChange={(e) => setExpenseCategory(e.target.value)}
                                className='mb-2 w-full border border-gray-300 rounded p-2'
                                required
                            />
                            <label>Enter the expense amount</label>
                            <input
                                type='number'
                                value={expenseAmount}
                                onChange={(e) => setExpenseAmount(e.target.value)}
                                className='mb-2 w-full border border-gray-300 rounded p-2'
                                required
                            />
                            <button type='submit' className='bg-red-500 text-white rounded p-2 mx-2'>Submit</button>
                            <Button type="button" onClick={resetExpenseForm} className='bg-gray-300 text-black rounded p-2'>Cancel</Button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Dashboard;
