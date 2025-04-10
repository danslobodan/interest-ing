'use client';

import { calculateInterestPerMonth } from '@/logic/calculator';
import { useState } from 'react';

export default function Home() {
    var [returnPerMonth, setReturnPerMonth] = useState<number[]>([]);
    var [returnPerYear, setReturnPerYear] = useState<number[]>([]);

    var [investment, setInvestment] = useState('2000');
    var [percent, setPercent] = useState('5');
    var [years, setYears] = useState('10');

    return (
        <main className='p-4'>
            <div className='flex flex-col gap-y-4 max-w-xl'>
                <div className='flex flex-col'>
                    <label htmlFor='investment'>Monthly Investment</label>
                    <input
                        className='h-8 text-black px-2'
                        value={investment}
                        onChange={({ target }) => setInvestment(target.value)}
                        name='investment'
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='percent'>Yearly Return Percent</label>
                    <input
                        className='h-8 text-black px-2'
                        value={percent}
                        onChange={({ target }) => setPercent(target.value)}
                        name='percent'
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='years'>Years in the Market</label>
                    <input
                        className='h-8 text-black px-2'
                        value={years}
                        onChange={({ target }) => setYears(target.value)}
                        name='years'
                    />
                </div>
                <button
                    className='bg-blue-500 font-bold py-2 px-4 rounded'
                    onClick={() => {
                        var monthlyInvestment = parseFloat(investment);
                        var yearlyPercentReturn = parseFloat(percent);
                        var yearsInTheMarket = parseFloat(years);
                        var inputs = {
                            monthlyInvestment,
                            yearlyPercentReturn,
                            yearsInTheMarket,
                        };
                        setReturnPerMonth(calculateInterestPerMonth(inputs));
                    }}
                >
                    Calculate
                </button>
            </div>
            {returnPerMonth.length > 0 && (
                <>
                    <div className='mt-10 mb-2'>Per Month</div>
                    <div className='grid grid-cols-12'>
                        {returnPerMonth.map((r, i) => (
                            <div key={i}>
                                {(i % 12) + 1}. {r.toFixed(0)}
                            </div>
                        ))}
                    </div>
                    <div className='mt-2'>
                        Total invested:{' '}
                        {(
                            parseFloat(years) *
                            12 *
                            parseFloat(investment)
                        ).toFixed(0)}
                    </div>
                </>
            )}
        </main>
    );
}
