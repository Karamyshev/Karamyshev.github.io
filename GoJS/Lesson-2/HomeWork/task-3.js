var login = prompt('¬ведите ¬аш логин','');

if (login == 'admin') {

    var pass = prompt('¬ведите пароль','');

    if (pass == 'passw0rd') {
        alert('Welcome home!');
    } else if (pass == null) {
        alert('Canceled');
    }
    else {
        alert('Wrong password');
    }


} else if (login == null) {
    alert('Canceled');
} else {
    alert('Access denied');
}