import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Topseller from '../topseller';
import nail300 from '../../Picture/nail300.png'

function Calendarbook() {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState();
    const [people, setPeople] = useState(1);

    const handleTime = event => setTime(event.target.value);
    const handlePeople = event => setPeople(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
    }

    const now = new Date();

    return (
        <div className="d-flex">
            <div className="row align-items-end" style={{ marginInline: "15px" }} >
                <img src={nail300} style={{ width: "120%" }}
                    alt="nail" />
            </div>

            <div className="container">
                <h1 className="text-center text-header">Đặt Lịch</h1>
                <form id="calendar-all" onSubmit={handleSubmit} className="d-flex justify-content-center" >
                    <div>
                        <label>Anh/chị đi ngày nào?</label>
                        <Calendar
                            onChange={setDate}
                            value={date}
                            minDate={now}
                            maxDate={new Date(2021, 11, 31)}
                            required
                        />
                    </div>
                    <div id="calendar-setting">
                        <label>Khung giờ anh chị có thể đến?</label>
                        <select onChange={handleTime} className="form-select" required>
                            <option value="">Chọn giờ...</option>
                            {now.getHours() < 9 ? <option value="9h - 11h">9h - 11h</option> : <option value="9h - 11h" disabled>9h - 11h</option>}
                            {now.getHours() < 12 ? <option value="12h - 14h">12h - 14h</option> : <option value="12h - 14h" disabled>12h - 14h</option>}
                            {now.getHours() < 15 ? <option value="15h - 17h">15h - 17h</option> : <option value="15h - 17h" disabled>15h - 17h</option>}
                            {now.getHours() < 19 ? <option value="19h - 21h">19h - 21h</option> : <option value="19h - 21h" disabled>19h - 21h</option>}
                        </select>

                        <label>Anh/chị đi cùng mấy người?</label>
                        <select onChange={handlePeople} className="form-select">
                            <option value="1">Đi một mình ạ</option>
                            <option value="2">Đi hai mình</option>
                            <option value="3">Bộ ba</option>
                            <option value="4">Nguyên team đi vào hết</option>
                        </select>

                        <label>Xác nhận</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Thời gian</span>
                            <input type="text" className="form-control" value={`${time} ngày ${date.getDate()}/${date.getMonth() + 1} `} disabled />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Số người</span>
                            <input type="text" className="form-control" value={`${people === "4" ? "Hơn 3" : people} người`} disabled />
                        </div>

                        <div className="text-center" style={{ marginBottom: "20px" }}>
                            <button style={{ width: "100%" }} type="submit" className="btn btn-danger">Đặt Lịch</button>
                        </div>
                    </div>



                </form>
            </div>

            <Topseller />
        </div>
    )
}

export default Calendarbook;