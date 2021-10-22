import { width } from 'dom-helpers';
import React  from 'react';

import './readRow.css';


export const ReadRow = ({cita, handleEditClick, handleDeleteClick, bFecha}) => {
    // console.log(cita._id);

    if (parseInt(cita.fecha.substr(8)) + "/" + parseInt(cita.fecha.substr(5)) + "/" + parseInt(cita.fecha.substr(0)) == bFecha.getDate() + "/" + parseInt(bFecha.getMonth() + 1) + "/" + bFecha.getFullYear()){
    return (
        <tr>
            <td>{cita.usuario}</td>
            <td>{parseInt(cita.fecha.substr(5)) + "/" +parseInt(cita.fecha.substr(8))+"/"+parseInt(cita.fecha.substr(0))}</td>
            <td>{cita.hora}</td>
            <td>{cita.turno}</td>
            <td>{cita.n_personas}</td>
            <td>
                <input type="button" value="Edit" width="100%" onClick={(event) => handleEditClick(event, cita)} className="edit"/>
                <input type="button" value="Delete" width="100%" onClick={() => handleDeleteClick(cita)}/>
            </td>
        </tr>
    )}
    else{
        return(null)
    }
}

export default ReadRow