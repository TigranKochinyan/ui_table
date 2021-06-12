import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './usersTable.scss';

import OnePage from './OnePage';
import AddUser from './AddUser';
import Pagination from './Pagination';

import allUsers from './../../data';
import { deleteChecked, getUsers, updateFromStorage } from './../../store/actions';

const UsersTable = ({users, getUsers, deleteChecked, page, updateFromStorage}) => {
    const [checkedUsers, setCheckedUsers] = useState(new Set());
    const [pageUsers, setPageUsers] = useState([]);
    useEffect(() => {//component did mount
        localStorage.setItem('users', allUsers);
        getUsers(allUsers);
        
    },[]);
    useEffect(() => {//component did update
        setPageUsers(onePageUsers(page))
    },[users, page]);
    useEffect(() => {//component did update
        updateStorage(users);
        if (users.length !== 0) {
            updateFromStorage(users);
        }
    },[users]);
    window.addEventListener('storage', () => {
        let updatedUsers = JSON.parse(window.localStorage.getItem('users'));
        if (updatedUsers.length !== 0) {
            updateFromStorage(updatedUsers);
        }
      });

    const updateStorage = (users) => {
        localStorage.setItem('users', JSON.stringify(users));
    }
    const checkUser = (id) => {
        const users = new Set(checkedUsers);
        users.add(id);
        setCheckedUsers(users);
    };
    const removeChecked = () => {
        deleteChecked([...checkedUsers]);
        setCheckedUsers(new Set());
    };
    const onePageUsers = (page) => {
        const usersForOnePage = users.slice(page*6,page*6+6);
        return usersForOnePage;
    };
    const pageCount = () => {
        if (users.length%6 !== 0) {
            return parseInt(users.length/6)+1
        }
        return parseInt(users.length/6);
    };

    return (
        <>
            <div className="table-parent-div">
                <table className="usersTable">
                    <thead>
                        <tr >
                            <th></th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <OnePage checkUser={checkUser} users={pageUsers}/>
                    </tbody>
                </table>
            </div>
            <div className="table-next-div">
                <button className="usersTable_deleteButton" onClick={removeChecked}>Delete checked</button>
            </div>
            { users.length > 6 &&  <Pagination pageCount={pageCount()}/>}
            <AddUser/>
        </>
    )
};

const mapStateToProps = (store) => {
    return {
        users: store.users,
        page: store.page
    }
};

const mapDispatchToProps = {
    getUsers,
    deleteChecked,
    updateFromStorage
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);
