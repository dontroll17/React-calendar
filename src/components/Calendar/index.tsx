import React, { useState } from 'react'
import './index.css';

function Calendar() {

    const props = {
        month: ["January","February","March","April","May","June","July","August","September","October","November","December"],
        day: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]
    }

    const data = [
        [undefined, undefined, undefined, undefined, undefined, undefined, new Date()],
        [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
        [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
        [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
        [new Date(), new Date(), undefined, undefined, undefined, undefined, undefined]
    ]

    const [ month, setMonth ] = useState(props.month[0]);
    const [ dateState, setDate ] = useState(new Date());

    const handlePrevButtonClick = () => {
        const date = new Date(dateState.getFullYear(), dateState.getMonth() - 1);
        setDate(date);
    }

    const handleNextButtonClick = () => {
        const date = new Date(dateState.getFullYear(), dateState.getMonth() + 1);
        setDate(date);
    }

    // const handleSelectChange = () => {}

    const handleDayClick = (date: any) => {
        console.log(date)
    }

    return (
        <div className="calendar">
            <header>
                <button onClick={() => handlePrevButtonClick()}>{'<'}</button>

                <select>
                    {props.month.map((name, idx) => 
                        <option key={name} value={idx}>{name}</option>
                    )}
                </select>

                <select>
                    <option value="year">{dateState.getFullYear()}</option>
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
                    {data.map((week, idx) =>
                        <tr className="week" key={idx}>
                            {week.map((date, idx) => date ?
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