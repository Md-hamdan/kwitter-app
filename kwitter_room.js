var firebaseConfig = {
      apiKey: "AIzaSyDqKLoIrkcoCFgz5YnOk0uaW37WwovNEyM",
      authDomain: "kwitter-eeb0b.firebaseapp.com",
      databaseURL: "https://kwitter-eeb0b-default-rtdb.firebaseio.com",
      projectId: "kwitter-eeb0b",
      storageBucket: "kwitter-eeb0b.appspot.com",
      messagingSenderId: "54229966800",
      appId: "1:54229966800:web:55b5c4a7583275e64de3d5"
    };

    firebase.initializeApp(firebaseConfig);

    var user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
      
      function add_room() {
            room_name = document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
                  purpose:"adding a room"
            })
            localStorage.setItem("room_name",room_name);
            window.location="kwitter_page.html";
      }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectToRoomName(name) {
       console.log(name);
        localStorage.setItem("room_name", name);
         window.location = "kwitter_page.html";
       }

       function logout() {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="index.html";
       }
       

