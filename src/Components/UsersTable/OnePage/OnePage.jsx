import React from 'react';
import './onePage.scss';

import User from './../User';


const OnePage = ({users, checkUser}) => {
    
    return (
        <>
        {
            users.map((user,index) => {
                return (
                    <User checkUser={checkUser} id={index} key={user._id} user={user}/>
                )
            })
        }
        </>
    )
};

export default OnePage;