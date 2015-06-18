var name = 'admin';

var message = (name == 'admin')? 'Hi':
    (name == 'manager')? 'Hello':
        (name == '')? 'No login':
            '';

alert (message);