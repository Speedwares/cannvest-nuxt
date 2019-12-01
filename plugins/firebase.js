import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyAp9YtfcyQHbeK1YMyqvE-djYqbBek_OPk",
        authDomain: "cannvest-site.firebaseapp.com",
        databaseURL: "https://cannvest-site.firebaseio.com",
        projectId: "cannvest-site",
        storageBucket: "cannvest-site.appspot.com",
        messagingSenderId: "44538779336",
        appId: "1:44538779336:web:b20f8c65288211a1"
    };
    firebase.initializeApp(firebaseConfig)
    // firebase.firestore().settings({timestampsInSnapshots: true})
}
const fireDb = firebase.firestore()
const auth = firebase.auth()

export {
    fireDb,
    auth
}