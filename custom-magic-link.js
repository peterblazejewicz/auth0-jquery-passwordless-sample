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

function sendMagicLink(){
  const email = $('input.email').val();
  auth0.startPasswordless({email}, err => {
    if (err) {
      console.log('error sending e-mail',err.error_description);
      alert(`error sending e-mail: ${err.error_description}`);
      return;
    }
    // the request was successful and you should 
    // receive the passcode to the specified phone
    $(".enter-email").hide();
    $(".email-sent").show();
  });
}

$(document).ready(() => {
  var hash = auth0.parseHash(window.location.hash);

  if (hash && hash.id_token) {
    //save the token in local storage:
    localStorage.setItem('id_token', hash.id_token);
    console.log('hash',hash);
    $('.login-box').hide();
    $('.logged-in-box').show();
    //retrieve profile
    auth0.getProfile(hash.id_token, function (err, profile) {
      if (err){
        console.log('err',err);
        alert(`There was an error retrieving your profile: ${err.message}`);
      } else {
        localStorage.setItem('profile', profile);
        $('.nickname').text(profile.name);
        $('.avatar').attr('src', profile.picture);
      }
    });
  }

  if (hash && hash.error) {
    alert('There was an error: ' + hash.error + '\n' + hash.error_description);
  }

});
