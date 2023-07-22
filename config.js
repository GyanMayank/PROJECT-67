import firebase from 'firebase';

  var firebaseConfig = {
    //paste your SDK here
  apiKey: "AIzaSyCRvTKHOHPBu5mhmajLQ-WAf2cjNSKEMuc",
  authDomain: "team-voting-app-55cd4.firebaseapp.com",
  databaseURL: "https://team-voting-app-55cd4-default-rtdb.firebaseio.com",
  projectId: "team-voting-app-55cd4",
  storageBucket: "team-voting-app-55cd4.appspot.com",
  messagingSenderId: "410441346391",
  appId: "1:410441346391:web:6cb35ebe8f0d4f8a6b2212"
    
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();