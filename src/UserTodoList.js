import React, { Component } from 'react';
import UsersList from './UsersList';
import ToDosList from './ToDosList';

class UserTodoList extends Component {
    state = {
        users: []
    }

    updateUsers = users => {
        this.setState({ users });
    }

    render() {
        let {users} = this.state;
        let {updateUsers} = this;

        return(
            <div className="row">
                <UsersList {...{users, updateUsers}} />
                <ToDosList />
            </div>
        );
    }
}

export default UserTodoList;