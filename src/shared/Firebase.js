import { apiKey } from 'api';

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: apiKey,
  authDomain: 'finweb-49326.web.app',
  projectId: 'finweb-49326'
});

export var db = firebase.firestore();
//https://firebase.google.com/docs/firestore?hl=ko 참고
