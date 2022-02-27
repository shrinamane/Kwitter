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
roomname=localStorage.getItem("roomname")
function send() {
    msg=document.getElementById("message").value 
    firebase.database().ref(roomname).push({
        name:username,
        message: msg,
        like:0
        
    })
}

   function logout() {
         window.location= "index.html"
         localStorage.removeItem("username")
         localStorage.removeItem("roomname")
   }

   function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData
 = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
name=message_data['name']
message=message_data['message']
like=message_data['like']
namewithtag="<h4>"+name+"<img class='user_tick' src='tick.png'> </h4>"
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
button_with_tag ="<button id='+firebase_message_id+' value='+like+'onclick='update_like(this.id)' class='btn btn-primary'>"
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row=namewithtag+message_with_tag+button_with_tag+span_with_tag
document.getElementById("output").innerHTML+=row



} }); }); } getData();

function update_like(message_id){
    console.log(message_id)
    button_id=message_id
    likes=document.getElementById(button_id).value
    update_likes=Number(likes)+1
    firebase.database().ref(roomname).child(message_id).update({
        like:update_likes
    })
}