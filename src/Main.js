import React, { Component } from 'react';

class Main extends Component {
    state = {
        users: [],
        active: 0
    }

    render() {
        let {users} = this.state;
        return(
            <div className="container-fluid">
                <Users />
                <ToDos />
            </div>
        );
    }
}

export default Main;