# Auth0 + jQuery + Passwordless

This sample shows how you can use passwordless authentication in your single page application.

## Setup

You need to configure your app in the dashboard to use passwordless authentication
TODO: link to doc

## Running the example

In order to run the example you need to:

1. Create an auth0-variables.js file with your Auth0 credentials. You can use auth0-variables.sample.js as a template.
2. Install node
3. run `npm install -g serve`
4. run `serve` in the project's folder to start a server

Go to different urls depending on the sample you want to see:
* Send Code by SMS using Lock: `http://localhost:3000/lock-sms.html`
* Send Code by Email using Lock: `http://localhost:3000/lock-email-code.html`
* Send Magic Link by Email using Lock: `http://localhost:3000/lock-magic-link.html`
* Send Code by SMS using a custom UI and Auth0-js: `http://localhost:3000/custom-sms.html`
* Send Code by Email using a custom UI and Auth0-js: `http://localhost:3000/custom-email-code.html`
* Send Magic Link by Email using a custom UI and Auth0-js: `http://localhost:3000/custom-magic-number.html`
