import React, { Component } from 'react';
import User from './User';

class UsersList extends Component{

    state = {
        inputMode: false,
        userName: ''
    }

    addUserName = () => {
        this.setState({ inputMode: true });
    }

    addUser = () => {
        let {users, updateUsers} = this.props;
        let {inputMode, userName} = this.state;

        const userId = Math.floor((Math.random() * 100) + 1);
        const user = {
            id: userId,
            name: userName,
            isActive: false,
            todo: []
        };

        users.push(user);
        this.setState({ inputMode: false });
        updateUsers(users);
    }

    changeInput = event => {
        this.setState({
            userName: event.target.value
        });
    }

    setUserActive = index => {
        let {users, updateUsers} = this.props;

        users.forEach((user, i) => {
            if(index == i){
                user.isActive = true;
            } else {
                user.isActive = false;
            }
        });
        updateUsers(users);
    }

    render() {
        let {inputMode} = this.state;
        let {addUserName, addUser, setUserActive, addName, changeInput} = this;
        let {users=[]} = this.props;

        let userList = users.map((obj, index) => {
            const {name, isActive} = obj;
            return(
                <User {...{name, isActive, index, setUserActive}} />
            );
        });

        return(
            <div className="col-lg-3 users-group">
                {
                    inputMode ?
                    <form>
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Enter Name" onChange={changeInput} autoFocus="true"/>
                            <div class="input-group-btn">
                                <button class="btn btn-default" type="button"><i class="glyphicon glyphicon-ok" onClick={addUser}></i></button>
                            </div>
                        </div>
                    </form> :
                    <div>
                        <button type="button" class="btn btn-primary" onClick={addUserName}>
                            Add User <span className="glyphicon glyphicon-plus"></span>
                        </button>
                    </div>
                }
                <div class="list-group">
                    {userList}
                </div>
            </div>
        );
    }
}

export default UsersList;