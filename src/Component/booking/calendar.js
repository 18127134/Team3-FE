import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calendarbook() {

    const [value, onChange] = useState(new Date());

    let today = new Date();

    useEffect(() => {
        console.log(value);
    }, [value])
    return (
        <div>
            <h1 className="text-center text-header">Đặt Lịch</h1>
            <div>
                <Calendar className="center-element"
                    onChange={onChange}
                    value={value}
                    minDate={today}
                />
            </div>
            <p></p>
        </div>

    )
}

export default Calendarbook;