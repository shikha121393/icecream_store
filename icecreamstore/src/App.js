import React, {Component} from 'react';
import ReactDOM from "react-dom";
import './App.css';

class App extends Component{
   constructor(props) {
    super(props)
    this.state = {
      topIceCreamBusinesses: []
    };
  }

  getMoreInfo(id) {
    fetch("http://localhost:9000/details/"+id)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

  }
getReviews(id) {
    fetch("http://localhost:9000/reviews/"+ id)
      .then(res => res.json())
      .then(
        (result) => {
          
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

  }

  componentDidMount() {
    fetch("http://localhost:9000/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            topIceCreamBusinesses: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render(){
    return (
      <div className="App-container">

        {this.state.topIceCreamBusinesses.map(data => (
          <div className="App-subContainer">
            <div className="App-title"> {data.name}</div>
            <div>
              {data.location.address1} , {data.location.address2}, {data.location.city}
            </div>
            <div><span onClick={this.getMoreInfo.bind(this, data.id)}>more info</span>  <span onClick={this.getReviews.bind(this, data.id)}>reviews</span></div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
