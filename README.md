<p align="center">
  <a href="https://tonystrawberry.codes/">
    <img src="https://firebase.google.com/static/downloads/brand-guidelines/PNG/logo-vertical.png" width="60" />
  </a>
</p>
<h1 align="center">
  Firebase Authentication Sample
</h1>

# ⚙️ Setup
Inside `signin.js`, `signup.js` and `index.html`, replace the Firebase configuration with your own.
Configuration can be found on the Firebase console after creating a project.

# 📧 Signup and Signin using Email and Password
1. Inside `signup.js` and `signin.js`, replace the `email` and `password` with dummy values.
2. Run `signup.js` and `signin.js` using `node signup.js` and `node signin.js` respectively.
3. Get the `accessToken` from the response in the logs. That access token will be used for authenticating requests with the backend.

# 📲 Signup and Signin using Google account
1. Run `index.html` on a local server using `http-server` command.
2. Open the `index.html` in the browser.
3. Click on the `Sign in` button.
4. Select the Google account you want to use for signing in.
5. Get the `accessToken` from the response in the logs. That access token will be used for authenticating requests with the backend.
