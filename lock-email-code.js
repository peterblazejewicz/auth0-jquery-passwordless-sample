/**
* Auth0 UI - Auth0LockPasswordless
*/
// Initialize Passwordless Lock instance
const lock = new Auth0LockPasswordless(
  // All these properties are set in auth0-variables.js
  AUTH0_CLIENT_ID,
  AUTH0_DOMAIN
);

function login(){
  // Open the lock in Email Code mode with the ability to handle
  // the authentication in page
  lock.emailcode((err, profile, id_token, state) => {
    if (!err) {
      console.log('profile',profile);
      console.log('id_token',profile);
      console.log('state',state);

      // Save the JWT token.
      localStorage.setItem('userToken', id_token);
      $('.login-box').hide();
      $('.logged-in-box').show();
      $('.nickname').text(profile.name);
      $('.avatar').attr('src', profile.picture);
    }
  });
}

