function signup(e){
    event.preventDefault();


    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;

    var user = {
        email:email,
        name:name,
        password:password,
        cpassword:cpassword,
    };

    var json =JSON.stringify(user);
    localStorage.setItem(name, json);
    console.log('user added');

}

function logicFunc(e){

    event.preventDefault();

    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    var result = document.getElementById('result').value;

    var user = localStorage.getItem(name);
    var data = JSON.parse(user);
    console.log(data);

    if(user==null){
        result.innerHTML = 'Wrong username';
    }else if(name==data.name && password == data.password){
        result.innerHTML = 'Logged in';
    }else{
        result.innerHTML = 'wrong password';
    }
}