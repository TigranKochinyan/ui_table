import React, { useState } from 'react';
import { connect } from 'react-redux';
import './addUser.scss';
import { addUser } from './../../../store/actions'

import randomId from './../../../utils/idGenerator';

const AddUser = (props) => {
    const [inputValues, setInputValues] = useState({
        inputName: '',
        inputSurname: '',
        inputDate: new Date(),
    });
    const handleInputChanege = ({name, value}) => {
        setInputValues({
            ...inputValues,
            [name]: value
        })
    };
    const validation = () => {
        const values = Object.values(inputValues);
        console.log(values);
        for (let value of values) {
            if (value === '') return false;
        }
        return true;
    }
    const saveUser = (event) => {
        event.preventDefault();
        if (!validation()) {
            console.log(validation());
            return
        }
        const user = {
            _id: randomId(),
            name: inputValues.inputName,
            surname: inputValues.inputSurname,
            date: inputValues.inputDate
        }
        props.addUser(user);
    }
    return (
        <form className="addUser">
            <input className="addUser__input" value={inputValues.inputName} onChange={(event) => handleInputChanege(event.target) } name="inputName" placeholder="Name" type="text"/>
            <input className="addUser__input" value={inputValues.inputSurname} onChange={(event) => handleInputChanege(event.target) } name="inputSurname" placeholder="Surname" type="text"/>
            <input className="addUser__input" value={inputValues.inputDate} onChange={(event) => handleInputChanege(event.target) } max={(new Date()).toISOString().slice(0,10)} name="inputDate" placeholder="Date of birth" type="date"/>
            <button className="addUser__button" onClick={saveUser}>Save</button>
        </form>
    )
};

const mapDispatchToProps = {
    addUser
};

export default connect(null, mapDispatchToProps)(AddUser);