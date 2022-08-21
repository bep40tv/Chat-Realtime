// Domain
const domain = "iconic-atrium-295406.firebaseapp.com";

// MySQL API
const apis = 'api.php';

// set image directori
const imageDir = 'image';

// Replace with: your firebase account
const config = {
    apiKey: "AIzaSyBN5MRjqOGBMXNYyTWeso0ITrafaeKz8Jc",
    databaseURL: "https://iconic-atrium-295406-default-rtdb.asia-southeast1.firebasedatabase.app"
};
firebase.initializeApp(config);

// create firebase child
const dbRef = firebase.database().ref();

const messageRef = dbRef.child('message');
const userRef = dbRef.child('user');
