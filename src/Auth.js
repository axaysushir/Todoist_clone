import withFirebaseAuth from 'react-with-firebase-auth'
import 'firebase/auth'
import {firebase} from './firebase'
import React from 'react'

const firebaseApp = firebase.initializeApp(firebase)

const firebaseAppAuth = firebaseApp.auth()

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider()
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth, 
})(Auth)


function Auth() {
    const {user, signOut, signInWithGoogle} = this.props;
    return (
        <div className="App">
        <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {
        user 
          ? <p>Hello, {user.displayName}</p>
          : <p>Please sign in.</p>
      }
      {
        user
          ? <button onClick={signOut}>Sign out</button>
          : <button onClick={signInWithGoogle}>Sign in with Google</button>
      }
    </header>
  </div>
    )
}
