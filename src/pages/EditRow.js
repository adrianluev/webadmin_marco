import React from 'react'

import './editRow.css'


const EditRow = ({cita, handleCancelClick, handleSaveClick, editCitaData, handleEditFormChange}) => {
    return (
        <tr>
            <td>
                <input type="text" required="required" placeholder="Enter username" name="usuario" value={editCitaData.usuario} onChange={handleEditFormChange} />
            </td>
            <td>
                <input type="text" required="required" placeholder="Enter Date" name="fecha" onChange={handleEditFormChange} value={editCitaData.fecha}/>
            </td>
            <td>
                <input type="text" required="required" placeholder="Enter Hour" name="hora" onChange={handleEditFormChange} value={editCitaData.hora}/>
            </td>
            <td>
                <input type="number" required="required" placeholder="Enter Turn" name="turno" onChange={handleEditFormChange} value={editCitaData.turno}/>
            </td>
            <td>
                <input type="number" required="required" placeholder="Enter Numero de Personas" name="n_personas" onChange={handleEditFormChange} value={editCitaData.n_personas}/>
            </td>
            <td className="acciones">
                <input type="button" value="Save" className="edit" onClick={(event) => handleSaveClick(event)}/>
                
                <input type="button" value="Cancel" onClick={(event) => handleCancelClick(event)}/>
            </td>
        </tr>
    )
}

export default EditRow
