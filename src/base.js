import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyApdan3VvfdhGeGUvNzK7Lg1xeTWzO5Bdk",
  authDomain: "wine-shop-a0e78.firebaseapp.com",
  databaseURL: "https://wine-shop-a0e78-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
