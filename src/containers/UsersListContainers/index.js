import React, {Component} from 'react';
import UserList from '../../components/UsersList';
import {connect} from 'react-redux';
import {findSmthField, getActiveUser, getUsersList} from '../../actions/usersAction';

class UserListContainers extends Component {

  constructor(props) {
    super(props);
    this.state = {
        inputValue: ''
    }
  }

  componentDidUpdate(prevProps, prevState) {

    if (this.state.inputValue !== '') {
      if (prevState.inputValue !== this.state.inputValue) {
        this.props.findSmthField(this.state.inputValue)
      }

    }
  }

  componentDidMount() {
        this.props.getUsersList();
    }


    render() {
        const {users, activeUser} = this.props.users;

        return (
            <UserList
              users={users}
              activeUser={activeUser}
              handleChange={this.handleChange}
              getActiveUser={this.props.getActiveUser}
            />
        );
    }

    handleChange = (e) => {
      e.preventDefault();

      this.setState({
        inputValue: e.target.value
      });
    };
}

const mapStateToProps = state => ({
  users: state.users,
  activeUser: state.activeUser
});

const mapDispatchToProps = dispatch => ({
  getUsersList: () => dispatch(getUsersList()),
  getActiveUser: (id) => dispatch(getActiveUser(id)),
  findSmthField: (word) => dispatch(findSmthField(word))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainers);
