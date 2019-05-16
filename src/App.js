import React from 'react';
import './App.css';
class Notification extends React.Component {
  alertStylings(alertType) {
    switch (alertType) {
      case 'success':
        return 'alert alert-success'
      case 'message':
        return 'alert alert-info'
      case 'cation':
        return 'alert alert-warning'
      case 'error':
        return 'alert alert-danger'
      default:
        return 'alert alert-info'
    }
  }
  render(){
    if(this.props.notification) {
      const notification = this.props.notification
      const message = notification ? notification.message : ''
      const messageStyle = this.alertStylings(notification.type)
      return (
        <div className={messageStyle}>
          { message }
        </div>
      )
    }
    else {
      return(null)
    }
  }
}
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Notification notification={ { message: 'Hello World - Success', type: 'success' } }/>
        <Notification notification={ { message: 'Hello World - Message', type: 'message' } }/>
        <Notification notification={ { message: 'Hello World - Cation', type: 'cation' } }/>
        <Notification notification={ { message: 'Hello World - Error', type: 'error' } }/>
        <Notification/>
      </div>
    );
  }
}

export default App;
