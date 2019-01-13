import axios from 'axios';

export default class AuthService {
    // Initializing important variables
    constructor(domain) {
        this.domain = domain || 'http://167.99.182.241/berryface/view_token/' // API server domain
  
    }

    login(username, password) {
        var session_url = this.domain;
       
        axios({
            method: 'post',
            url: 'http://167.99.182.241/berryface/view_token/',
            data: {
              user: [{
                email:'admin@gmail.com',
                password:'admin'
              }]
            } 
                }).then(function(response) {
                console.log('Authenticated');
                console.log(response.data[0].token);
                if (response.data[0].token == false) {
                  invalidLogin = true;
                }
                else
                {invalidLogin = false;
                localStorage[BerryKey] = response.data[0].token;
                
                }
      
                }).catch(function(error) {
                console.log('Error on Authentication');
                console.log(error);
                invalidLogin = true;
                });   
    }

    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken() // GEtting token from localstorage
        return !!token && !this.isTokenExpired(token) // handwaiving here
    }


    setToken(idToken) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken)
    }

    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token')
    }

    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
    }





}
