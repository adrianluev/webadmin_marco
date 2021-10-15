
import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


import "./costumers.css"
import { useState } from "react";

const Example = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    );
};

const Costumers = () => {
    
    return (
        <div>
        <div className="date-picker">
            <Example/>
        </div>
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Telefono</th>
                        <th>Email</th>
                        <th>Hora de Visita</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Adrian Luevanos</td>
                        <td>871-123-4567</td>
                        <td>adrianluevanos@hotmail.com</td>
                        <td>9:15 A.M.</td>
                        <td>PLACEHOLDER</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default Costumers
