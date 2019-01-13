import React from 'react';
import { Redirect } from 'react-router-dom'

function logMeIn() {
    //localStorage['berrykey'] = null;
     return <Redirect to='/Home'/>
   }

//gray background
 
const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 50
}

const modalStyle = {
    backgroundColor: '#bbc1cc',
    borderRadius: 5,
    maxWidth: 500,
    minHeight: 300,
    margin: '0 auto',
    padding: 80,
    position: 'relative',
    marginTop: '7%'
}

const footerStyle = {
    position: 'absolute',
    bottom: '20'
}

export default class LoginModal extends React.Component{

    onClose = (e) => {
         this.props.onClose && this.props.onClose(e);
    }

    render(){
        if(this.props.show){
            return null;
        }
        return(
            <div style={backdropStyle}>
                {this.props.children}
                <div style={modalStyle}>  
                    <div>
                        <h2 stlye={{fontSize: '100px'}}>Log In</h2>
                    </div>              
                    <form>
                        <fieldset style={{border: 'solid 1px white'}}>
                            <legend>Enter your credentials</legend>
                            <div style={{
                                paddingBottom: '0.5em',
                                paddingTop: '1em',
                                marginLeft: '30%'                               
                            }}>
                                <input
                                    className="form-item"
                                    placeholder="Email goes here..."
                                    name="username"
                                    type="text"                                
                                    onChange={this.handleChange}
                                    style={{minWidth: '200px', minHeight: '2em'}}
                                />
                            </div>
                            <div style={{
                                paddingBottom: '1em',
                                paddingTop: '1em',
                                marginLeft: '30%'  
                            }}>
                                <input
                                    className="form-item"
                                    placeholder="BarryFace password goes here..."
                                    name="password"
                                    type="password"
                                    onChange={this.handleChange}
                                    style={{minWidth: '200px', minHeight: '2em'}}
                                />
                            </div>
                            <div>
                                {/* <input 
                                    onClick={() => {logMeIn()}}
                                    className="form-submit"
                                    value="Submit"
                                    type="submit"
                                    style={{
                                        textDecoration: 'none',
                                        border: '1px Solid white',
                                        borderRadius: '10px',
                                        padding: '1em', 
                                        marginTop: '1em', 
                                        marginLeft: '45%',
                                        marginBottom: '3%'                                                               
                                        }} 
                                /> */}
                                <div style={{
                                    marginBottom: '5%',   
                                    marginTop: '5%'
                                }}>
                                <a 
                                    href="/Home"
                                    style={{
                                        textDecoration: 'none',
                                        border: '1px Solid white',
                                        borderRadius: '10px',
                                        padding: '1em',                                       
                                        backgroundColor: 'white',
                                        marginLeft: '45%'                                                          
                                        }} 
                                    >Submit</a>
                                </div>

                            </div>                        
                            </fieldset>
                            <div style={footerStyle}>
                                <button onClick={(e) => {this.onClose(e)}}
                                        style={{
                                            textDecoration: 'none',
                                            border: '1px Solid white',
                                            borderRadius: '10px',
                                            padding: '1em', 
                                            marginTop: '1em',
                                            color: 'red'
                                            // marginLeft: '375%',                    
                                            }}                            
                                >
                                    Cancel
                                </button>
                            </div>                        
                    </form>   
                </div>
            </div>
        )
    }
}