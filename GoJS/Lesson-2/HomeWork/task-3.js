var login = prompt('������� ��� �����','');

if (login == 'admin') {

    var pass = prompt('������� ������','');

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