import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDHCJOil2A09hXTmj-FWyI_gdTePz4-XNU',
  authDomain: 'todoist-11ffb.firebaseapp.com',
  projectId: 'todoist-11ffb',
  storageBucket: 'todoist-11ffb.appspot.com',
  messagingSenderId: '888257782714',
  appId: '1:888257782714:web:999007a01d2ee9779b7383',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
