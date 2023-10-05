import axios from 'axios';
const baseURL = 'http://localhost:5000';
//const API = axios.create({ '});
const API = fetch(baseURL);
//export const logIn= (authData) => API.post('/user/login', authData);
//export const signUp = (authData) => API.post('/user/signup', authData);
export const logIn = (authData) => {
    return fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the content type according to your API's requirements
      },
      body: JSON.stringify(authData), // Convert authData to JSON and send it in the request body
    });
  };
  
  export const signUp = (authData) => {
    return fetch('/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the content type according to your API's requirements
      },
      body: JSON.stringify(authData), // Convert authData to JSON and send it in the request body
    });
  };
  