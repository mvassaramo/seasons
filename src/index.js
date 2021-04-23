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

  renderContent() {
    const { errorMessage, lat} = this.state
    if (errorMessage && !lat) {
      return <Error message={errorMessage}/>
    }
    if (!errorMessage && lat) {
      return <SeasonDisplay lat={lat}/>
    }
    return <Spinner message="Please accept location request"/>
  }

  render() {
    return(
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)