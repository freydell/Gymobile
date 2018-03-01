/* (function(){

    init();

    function init(){

        var databaseRef = firebase.database().ref('users/');
        //document.getElementById("btnLogin").addEventListener("click",saveUser);
    }


    function saveUser(){
        var userName = document.getElementById('txtEmail').value;
        var password = document.getElementById('txtPassword').value;
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
})(); */
(function(){
    //inicializa firebase
    var config = {
		apiKey: "AIzaSyBlEMQkI_sMTBhH8SI_yCaBYzknOxXDvWA",
		authDomain: "gymobile-833e7.firebaseapp.com",
		databaseURL: "https://gymobile-833e7.firebaseio.com",
		projectId: "gymobile-833e7",
		storageBucket: "gymobile-833e7.appspot.com",
		messagingSenderId: "868316081247"
	};
	firebase.initializeApp(config);


    //Recoge elementos
    console.log("entra a funcion");
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignup = document.getElementById("btnSignup");
    const btnLogout = document.getElementById("btnLogout");

    //evento login
    btnLogin.addEventListener("click", e => {
        //saca email y pw
        console.log("entra a login");
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        //sign in
        firebase.auth().signInWithEmailAndPassword(email,pass).catch(e => console.log(e.message));
        printUsr();
    });

    //evento signup
    btnSignup.addEventListener("click", e => {
         //saca email y pw
         console.log("entra a signup");
         const email = txtEmail.value;
         const pass = txtPassword.value;
         const auth = firebase.auth();
         //sign in
         firebase.auth().createUserWithEmailAndPassword(email,pass).catch(e => console.log(e.message));
         printUsr();
    });
   /*  
    btnLogout.addEventListener("click", e=> {
        firebase.auth().signOut();
    }); */
    
    function printUsr(){
        //realtime listener
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser){
                console.log(firebaseUser);
                btnLogout.classList.remove('hide');
            }else{
                console.log("not logged in");
                btnLogout.classList.add('hide');
            }
        });
    }
}());