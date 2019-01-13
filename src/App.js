import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import HomePage from './components/home';
import LandingPage from './components/landingpage';
import axios from 'axios';




class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/Home" exact render={
            () => {
              return (
                <ApiGet/>            
              )
            }
          }/>
          <Route path="/" exact render={
            () => {
              return (<HomePage/> )
            }
          }/>
   
        </div>
      </Router>

    );
  }
}

class ApiGet extends React.Component {
  state = {
    ApiData: []
  }
  componentDidMount() {
    
 
    if (localStorage['berrykey'] == null) {
      console.log("NO KEY");
    }
    else
    {
    const BerryKey = localStorage['berrykey'];
    this.setState({BerryKey},function(){console.log("key:" + this.state.BerryKey)})
  }


    axios.get('http://167.99.182.241/berryface/get_json/?key=bfe24474-7743-11e8-bbc0-a61306eb84f9')
    //axios.get('http://167.99.182.241/berryface/get_json/')

    //So here, take API data, and then strip the array we want out of it for the graph, and shove it into graphme
    
      .then(res => {
        const ApiData = res.data;
        this.setState({ ApiData });

        //GRAPH DATA;
        const GraphTemp  = this.state.ApiData[0].types[0].entries;
        const GraphHumid = this.state.ApiData[1].types[1].entries;
        this.setState({ GraphTemp });
        this.setState({ GraphHumid });

        //CURRENTS
        let count = this.state.ApiData[0].types[0].entries.length;
        const CurrentTemp = this.state.ApiData[0].types[0].entries[count-1].value;

        count = this.state.ApiData[1].types[1].entries.length;
        const CurrentHumid = this.state.ApiData[1].types[1].entries[count-1].value;

        this.setState({ CurrentTemp });
        this.setState({ CurrentHumid });
      })
  }


  render() {
    return (
      <LandingPage graphdata={this.state.GraphTemp} graphdatahumid={this.state.GraphHumid} temp={this.state.CurrentTemp} humid={this.state.CurrentHumid} />
    )
  }
}

export default App;
