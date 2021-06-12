import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './user.scss';
import { deleteUser, saveUsersChanges, dragUser, dropUser } from './../../../store/actions';

import ageCalculate from './../../../utils/ageCalculate';

const User = (props) => {
    const [editMode, setEditMode] = useState(false);
    const {name, surname, date, _id} = props.user;
    const [inputValues, setInputValues] = useState({
        inputName: name,
        inputSurname: surname,
        inputDate: date
    });
    const [check, setCheck] = useState(false);
    const [draged, setDraged] = useState(false);
    const [droped, setDroped] = useState(false);

    

    const changeMode = (event) => {
        if (event._reactName ===  "onBlur") {
            event.preventDefault();
            return;
        }
        setEditMode(!editMode);
        let editedUser = {
            _id,
            name: inputValues.inputName,
            surname: inputValues.inputSurname,
            date: inputValues.inputDate
        }
        if(true) {//edit this
            props.saveUsersChanges(editedUser);

        }
    };
    const dateFormating = (date) => {//import from outside file
        return date.split('/').join('-');
    };
    const handleInputChange = ({name, value}) => {
        setInputValues({
            ...inputValues,
            [name]: value
        });
    };
    const checkInput = () => {
        setCheck(!check);
        props.checkUser(_id)
    };
    
    const dragOverHandler = (e) => {
        e.preventDefault();
        if (e.currentTarget.className.includes('user-row')) {
            // e.currentTarget.style.backgroundColor = "green";
            e.currentTarget.className = `${e.currentTarget.className} user-row_ondrag`;
        }
    }
    const dragStartHandler = (e, id) => {
        setDraged(true);
        props.dragUser(props.user);
    };
    const dragLeaveHnadler = (e) => {
        e.currentTarget.className="user-row";
        setDraged(false);
    };
    const dragEndHandler = (e) => {
        e.preventDefault();
        e.currentTarget.className="user-row";
        setDraged(false);
    };
    const dropHandler = (e, user) => {
        e.currentTarget.className="user-row";
        setDraged(false);
        // setDroped(true);
        props.dropUser(user._id);
    };

    const testSync = () => {
        localStorage.setItem('theme',`${Math.random()}`);
    };
    

    
    return (
        <>
            {
                editMode ? 
                <tr className={`user-row`} onDoubleClick={changeMode} onBlur={changeMode}>
                    <td><input type="checkbox" disabled={true} /></td>
                    <td><input placeholder="Name" onChange={e => handleInputChange(e.target)} value={inputValues.inputName} type="text" name="inputName"/></td>
                    <td><input placeholder="Surname" onChange={e => handleInputChange(e.target)} value={inputValues.inputSurname} type="text" name="inputSurname"/></td>
                    <td><input placeholder="Date of birth" onChange={e => handleInputChange(e.target)} value={dateFormating(inputValues.inputDate)} type="date" name="inputDate"/></td>
                    <td><button disabled={false} onClick={testSync}>Delete</button></td>
                </tr> :
                <tr 
                    id={props.id}
                    className={`user-row ${check ? `user-row__checked` : ''} ${draged? 'user-row_draged' : ''} ` }//${droped? 'user-row_droped' : ''}
                    onDoubleClick={changeMode}
                    draggable={true}
                    onDragEnd={dragEndHandler}
                    onDragStart={e => dragStartHandler(e, _id)}
                    onDragLeave={dragLeaveHnadler}
                    onDragOver={dragOverHandler}
                    onDrop={e => dropHandler(e, props.user)}
                >
                    <td className="user-checkbox"> 
                        <input type="checkbox" onChange={checkInput} name="vehicle1"/>
                    </td>
                    <td>{inputValues.inputName}</td>
                    <td>{inputValues.inputSurname}</td>
                    <td>{ageCalculate(inputValues.inputDate)}</td>
                    <td><button className="user-row_button" onClick={() => props.deleteUser(_id)}>Delete</button></td>
                </tr>
            }
            
            
        </>
        
    )
}

const mapDispatchToProps = {
    deleteUser,
    dragUser,
    saveUsersChanges,
    dropUser
}

export default connect(null, mapDispatchToProps)(User);

