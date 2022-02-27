
var firebaseConfig = {
      apiKey: "AIzaSyCcqjnexRELodLLwXsut8DZ8Efj4nSdaRc",
  authDomain: "kwitter-app-2-dd4e0.firebaseapp.com",
  databaseURL: "https://kwitter-app-2-dd4e0-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-2-dd4e0",
  storageBucket: "kwitter-app-2-dd4e0.appspot.com",
  messagingSenderId: "991449593264",
  appId: "1:991449593264:web:010790ae443c6910eed275"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("username")
document.getElementById("welcome").innerHTML="WELCOME "+ username
function addroom () {
      roomname= document.getElementById("roomname").value
     localStorage.setItem("roomname",roomname)
     firebase.database().ref("/").child(roomname).update({
           purpose:"adding room name"
     })
     window.location="kwitter_page.html"
     
     }
     function logout() {
           window.location= "index.html"
           localStorage.removeItem("username")
           localStorage.removeItem("roomname")
     }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names)
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+" </div> <hr>"
document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();
function redirectToRoomName(name) {
      console.log(name)
      localStorage.setItem("room_name",name)
window.location= "kwitter_page.html"







      
      

}
    