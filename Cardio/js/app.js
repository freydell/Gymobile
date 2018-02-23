/* (function(){
    //Recoge elementos
    console.log("entra a funcion");
    var txtEmail = document.getElementById('txtEmail');
    var txtPassword = document.getElementById('txtPassword');
    var btnLogin = document.getElementById('btnLogin');
    var btnSignup = document.getElementById('btnSignup');
    var btnLogout = document.getElementById('btnLogout');

    //evento login
    btnLogin.addEventListener('click', e=>{
        //saca email y pw
        console.log("entra a login");
        var email = txtEmail.value;
        var pass = txtPassword.value;
        var auth = firebase.auth();
        //sign in
        var promise = auth.signInWithEmailAndPassword(email,pass);
        promise.catch(e => console.log(e.message));
    });
}()); */