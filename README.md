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

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free Auth0 Account

1. Go to [Auth0](https://auth0.com) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
