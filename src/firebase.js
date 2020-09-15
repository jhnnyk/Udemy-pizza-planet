import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDNC5uabkC2htbPfnHuFtKOdTx1W3s_AAE',
  authDomain: 'udemy-pizza-planet.firebaseapp.com',
  databaseURL: 'https://udemy-pizza-planet.firebaseio.com',
  projectId: 'udemy-pizza-planet',
  storageBucket: 'udemy-pizza-planet.appspot.com',
  messagingSenderId: '990874135242',
  appId: '1:990874135242:web:2595ef385d2d1bd6516233',
};

firebase.initializeApp(config);
const db = firebase.firestore();

export const firebaseAuth = firebase.auth();
export const dbMenuRef = db.collection('menu');
export const dbOrdersRef = db.collection('orders');
