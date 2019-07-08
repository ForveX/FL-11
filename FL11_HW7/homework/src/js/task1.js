let user_login;
let user_pwd;
let authorized;
let want_to_change;
let old_pwd;
let new_pwd;
let confirm_pwd;

user_login = prompt('Please enter your e-mail: ');

if (user_login === '' || user_login === null) {
    alert('Canceled');
} else if (user_login.length < 6) {
    alert("I don't know any emails having name length less than 6 symbols");
} else if (user_login === 'user@gmail.com' || user_login === 'admin@gmail.com') {
    user_pwd = prompt('Please enter your password: ');
    
    //ternary operator to check login & password pair and set flag to 3rd part of task
    user_login === 'user@gmail.com' && user_pwd === 'UserPass' || 
    user_login === 'admin@gmail.com' && user_pwd === 'AdminPass'
    ? authorized = 1 : authorized = 0;
} else { 
    alert('I don’t know you'); 
}

if (authorized === 1) {
    want_to_change = confirm('Do you want to change your password?');
    if (!want_to_change) {
        alert('You have failed the change.');
    } else {
        old_pwd = prompt('Please enter your old password: ');
        if (old_pwd === user_pwd) {
            new_pwd = prompt('Please enter new password: ');
            if (new_pwd.length >= 5) {
                confirm_pwd = prompt('Please confirm your new password: ');
                if (confirm_pwd === new_pwd) {
                    alert('You have successfully changed your password.');
                } else {
                    alert('You wrote the wrong password.');
                }
            } else { 
                alert('It’s too short password. Sorry.'); 
            }
        } else { 
            alert('You wrote the wrong old password.'); 
        }
    }
}