import React, { Component } from 'react';

const User = (props) => {
    let {name, isActive, index, setUserActive} = props;

    return(
        <button className={`list-group-item ${index == 0 ? 'active-user' : ''} ${isActive ? 'active-user' : ''} `} onClick={() => setUserActive(index)}>{name}</button>
    );
}

export default User;