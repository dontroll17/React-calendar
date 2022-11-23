import React from 'react'
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

    return (
        <div className="calendar">
            <header>
                <button>{'<'}</button>

                <select>
                    {props.month.map((name, idx) => 
                        <option key={name} value={idx}>{name}</option>
                    )}
                </select>

                <select>
                    <option value="2023">2023</option>
                </select>
                
                <button>{'>'}</button>
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
                                <td className='day'>{date.getDate()}</td>
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