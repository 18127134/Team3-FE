import React, { Fragment } from 'react';

import useCalendar from './use_calendar';

const Calendar = () => {
    const { calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth } = useCalendar();

    const dateClickHandler = date => {
        console.log(date);
    }

    return (
        <Fragment>
            <div className = "d-flex flex-row justify-content-center">
                <button className="button" onClick={getPrevMonth}>Prev</button>
                <p>{`${monthNames[selectedDate.getMonth()]} - ${selectedDate.getFullYear()}`}</p>
                <button className="button" onClick={getNextMonth}>Next</button>
            </div>

            <table className="table table-danger">
                <thead>
                    <tr>
                        {daysShort.map(day => (
                            <th key={day}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.values(calendarRows).map(cols => {
                            return <tr key={cols[0].date}>
                                {cols.map(col => (
                                    col.date === todayFormatted
                                        ? <td key={col.date} className={`${col.classes} today`} onClick={() => dateClickHandler(col.date)}>
                                            {col.value}
                                        </td>
                                        : <td key={col.date} className={col.classes} onClick={() => dateClickHandler(col.date)}>{col.value}</td>
                                ))}
                            </tr>
                        })
                    }
                </tbody>
            </table>


        </Fragment>
    );
}

export default Calendar;