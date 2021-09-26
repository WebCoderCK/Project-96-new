// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDTRK7Hyq_yycMkIrWckXJogn6Y14_46P4",
    authDomain: "class-test-ffb7e.firebaseapp.com",
    databaseURL: "https://class-test-ffb7e-default-rtdb.firebaseio.com",
    projectId: "class-test-ffb7e",
    storageBucket: "class-test-ffb7e.appspot.com",
    messagingSenderId: "399552459262",
    appId: "1:399552459262:web:de7355394575984df4d0af",
    measurementId: "G-DDNG8M9GG3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room_name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

  function addRoom()
  {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
      });
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
  }

  function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "Kwitter_page.html";
  }

  function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
  }
