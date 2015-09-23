$(document).ready(function() {

  /**
  * Auth0 UI - Auth0LockPasswordless
  */
  // Initialize Passwordless Lock instance
  var lock = new Auth0LockPasswordless(
    // All these properties are set in auth0-variables.js
    AUTH0_CLIENT_ID,
    AUTH0_DOMAIN
  );

  $('.btn-login').click(function(e) {
    e.preventDefault();
    // Open the lock in SMS mode with the ability to handle
    // the authentication in page
    lock.sms(function (err, profile, id_token, state) {
      // to be called on failure or successfull authentication
      if (err) {
        // Error callback
        console.log('There was an error',err);
        alert('There was an error logging in');
      } else {
        // Success calback

        // Save the JWT token.
        localStorage.setItem('userToken', id_token);
        console.log('profile',profile);
        $('.login-box').hide();
        $('.logged-in-box').show();
        $('.nickname').text(profile.name);
        $('.avatar').attr('src', profile.picture);
      }
    });
  });
  
});
