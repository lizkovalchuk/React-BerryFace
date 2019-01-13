import React, { Component } from 'react';
import sphere from '../assets/images/3d.png';
import '../assets/css/home.css';
import LoginModal from '../components/loginModal';
import SignUpModal from '../components/signupModal';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom'





class HomePage extends React.Component {

    state={
         // 1 is for login 2 is for signup
    
        show1: true,
        show2: true
      }
    
      showLoginModal = () => {
          this.setState({
            ...this.state,
            show1: !this.state.show1
          })
      }

      showSignUpModal = () => {
        this.setState({
          ...this.state,
          show2: !this.state.show2
        })
    }

    





    render (){
        // if ((localStorage['berrykey'] != null) && (localStorage['berrykey'].length > 12)){
        //     return (
                
        //         <Redirect to='/Home'/>
        //     )
        // }
        //     else
        // {

        return (
            <div
            // page wrapper
            >
                <div>
                    <h1 style={{
                        paddingLeft: '10%',                        
                        fontSize: '5em',                        
                    }}>BerryFace</h1>
                </div>
                    <div 
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr'
                        }}
                    >
                        <div id="main__div_stage">
                            <img src={sphere} 
                            className="main__img_sphere" 
                            alt="logo"
                            style={{
                                maxWidth: '100%'                                
                            }} />
                        </div>
                        <div 
                        style={{
                            marginTop: '10%'
                        }}
                        >
                            <p 
                            style={{
                                fontSize: '2em',
                                // paddingTop: '30%',
                                // marginLeft: '-100px',
                                
                            }}>                            
                            An interface for your raspberry pi</p>
                            <div
                                style={{
                                    marginLeft: '20%'
                                }}
                            > 
                                <input
                                id="main__link_homePage" 
                                style={{
                                    textDecoration: 'none',
                                    border: '1px Solid white',
                                    borderRadius: '10px',
                                    padding: '1em',                                
                                    }}
                                href="/Home" 
                                class="main__button"
                                type={'button'}
                                value={'log-in'}
                                onClick={this.showLoginModal}
                                />
                                
                                <input 
                                id="main__link_homePage"
                                style={{                                    
                                    textDecoration: 'none',
                                    border: '1px Solid white',
                                    borderRadius: '10px',
                                    padding: '1em',
                                    margin:'5%'
                                    }}                                                                    
                                href="/Home" 
                                class="main__button"
                                type={'button'}
                                value={'sign-up'}
                                onClick={this.showSignUpModal}
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{
                       textAlign: 'center',
                       marginTop: '4rem'
                    }}>
                        <a
                         style={{                             
                            marginTop: '1em',
                            marginRight: '1em'
                            }}>about </a>
                        <a href="/"
                            style={{                             
                            textAlign: 'right',
                            marginTop: '1em',
                            marginRight: '1em',
                            textDecoration: 'none',
                            color: 'white'
                            }}>contact us</a>
                        <a href="/"
                            style={{ 
                            textAlign: 'right',
                            marginTop: '1em',
                            marginRight: '1em',
                            textDecoration: 'none',
                            color: 'white'
                            }}>terms of use</a>
                    </div>
                    <div>
                        <LoginModal 
                            onClose={this.showLoginModal }
                            show={this.state.show1}>                        
                        </LoginModal>
                    </div>
                    <div>
                        <SignUpModal
                            onClose={this.showSignUpModal }
                            show={this.state.show2}>  
                        </SignUpModal>
                    </div>
                </div>
        )
    //}
}
    
}

// export default HomePage;
export default HomePage;