import React, { Component } from 'react';
import Gauge from 'react-radial-gauge';
import logo from '../assets/images/3d.png';
import '../App.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import  LiquidGauge  from '../components/liquidGauge.jsx';
import { Redirect } from 'react-router-dom'


// class customComponents extends Component{
//     render(){
//         return null;
//     }
// }
function logMeOut() {
    //localStorage['berrykey'] = null;
     return <Redirect to='/Home'/>
   }

class LandingPage extends Component { 

      
    render () {
        return (
            <div className="App"
            style={{
                paddingLeft: '15%'
                // margin: '0 auto'
            }}>
                <div                         
                    style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            paddingBottom: '4em'
                        }}>
                    <div>
                        <div className="App-header">
                        <a href="/"
                        style = {{
                            textDecoration:'none',
                            color:'white',
                            paddingLeft: '-200px'
                        }}
                        >
                        <img src={logo} 
                        className="App-logo" 
                        alt="logo" />            
                        </a>
                        </div>
                    </div>
                    <div
                        style={{
                            justifySelf: 'end',
                            paddingTop: '1em'
                        }}                    
                    >
                        <a
                         style={{                             
                            textAlign: 'right',
                            marginTop: '1em',
                            marginRight: '1em'
                            }}>username</a>
                        <a href="/"
                            style={{                             
                            textAlign: 'right',
                            marginTop: '1em',
                            marginRight: '1em',
                            textDecoration: 'none',
                            color: 'white'
                            }}>settings</a>
                        <a href="/"
                            style={{ 
                            textAlign: 'right',
                            marginTop: '1em',
                            marginRight: '1em',
                            textDecoration: 'none',
                            color: 'white'
                            }}
                           
                            onClick = {() => { logMeOut() }}
                            >logout</a>
                    </div>
                </div>
                <p className="App-intro"
                    style={{
                        // paddingTop:'-500px !important'
                        paddingRight: '10%'
                    }}
                >
                Your Enviroment
                </p>
                <div style={{
                    // page wrapper
                    paddingLeft: '1%',
                    paddingRight: '1%'
                }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        marginBottom: '5%'
                        }}>
                        <div>
                        <h2 style={{
                        paddingLeft: '10%'
                        }}
                        >Temperature History</h2>
                        <LineChart 
                            width={900} 
                            height={400} 
                            data={this.props.graphdata}
                            style={{
                                color:'#8884d8',
                                paddingRight: '50px'
                            }}
                            >
                            <Line type="monotone" dataKey="value" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="created_at"
                                stroke="white"
                            >
                            </XAxis>
                            <YAxis stroke="white" />
                            <Tooltip />
                        </LineChart>
                        </div>
                        <div>
                        <h2 style={{
                        paddingLeft: '10%'
                        }}
                        >Latest Temperature</h2>
                        <Gauge size={300} 
                            currentValue={this.props.temp}
                        />
                        </div>
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr'
                        }}>
                        <div>
                        <h2 style={{
                        paddingLeft: '10%',
                    }}
                    >Humidity History</h2>
                        <LineChart width={900} 
                                height={400} 
                                data={this.props.graphdatahumid}
                                style={{
                                    color:'#8884d8',
                                    paddingRight: '50px'
                                }}
                                >
                            <Line type="monotone" dataKey="value" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis stroke="white"  dataKey="created_at" />
                            <YAxis stroke="white"  />
                            <Tooltip />
                        </LineChart>
                        </div>
                        <div>
                        <h2 style={{
                        paddingLeft: '10%',
                        }}
                        >Latest Humidity</h2>
                        <LiquidGauge 
                            value={this.props.humid}
                            percent="%" 
                            textSize="1" 
                            // style={{
                            //     marginLeft: '100px'
                            // }}  

                        />
                        </div>
                    </div>
                </div>   {/* end of page wrapper */}
            </div> // end of app div
        )
    }
}


export default LandingPage;