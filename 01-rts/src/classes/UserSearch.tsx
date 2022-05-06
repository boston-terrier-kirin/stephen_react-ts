import React from 'react';

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends React.Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find(
      (user) => user.name === this.state.name
    );
    this.setState({ user: foundUser });
  };

  render() {
    return (
      <div>
        <h1>User Search V2</h1>
        <input
          value={this.state.name}
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>
        <hr />
        <div>
          {this.state.user ? (
            <>
              <h3>Name: {this.state.user.name}</h3>
              <h3>Age:{this.state.user.age}</h3>
            </>
          ) : (
            <div>User Not Found</div>
          )}
        </div>
      </div>
    );
  }
}

export default UserSearch;
