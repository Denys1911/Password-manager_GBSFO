# Password-manager

This app is created to help you manage all your passwords for different purposes (mails, 
devices, accounts, servers, etc).

You can find the project by [following link](https://password-manager-e57aa.firebaseapp.com/).

In this project, I was working with [firebase](https://firebase.google.com/) and using 
firebase-firestore to store all users passwords.

**Using technologies:** React (Hooks, Context), Bootswatch (themes for Bootstrap), prop-types and
react-router-dom libraries.

### This SPA has 4 pages: 
1. Home page - available for all users
2. Login page - available only for unauthorized users
3. Register page - available only for unauthorized users
4. Dashboard page - available only for authorized users

When a user registered or logged in, he will be redirected to the Dashboard. On the Dashboard page
there are Dashboard-panel (where user can edit and delete passwords), form for adding new passwords
and User-controls panel (where user can log out or delete account).

If a user will try to access Dashboard, when he isn't authorized, he will be redirected to the Login 
page. If vice versa, a user is authorized, he can't get access to the Login/Register page and will be 
redirected to the Home page.