import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCGFj5DaWYDWXqM4kHqyz8R0kpRG4opZBE',
  authDomain: 'first-flight-with-friend-97334.firebaseapp.com',
  databaseURL: 'https://first-flight-with-friend-97334.firebaseio.com',
  projectId: 'first-flight-with-friend-97334',
  storageBucket: 'first-flight-with-friend-97334.appspot.com',
  messagingSenderId: '793546230189'
}
firebase.initializeApp(config)

export default firebase
export const database = firebase.database()
