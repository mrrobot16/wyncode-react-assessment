import React from 'react';
import './App.css';

class Notification extends React.Component {
  render(){
    if(this.props.notification) {
      const notification = this.props.notification
      const message = notification ? notification.message : ''
      return (
        <React.Fragment>
          <p>{message}</p>
        </React.Fragment>
      )
    }
    else {
      return(null)
    }
  }
}

class Confirmation extends React.Component {
  constructor() {
    super()
    this.state = { showConfirmation: true }
  }

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

  hideNotification(){
    this.setState( { showConfirmation: false } )
  }

  render(){
    const notification = this.props.notification
    const messageStyle = notification ? this.alertStylings(notification.type) : 'alert alert-info'
    if(this.props.notification && this.state.showConfirmation) {
      return(
        <div className={messageStyle}>
          <Notification notification={this.props.notification}/>
            <div className="btn btn-primary" onClick={()=>this.hideNotification()}>Sure</div>
            <div className="btn btn-danger" onClick={()=>this.hideNotification()}>No Thanks</div>
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
        <Confirmation notification={ { message: 'Hello World - Success', type: 'success' } }/>
        <Confirmation notification={ { message: 'Hello World - Message', type: 'message' } }/>
        <Confirmation notification={ { message: 'Hello World - Cation', type: 'cation' } }/>
        <Confirmation notification={ { message: 'Hello World - Error', type: 'error' } }/>
        <Confirmation/>
      </div>
    );
  }
}

export default App;
