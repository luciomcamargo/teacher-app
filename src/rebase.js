import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

var app = firebase.initializeApp({
  apiKey: 'AIzaSyBYgwDGW6uNMUGpe0tYIjFAapTiMfaqCd8',
  authDomain: 'teacher-app-1e7eb.firebaseapp.com',
  databaseURL: 'https://teacher-app-1e7eb.firebaseio.com',
  projectId: 'teacher-app-1e7eb',
  storageBucket: 'teacher-app-1e7eb.appspot.com',
  messagingSenderId: '411174253324'
});

var db = firebase.database(app);
var base = Rebase.createClass(db);

export default base;
