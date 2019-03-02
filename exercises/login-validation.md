# Login validation

In the `login-validation` folder you have a already generated login validation form (`login.html`), along with the user data in `login.js`.  
Implement the actual login validation procedure. When the user clicks the login button, your code should verify that data is correctly entered and search the user data for a match on the username and password.  
- If the username is not found, the user should be shown an error message that the username is not found
- If the username is found, but the password is wrong, the user should be shown an error message that the password is incorrect
- If both username and password match, the login box should dissapear, and an appropriate greeting message should appear

**bonus** Add a functionality that when a users enters a wrong password 3 times, will lock out the account, i.e. won't allow login even with the correct password. The message displayed should indicate that.  
**bonus** Implement a `logout` button that will appear only after a successfull login.