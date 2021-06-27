import axios from "axios";






export async function verifyLogin({ username, password }) {

    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     if (username === 'Matt' && password === 'password') {
    //       resolve();
    //     } else {
    //       reject();
    //     }
    //   }, 1000);
    // });





    const axios = require('axios')

    axios.post('http://13.126.181.110:8091/python/shevalues/user_signin', {
       
        "user_email": username,
        "password": password



      })
      .then(function (response) {
        console.log(response);
      })



  }