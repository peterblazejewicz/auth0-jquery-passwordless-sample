# Auth0 + jQuery + Passwordless

This set of samples shows how you can use passwordless authentication in your single page application. There are samples for both SMS and Email connections and both using the Auth0 Lock widget or a custom UI.

## Scenarios

This sample contamplates different scenarios. For each of them, you should refer to the corresponding documentation in order to properly configure the connection in your dashboard.

### 1. Authenticate users with a one time code via SMS 

* [Documentation](https://auth0.com/docs/connections/passwordless/spa-sms)
* [Sample using Lock](./lock-sms.html)
* [Sample using a Custom UI](./custom-sms.html)

### 2. Authenticate users with a one time code via Email 

* [Documentation](https://auth0.com/docs/connections/passwordless/spa-email)
* [Sample using Lock](./lock-email-code.html)
* [Sample using a Custom UI](./custom-email-code.html)

### 3. Authenticate users with a magic link via Email 

* [Documentation](https://auth0.com/docs/connections/passwordless/spa-email)
* [Sample using Lock](./lock-magic-link.html)
* [Sample using a Custom UI](./custom-magic-link.html)

## Running the samples locally

1. Create an auth0-variables.js file with your Auth0 credentials. You can use auth0-variables.sample.js as a template.
2. Initialize a web server in the samples folder. You can do it for instance with `serve`:
	* Install node
	* run `npm install -g serve`
	* run `serve` in the project's folder to start a server
3. Go to different urls depending on the sample you want to see:
	* Send Code by SMS using Lock: `http://localhost:3000/lock-sms.html`
	* Send Code by SMS using a custom UI and Auth0-js: `http://localhost:3000/custom-sms.html`
	* Send Code by Email using Lock: `http://localhost:3000/lock-email-code.html`
	* Send Code by Email using a custom UI and Auth0-js: `http://localhost:3000/custom-email-code.html`
	* Send Magic Link by Email using Lock: `http://localhost:3000/lock-magic-link.html`
	* Send Magic Link by Email using a custom UI and Auth0-js: `http://localhost:3000/custom-magic-link.html`

	> Make sure the first callback URL configured in the dashboard is the URL corresponding to the sample you are running at each time.
