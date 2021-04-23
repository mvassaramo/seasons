import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';
import Error from './Error';
class App extends React.Component {
  state = {
    lat: null,
    errorMessage: ''
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate(){
    console.log('UPDATE')
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <Error message={this.state.errorMessage}/>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }
    return <Spinner message="Please accept location request"/>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)