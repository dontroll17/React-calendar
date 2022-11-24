import React, { useState } from 'react'
import './index.css';
import { getMonthData } from './handlers';

function Calendar() {

    const props = {
        month: ["January","February","March","April","May","June","July","August","September","October","November","December"],
        day: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]
    }

    const [ monthState, setMonth ] = useState(props.month[0]);
    const [ dateState, setDate ] = useState(new Date());

    let year = dateState.getFullYear();
    let month = dateState.getMonth();
    const daysInMonth = getMonthData(year, month)

    const handlePrevButtonClick = () => {
        const date = new Date(year, month - 1);
        setDate(date);
    }

    const handleNextButtonClick = () => {
        const date = new Date(year, month + 1);
        setDate(date);
    }

    const handleSelectChange = () => {
        const date = dateState;

        setDate(date);
        console.log(dateState)
    }

    const handleDayClick = (date: Date) => {
        console.log(date)
    }

    return (
        <div className="calendar">
            <header>
                <button onClick={() => handlePrevButtonClick()}>{'<'}</button>

                <select
                    onClick={() => handleSelectChange()}
                >
                    {/* {props.month.map((name, idx) => 
                        <option key={name} value={idx}>{name}</option>
                    )} */}
                    <option value="month">{props.month[month]}</option>
                </select>

                <select>
                    <option value="year">{year}</option>
                </select>
                
                <button onClick={() => handleNextButtonClick()}>{'>'}</button>
            </header>

            <table>
                <thead>
                    <tr>
                        {props.day.map(name => 
                            <th key={name}>{name}</th>    
                        )}
                    </tr>
                </thead>

                <tbody>
                    {daysInMonth.map((week, idx) =>
                        <tr className="week" key={idx}>
                            {week.map((date: any, idx: any) => date ?
                                <td 
                                    className='day' 
                                    key={idx}
                                    onClick={() => handleDayClick(date)}
                                    >
                                        {date.getDate()}
                                </td>
                                :
                                <td key={idx}></td>
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Calendar