import * as actionTypes from './actionTypes';//not used
import allUsers from './../data';//not used

export function getUsers(users) {
    return (dispatch) => {
        dispatch({type: 'GET_USERS', users});
    };
};

export function addUser(user) {
    return (dispatch) => {
        dispatch({type: 'ADD_USER', user})
    };
};

export function deleteUser(userId) {
    return (dispatch) => {
        dispatch({type: 'DELETE_USER', userId});
    };
};

export function updateStorage(users) {
    return (dispatch) => {
        dispatch({ type: 'UPDATE_STORAGE', users });
    }
}
export function deleteChecked(checkedUsers) {
    return (dispatch) => {
        dispatch({ type: 'DELETE_CHECKED', checkedUsers })
    }
};

export function saveUsersChanges(user) { 
    return (dispatch) => {
        dispatch({type: 'SAVE_USER_CHANGES', user})
    }
}

export function changePage(page) { 
    return (dispatch) => {
        dispatch({type: 'CHANGE_PAGE', page})
    }
};

export function dragUser(user) {
    return (dispatch) => {
        dispatch({type: 'DRAG_USER', user})
    }
}

export function dropUser(id) {
    return (dispatch) => {
        dispatch({type: 'DROP_USER', id})
    }
};

export function updateFromStorage(users){
    return (dispatch) => {
        dispatch({type: 'UPDATE_FROM_STORAGE', users});
    }
}




