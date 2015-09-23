'use strict';

/**
* Custom UI - Auth0 Client
*/
// Initialize Auth0 Client instance
const auth0 = new Auth0({
  // All these properties are set in auth0-variables.js
  clientID: AUTH0_CLIENT_ID,
  domain: AUTH0_DOMAIN
});

function sendEmail(){
  const email = $('input.email').val();
  auth0.startPasswordless({ email, send: 'code' }, err => {
    if (err) {
      console.log('error sending e-mail',err.error_description);
      alert(`error sending e-mail: ${err.error_description}`);
      return;
    }
    // the request was successful and you should 
    // receive the magic link to the specified email
    $(".enter-code").show();
  });
}

function login(){
  const username = $('input.email').val();
  const password= $('input.code').val();

  //submit the passcode to authenticate the phone
  auth0.login(
    {
      connection:'email',
      username,
      password,
      'sso':false
    },(err, profile, id_token, access_token) => {
      if (err){
        console.log('error logging-in',err);
        alert(`Couldn't login ${err.message}`);
      } else {
        console.log('profile',profile);
        console.log('id_token',id_token);
        console.log('access_token',access_token);
        localStorage.setItem('userToken', id_token);
        $('.login-box').hide();
        $('.logged-in-box').show();
        $('.nickname').text(profile.name);
        $('.avatar').attr('src', profile.picture);
      }
    });
}
