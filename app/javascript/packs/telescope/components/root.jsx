import React from 'react';
import Main from './main';
import Navbar from './navbar';
import axios from 'axios';
import ReactNotification from 'react-notifications-component';

let token = document.getElementsByName('csrf-token')[0].getAttribute('content')
axios.defaults.headers.common['X-CSRF-Token'] = token
axios.defaults.headers.common['Accept'] = 'application/json'

class Root extends React.Component {
  constructor () {
    super();
    this.state = {
      currentUser: { username: null },
      currentUserSnapshot: {
        username: null,
        weeks: []
      }
    };

    this.fetchCurrentUserSnapshot = this.fetchCurrentUserSnapshot.bind(this);
    this.submitNewWeek = this.submitNewWeek.bind(this);
    this.addNotification = this.addNotification.bind(this);
    this.notificationDOMRef = React.createRef();
  }

  fetchCurrentUserSnapshot(username) {
    axios.get( `/api/v1/users/${username}` )
        .then(response => {
          console.log(response.data);
          this.setState({ currentUserSnapshot: response.data, currentUser: { username: response.data.username } });
        })
        .catch(error => {
          console.error(error);
        });
  }

  submitNewWeek(week) {
    console.log(week);
    console.log(this.state)
    var currentUserId = this.state.currentUserSnapshot.id;
    var currentUserUsername = this.state.currentUserSnapshot.username;
    week['user_id'] = currentUserId;
    var self = this;
    axios.post(`/api/v1/users/${currentUserId}/weeks`, week)
    .then(function (response) {
      console.log(response);
      self.addNotification('success', 'Success! Your new week has been logged.');
      self.props.history.goBack();
      self.fetchCurrentUserSnapshot(currentUserUsername);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  addNotification(type, message) {
    this.notificationDOMRef.current.addNotification({
      message: message,
      type: type,
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeInRight"],
      animationOut: ["animated", "fadeOutRight"],
      dismiss: { duration: 5000 },
      dismissable: { click: true }
    });
  }

  render() {
    return(
      <div>
        <Navbar currentUser={this.state.currentUser}/>
        <Main currentUser={this.state.currentUser}
              fetchCurrentUserSnapshot={this.fetchCurrentUserSnapshot}
              submitNewWeek={this.submitNewWeek}
              currentUserSnapshot={this.state.currentUserSnapshot}
        />
        <ReactNotification ref={this.notificationDOMRef} />
      </div>
    )
  }
}
export default Root
