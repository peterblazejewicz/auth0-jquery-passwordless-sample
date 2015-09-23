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

function sendSMS(){
  const phoneNumber = $('input.phone-number').val();
  auth0.startPasswordless({ phoneNumber}, err => {
    if (err) {
      console.log('error sending SMS',err.error_description);
      alert(`error sending SMS: ${err.error_description}`);
      return;
    }
    // the request was successful and you should 
    // receive the passcode to the specified phone
    $(".enter-phone").hide();
    $(".enter-code").show();
  });
}

function login(){
  const phone = $('input.phone-number').val();
  const passcode = $('input.code').val();
  //submit the passcode to authenticate the phone
  auth0.login({phone,passcode},function(err, profile, id_token, access_token){
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
};
