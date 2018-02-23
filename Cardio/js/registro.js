(function(){

    init();

    function init(){

        var databaseRef = firebase.database().ref('users/');
        document.getElementById("registroSubmit").addEventListener("click",saveUser);
    }


    function saveUser(){
        var userName = document.getElementById('userName').value;
        var password = document.getElementById('password').value;
        var uid = firebase.database().ref().child('users').push().key;

        var data = {
            userId: uid,
            userName: userName,
            password: password
        }
        var updates = {};
        updates['/users/' + uid] = data;
        firebase.database().ref().update(updates);

        alert('el usuario ha sido creado exitosamente');
    }
})();